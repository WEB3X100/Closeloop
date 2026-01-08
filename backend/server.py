from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app
app = FastAPI()

# Create router with /api prefix
api_router = APIRouter(prefix="/api")

# --- Models ---

class LeadCreate(BaseModel):
    email: EmailStr
    name: str
    phone: str
    leads: Optional[str] = None
    crm: Optional[str] = None

class Lead(LeadCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    status: str = "new"
    created_at: datetime = Field(default_factory=datetime.utcnow)

class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

# --- Routes ---

@api_router.get("/")
async def root():
    return {"message": "CloseLoop API is running"}

@api_router.post("/leads", response_model=Lead)
async def create_lead(lead_in: LeadCreate):
    try:
        lead_dict = lead_in.dict()
        lead_obj = Lead(**lead_dict)
        
        # Insert into MongoDB
        await db.leads.insert_one(lead_obj.dict())
        
        return lead_obj
    except Exception as e:
        logger.error(f"Error creating lead: {str(e)}")
        raise HTTPException(status_code=500, detail="Could not save lead")

@api_router.get("/leads", response_model=List[Lead])
async def get_leads():
    # Limit to last 100 for safety
    leads = await db.leads.find().sort("created_at", -1).limit(100).to_list(100)
    return [Lead(**lead) for lead in leads]

# Keep original status check for compatibility
@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: dict):
    # Simplified for backup
    status_obj = StatusCheck(client_name=input.get("client_name", "unknown"))
    await db.status_checks.insert_one(status_obj.dict())
    return status_obj

# Include router
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

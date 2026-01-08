#!/usr/bin/env python3
"""
Backend API Testing for CloseLoop API
Tests the health endpoint, lead creation, and lead retrieval functionality.
"""

import requests
import json
import sys
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading backend URL: {e}")
        return None

def test_health_endpoint(base_url):
    """Test the health check endpoint at /api/"""
    print("\n=== Testing Health Endpoint ===")
    try:
        url = f"{base_url}/api/"
        print(f"Testing: {url}")
        
        response = requests.get(url, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "CloseLoop API is running":
                print("✅ Health check PASSED")
                return True
            else:
                print(f"❌ Health check FAILED - Expected 'CloseLoop API is running', got: {data}")
                return False
        else:
            print(f"❌ Health check FAILED - Status code: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Health check FAILED - Error: {str(e)}")
        return False

def test_create_lead(base_url):
    """Test creating a new lead via POST /api/leads"""
    print("\n=== Testing Lead Creation ===")
    try:
        url = f"{base_url}/api/leads"
        print(f"Testing: {url}")
        
        # Test data with realistic values
        lead_data = {
            "email": "john.doe@example.com",
            "name": "John Doe",
            "phone": "+1-555-123-4567",
            "crm": "salesforce"
        }
        
        print(f"Sending data: {json.dumps(lead_data, indent=2)}")
        
        response = requests.post(
            url, 
            json=lead_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            # Verify the response contains expected fields
            required_fields = ["id", "email", "name", "phone", "status", "created_at"]
            missing_fields = [field for field in required_fields if field not in data]
            
            if not missing_fields:
                print("✅ Lead creation PASSED")
                print(f"Created lead ID: {data.get('id')}")
                return True, data
            else:
                print(f"❌ Lead creation FAILED - Missing fields: {missing_fields}")
                return False, None
        else:
            print(f"❌ Lead creation FAILED - Status code: {response.status_code}")
            return False, None
            
    except Exception as e:
        print(f"❌ Lead creation FAILED - Error: {str(e)}")
        return False, None

def test_get_leads(base_url, created_lead=None):
    """Test fetching leads via GET /api/leads"""
    print("\n=== Testing Lead Retrieval ===")
    try:
        url = f"{base_url}/api/leads"
        print(f"Testing: {url}")
        
        response = requests.get(url, timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Retrieved {len(data)} leads")
            
            if isinstance(data, list):
                if created_lead:
                    # Check if our created lead is in the list
                    created_lead_id = created_lead.get('id')
                    found_lead = None
                    for lead in data:
                        if lead.get('id') == created_lead_id:
                            found_lead = lead
                            break
                    
                    if found_lead:
                        print(f"✅ Lead retrieval PASSED - Found created lead: {created_lead_id}")
                        return True
                    else:
                        print(f"❌ Lead retrieval FAILED - Created lead not found in list")
                        print(f"Looking for ID: {created_lead_id}")
                        print(f"Available IDs: {[lead.get('id') for lead in data[:5]]}")  # Show first 5
                        return False
                else:
                    print("✅ Lead retrieval PASSED - Successfully retrieved leads list")
                    return True
            else:
                print(f"❌ Lead retrieval FAILED - Expected list, got: {type(data)}")
                return False
        else:
            print(f"❌ Lead retrieval FAILED - Status code: {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Lead retrieval FAILED - Error: {str(e)}")
        return False

def main():
    """Run all backend tests"""
    print("Starting CloseLoop API Backend Tests")
    print("=" * 50)
    
    # Get backend URL
    base_url = get_backend_url()
    if not base_url:
        print("❌ CRITICAL ERROR: Could not get backend URL from frontend/.env")
        sys.exit(1)
    
    print(f"Backend URL: {base_url}")
    
    # Track test results
    results = {
        "health": False,
        "create_lead": False,
        "get_leads": False
    }
    
    # Test 1: Health check
    results["health"] = test_health_endpoint(base_url)
    
    # Test 2: Create lead
    create_success, created_lead = test_create_lead(base_url)
    results["create_lead"] = create_success
    
    # Test 3: Get leads (and verify created lead if creation succeeded)
    results["get_leads"] = test_get_leads(base_url, created_lead if create_success else None)
    
    # Summary
    print("\n" + "=" * 50)
    print("TEST SUMMARY")
    print("=" * 50)
    
    total_tests = len(results)
    passed_tests = sum(results.values())
    
    for test_name, passed in results.items():
        status = "✅ PASSED" if passed else "❌ FAILED"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
    
    print(f"\nOverall: {passed_tests}/{total_tests} tests passed")
    
    if passed_tests == total_tests:
        print("🎉 All tests PASSED!")
        return 0
    else:
        print("⚠️  Some tests FAILED!")
        return 1

if __name__ == "__main__":
    exit_code = main()
    sys.exit(exit_code)
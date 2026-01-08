# API Contracts

## Overview
This document outlines the API contracts for the CloseLoop Landing Page MVP.

## Endpoints

### 1. Create Lead
- **URL**: `/api/leads`
- **Method**: `POST`
- **Description**: Captures lead information from the "Book Demo" form.
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "name": "John Doe",
    "phone": "555-555-5555",
    "leads": "50-100",
    "crm": "zillow"
  }
  ```
- **Response**:
  ```json
  {
    "id": "uuid-string",
    "email": "user@example.com",
    "status": "new",
    "created_at": "2023-10-27T10:00:00Z"
  }
  ```

### 2. Health Check
- **URL**: `/api/`
- **Method**: `GET`
- **Response**: `{"message": "Hello World"}`

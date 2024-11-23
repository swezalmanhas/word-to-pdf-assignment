Here’s a **detailed `README.md`** template tailored for your project. You can modify it further based on your preferences:

---

# Word to PDF Conversion Backend

This is the backend implementation of a **Word to PDF Conversion Application**. It provides APIs for uploading Word documents and converting them to PDF format.

---

## Features

- **File Upload**: Supports uploading Word files (.docx).
- **File Conversion**: Converts Word documents to PDF format.
- **Error Handling**: Comprehensive middleware for managing errors.
- **Separation of Concerns**: Organized structure with controllers, services, and routes.

---

## Project Structure

```
backend/
├── controllers/
│   └── fileController.js    # Handles file upload and conversion logic
├── middlewares/
│   └── errorMiddleware.js   # Middleware for handling errors
├── routes/
│   └── fileRoutes.js        # API routes for file operations
├── services/
│   └── pdfService.js        # Business logic for Word to PDF conversion
```

---

## Prerequisites

- **Node.js** (v14+)
- **npm** (v6+)
- Any tool for testing APIs (e.g., Postman)

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/swezalmanhas/word-to-pdf-assignment.git
   cd word-to-pdf-assignment/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000` (or the specified port).

---

## API Endpoints

### 1. **Upload Word File**
- **URL**: `/api/files/upload`
- **Method**: `POST`
- **Description**: Accepts a Word file and converts it to PDF.
- **Request**:
  - Form-data:
    - `file` (type: file) - Word document to upload.
- **Response**:
  - Success (HTTP 200): Returns the PDF file URL.
  - Failure (HTTP 400/500): Error details.

---

## Detailed Module Descriptions

### 1. `fileController.js`
- Handles API requests for uploading and converting files.
- Invokes methods from `pdfService.js` for actual processing.

### 2. `errorMiddleware.js`
- Global error handler for catching and responding to runtime errors.
- Returns consistent error responses for client-side debugging.

### 3. `fileRoutes.js`
- Defines routes for handling file-related requests.
- Maps routes to corresponding controller methods.

### 4. `pdfService.js`
- Core service responsible for converting Word files to PDF.
- Ensures efficient and error-free processing.

---

## Acknowledgments

- **Node.js**: Backend runtime environment.
- **Express.js**: Web application framework.
- Contributors and community for their support.

--- 


Here's a **short documentation** for the frontend part of your project:  

---

## Frontend Documentation  

The frontend of the **Word to PDF Conversion Application** is designed for user interaction, allowing them to upload Word documents and view their metadata or converted files.  

---

### Features  

- **File Upload Interface**: User-friendly interface for uploading Word files.  
- **Metadata Display**: Displays file-related metadata.  
- **API Integration**: Seamless connection to the backend for processing.  
- **Utility Functions**: Modularized utilities for handling common tasks.  

---

### Project Structure  

```
frontend/
├── src/
│   ├── api/
│   │   └── axios.js           # Axios instance for API requests
│   ├── components/
│   │   └── MetadataDisplay.js # Component for displaying file metadata
│   ├── utils/
│   │   └── formatUtils.js     # Utility functions for formatting
│   └── api.js                 # API calls for the application
```

---

### Key Modules  

#### 1. `axios.js`  
- Custom Axios instance for managing HTTP requests.  
- Includes base URL configuration for backend communication.  

#### 2. `MetadataDisplay.js`  
- React component for displaying file metadata, such as name, size, and type.  
- Dynamically updates based on user-uploaded files.  

#### 3. `formatUtils.js`  
- Utility functions for formatting data (e.g., file size).  
- Ensures consistent data representation across the application.  

#### 4. `api.js`  
- Centralized API interaction module.  
- Abstracts backend endpoints for file upload and metadata retrieval.  

---

### How to Run the Frontend  

1. Navigate to the `frontend` directory:
   ```bash
   cd word-to-pdf-assignment/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Access the application at `http://localhost:3000`.  

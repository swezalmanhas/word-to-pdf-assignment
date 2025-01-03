Here's the updated README with the deployment link added for the frontend:

---

# 📝 Word to PDF Conversion Backend

This is the backend implementation of a **Word to PDF Conversion Application** that provides APIs for uploading Word documents and converting them into PDF format. 🚀

---

## 🌟 Features

✨ **File Upload:** Supports uploading Word files (`.docx`).  
✨ **File Conversion:** Converts Word documents to PDF seamlessly.  
✨ **Error Handling:** Comprehensive middleware for managing errors effectively.  
✨ **Separation of Concerns:** Organized structure with controllers, services, and routes for clean code.  

---

## 📁 Project Structure

```
backend/
├── controllers/
│   └── fileController.js    # 🖋 Handles file upload and conversion logic
├── middlewares/
│   └── errorMiddleware.js   # 🚨 Middleware for handling errors
├── routes/
│   └── fileRoutes.js        # 🌐 API routes for file operations
├── services/
│   └── pdfService.js        # ⚙️ Business logic for Word to PDF conversion
```

---

## 🔧 Prerequisites

✔️ **Node.js** (v14+)  
✔️ **npm** (v6+)  
✔️ Any API testing tool (e.g., Postman)  

---

## 🚀 Installation and Setup

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/swezalmanhas/word-to-pdf-assignment.git
   cd word-to-pdf-assignment/backend
   ```

2. **Install dependencies:**  
   ```bash
   npm install
   ```

3. **Start the server:**  
   ```bash
   npm start
   ```

   🎉 The server will run on **http://localhost:3000** (or your specified port).

---

## 🔗 API Endpoints

### 1️⃣ **Upload Word File**  
   - **URL:** `/api/files/upload`  
   - **Method:** `POST`  
   - **Description:** Accepts a Word file and converts it to PDF.  
   - **Request:**  
     - `Form-data:`  
       - `file` (type: file) - Word document to upload.  
   - **Response:**  
     - ✅ **Success (HTTP 200):** Returns the PDF file URL.  
     - ❌ **Failure (HTTP 400/500):** Error details.  

---

## 📂 Detailed Module Descriptions

### 🔹 `fileController.js`  
Handles API requests for uploading and converting files. Invokes methods from `pdfService.js` for processing.

### 🔹 `errorMiddleware.js`  
Global error handler for catching and responding to runtime errors. Ensures consistent error responses for debugging.

### 🔹 `fileRoutes.js`  
Defines routes for file-related requests and maps them to corresponding controller methods.

### 🔹 `pdfService.js`  
Core service responsible for Word-to-PDF conversion, ensuring efficient and error-free processing.

---

## 🙌 Acknowledgments

Special thanks to:  
💻 **Node.js** - Backend runtime environment  
🌐 **Express.js** - Web application framework  
🎉 **Contributors** - For their support and ideas  

---

# 🌈 Frontend Documentation

The frontend of the **Word to PDF Conversion Application** provides a seamless and intuitive interface for user interaction. 🖥️

---

## ✨ Features

🌟 **File Upload Interface:** User-friendly interface for uploading Word files.  
🌟 **Metadata Display:** Displays file-related metadata for uploaded documents.  
🌟 **API Integration:** Connects seamlessly with the backend for processing.  
🌟 **Utility Functions:** Modularized utilities for handling common tasks.  

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── api/
│   │   └── axios.js           # 🌐 Axios instance for API requests
│   ├── components/
│   │   └── MetadataDisplay.js # 📋 Component for displaying file metadata
│   ├── utils/
│   │   └── formatUtils.js     # 🔧 Utility functions for formatting
│   └── api.js                 # 🔌 API calls for the application
```

---

## 📂 Key Modules

### 🔹 `axios.js`  
Custom Axios instance for managing HTTP requests. Includes base URL configuration for backend communication.

### 🔹 `MetadataDisplay.js`  
React component for displaying file metadata such as name, size, and type. Dynamically updates based on user-uploaded files.

### 🔹 `formatUtils.js`  
Utility functions for formatting data (e.g., file size), ensuring consistent representation across the app.

### 🔹 `api.js`  
Centralized API interaction module. Abstracts backend endpoints for file upload and metadata retrieval.

---

## 🛠️ How to Run the Frontend

1. **Navigate to the frontend directory:**  
   ```bash
   cd word-to-pdf-assignment/frontend
   ```

2. **Install dependencies:**  
   ```bash
   npm install
   ```

3. **Start the development server:**  
   ```bash
   npm start
   ```

4. **Access the application locally:**  
   🌐 Open **http://localhost:3000** in your browser.  

5. **Deployed Application:**  
   🎉 The application is live at **[ConvertDoc.netlify.app](https://convertdoc.netlify.app)**  

---

🎉 **Happy Coding!** 🚀  
Made with ❤️ by [Swezal Manhas](https://github.com/swezalmanhas)  

--- 

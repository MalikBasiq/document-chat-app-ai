# 📄 Doc Chat AI

Welcome to **Doc Chat AI**, an app that lets you upload a document and ask questions from its contents, powered by **LangChain** and **OpenAI's GPT-3.5-turbo**! This API processes your document and uses a language model to provide intelligent answers based on the document's content.

## 🚀 Features

- **Document-Based Q&A**: Ask questions directly from your uploaded document.
- **Powered by GPT-3.5-turbo**: Leverages OpenAI's powerful language model to understand and answer questions.
- **Express API**: Simple and fast API built with Node.js and Express.
- **LangChain Integration**: Efficiently handles document parsing and question-answering logic.
- **PDF Support**: Upload a PDF document to the system.

## 🛠️ Technologies Used

- **JavaScript**: Core programming language.
- **Node.js**: Runtime for server-side operations.
- **Express**: Web framework for building the API.
- **LangChain**: Library to structure the document-to-question flow.
- **OpenAI GPT-3.5-turbo**: Language model for generating intelligent responses.
- **PDF Parsing**: For handling document uploads.

## 📚 How It Works

1. **Upload a PDF**: Upload the document you want to interact with.
2. **Ask Questions**: Query the document for specific details, and get intelligent answers in return.
3. **API Call**: Make requests to the `/api/doc_chat` route to interact with the document.

## 🔥 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/document-chat-app-ai.git
cd doc-chat-ai

2. Install Dependencies
npm install

3. Set Up Environment Variables
Create a .env file in the root of your project and add your OpenAI secret key:

OPENAI_API_KEY=your_openai_api_key

4. Start the Server
npm start

The server will be running on http://localhost:3000

5. API Route
Use the following route to interact with your uploaded document:

POST /api/doc_chat
Send a question to the document chat API, and it will respond with an answer based on the document's content.

🧪 Example API Request

POST /api/doc_chat
Content-Type: application/json

{
  "question": "What is the main topic of the document?"
}

Response:

{
  "answer": "The document primarily discusses..."
}

🎯 Future Enhancements
Support for Additional File Formats: Extend functionality to support more file types like DOCX, TXT, etc.
Multi-Language Support: Enable the app to answer questions in multiple languages.
Enhanced Document Search: Improve the precision of responses by incorporating advanced document search techniques.

📧 Contact
Created by Malik. If you have any questions or feedback, feel free to reach out at basiq.malik@gmail.com.

Enjoy using Doc Chat AI! 🎉

This version includes a clear instruction about adding the OpenAI secret key to the `.env` file. Let me know if you need any further adjustments!







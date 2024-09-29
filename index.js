import express, { json } from "express";

import document_chat from './routes/document-chat.js';
var app = express();

app.use(json())
app.use('/api/doc_chat', document_chat);

app.listen(3000, () => {
    console.log("listening on port 3000")
})
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import express, { json } from "express";
const router = express.Router()
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings, OpenAI } from "@langchain/openai";
import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";
import { RetrievalQAChain } from "langchain/chains";
import * as dotenv from "dotenv";
import { join } from 'path'

dotenv.config();



router.get("/:question", async (req, res) => {


  const __dirname = import.meta.dirname;

  const loader = new PDFLoader(join(__dirname, '.', 'practice_file.pdf'));

  const docs = await loader.load();


  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 20,
  });


  const splittedDocs = await splitter.splitDocuments(docs);

  // Note: The OpenAIEmbeddings class automatically reads the OPENAI_API_KEY from the environment variables have to set in env file.
  const embeddings = new OpenAIEmbeddings();

  const vectorStore = await HNSWLib.fromDocuments(  //in-memory vector store
    splittedDocs,
    embeddings
  );

  const vectorStoreRetriever = vectorStore.asRetriever();

  // Note: The OpenAI class automatically reads the OPENAI_API_KEY from the environment variables have to set in env file.
  const model = new OpenAI({
    modelName: 'gpt-3.5-turbo', // specify the model to use
    temperature: 0.5,
  });

  const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);

  const question = req.params.question;

  const answer = await chain.call({
    query: question
  });

  res.json({
    question,
    answer
  })
});



export default router;
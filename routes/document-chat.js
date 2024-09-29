import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import express, { json } from "express";
const router = express.Router()
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings,OpenAI } from "@langchain/openai";
import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";
import { RetrievalQAChain } from "langchain/chains";
import * as dotenv from "dotenv";
import { join } from 'path'

dotenv.config();



router.get("/:question", async(req, res) => {


const __dirname = import.meta.dirname;

  const loader = new PDFLoader(join(__dirname, '.', 'practice_file.pdf' ));
  
  const docs = await loader.load();

  
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 20,
  });
  

  const splittedDocs = await splitter.splitDocuments(docs);
  
  const embeddings = new OpenAIEmbeddings();
  
  const vectorStore = await HNSWLib.fromDocuments(  //in-memory vextor store
    splittedDocs,
    embeddings
  );
  
  const vectorStoreRetriever = vectorStore.asRetriever();
  
  const model = new OpenAI({
    modelName: 'gpt-3.5-turbo',
    temperature: 0.5,
  });
  
  const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
  
  const question = req.params.question;
  
  const answer = await chain.call({
    query: question
  });
  
  console.log({
    question,
    answer
  });

  res.json({
    question,
    answer
  })
});



export default router;
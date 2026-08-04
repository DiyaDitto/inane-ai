# Inane AI

An AI-powered knowledge assistant for SSC examination preparation. Inane AI uses Retrieval-Augmented Generation (RAG) to retrieve relevant information from a knowledge base and generate context-aware answers to user queries, making learning more interactive and accessible.

---

## Overview

Inane AI is a learning project that demonstrates how Retrieval-Augmented Generation (RAG) can be applied to educational content. The project allows users to interact with SSC study material through natural language, providing relevant and context-aware responses based on the available knowledge base.

---

## Features

- AI-powered question answering
- Retrieval-Augmented Generation (RAG)
- Knowledge base search using semantic retrieval
- Document processing and indexing
- Context-aware response generation

---

## Tech Stack

- **Frontend:** React, Vite
- **Backend:** FastAPI, Python
- **AI:** Google Gemini
- **Vector Database:** ChromaDB

---

## Project Structure

```text
Inane-AI/
│
├── backend/
│   ├── app/
│   ├── uploads/
│   ├── chroma_db/
│   ├── requirements.txt
│   └── main.py
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── README.md
├── .gitignore
└── LICENSE
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/<your-username>/Inane-AI.git
cd Inane-AI
```

### Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---


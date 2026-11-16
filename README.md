# SigmaGPT

A full-stack ChatGPT-style chat app built with the MERN stack and the OpenAI API.
Conversations are saved as threads so you can come back to them later.

**Live demo:** _coming soon_ · **Screenshot:** _coming soon_

## Features
- Chat with an OpenAI model through a custom Express API
- Conversation threads stored in MongoDB, listed in a sidebar, most recent first
- Open any past thread and continue it, or delete it
- React frontend with a sidebar and chat window, state shared through Context API

## Tech Stack
React (Vite) · Node.js · Express · MongoDB (Mongoose) · OpenAI API

## API
| Method | Endpoint | Purpose |
|---|---|---|
| GET | /api/thread | List all threads |
| GET | /api/thread/:threadId | Get messages in a thread |
| DELETE | /api/thread/:threadId | Delete a thread |
| POST | /api/chat | Send a message and get the reply |

## Run locally
1. Clone the repo.
2. Backend: `cd Backend && npm install`, then create a `.env` file with
   `MONGODB_URI=...` and `OPENAI_API_KEY=...`, then run `node server.js` (port 8080).
3. Frontend: `cd Frontend && npm install && npm run dev`.

## Roadmap
- Send full conversation history to the model for context-aware replies
- User authentication so each user has private threads
- Streaming responses

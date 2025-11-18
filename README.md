Echor Tech - Sentence Transformer API

This project implements a small Node.js Express API using TypeScript to provide a sentence transformation utility.

It features a primary endpoint that takes a sentence and returns its word count, a list of unique words (case-insensitive), and the sentence with the word order reversed.

API Endpoints

The API is built around a core transformation logic and offers two primary ways to access it, plus a basic frontend UI.

1. POST /api/transform (Required Endpoint)

This endpoint accepts a JSON body containing the sentence to be transformed.

Method: POST

URL: /api/transform

Request Body (JSON):

JSON

{ "sentence": "I love working with JavaScript and Node.js" }
Success Response (JSON):

JSON

{
  "word_count": 7,
  "unique_words": ["i","love","working","with","javascript","and","node.js"],
  "reversed_sentence": "Node.js and JavaScript with working love I"
}

2. GET /api/transform/:sentence (Bonus URL-Based Endpoint)

This endpoint allows transforming a sentence directly via the URL path, which is used by the integrated front-end.

Method: GET

URL: /api/transform/Hello%20world (where %20 is a space)

Success Response (JSON):

JSON

{
  "word_count": 2,
  "unique_words": ["hello", "world"],
  "reversed_sentence": "world Hello"
}

<img width="1920" height="1080" alt="Screenshot 2025-11-18 192557" src="https://github.com/user-attachments/assets/a43358b0-9526-4480-bcb2-4007312b5505" />

<img width="1920" height="1080" alt="Screenshot 2025-11-18 192616" src="https://github.com/user-attachments/assets/216b22a3-0fca-4b85-9ad0-3965fec19e05" />

Frontend Interface

A simple HTML/CSS/JavaScript single-page application is included for easy testing and demonstration.

Access the UI: Open http://localhost:3000 in your web browser.

The UI calls the internal API and uses the HTML5 History API (history.pushState) to instantly update the URL upon submission, leveraging the GET endpoint for deep linking and refresh functionality.

<img width="1920" height="1080" alt="Screenshot 2025-11-18 192709" src="https://github.com/user-attachments/assets/b52cef6d-c4d9-4a4c-afac-b1eb02b36af2" />


🛠️ Project Structure
.

├── dist/                 # Compiled JavaScript output

├── node_modules/         # Dependencies

├── public/
│   └── index.html        # Simple UI for demonstration

├── src/
│   └── server.ts         # Main Express application (TypeScript)

├── package.json

├── package-lock.json

└── tsconfig.json         # TypeScript compiler configuration

📝 Core Logic

The transformation logic handles the following:

Splitting: The sentence is split by one or more whitespace characters (/\s+/) to get the words.

Word Count: The length of the resulting word array.

Unique Words:

⦁	Words are converted to lowercase to ensure case-insensitivity.

⦁	A Set is used to automatically filter out duplicate words.

Reversed Sentence: The word array is reversed and then joined back into a string with spaces.

Commands Used : 

The commands you used show the standard steps for initializing a TypeScript and Express project:

Dependency Installation: You installed the necessary packages for development and production.

npm install --save-dev typescript @types/node: Installs TypeScript and its type definitions for Node.js.

npm install express: Installs the Express framework.

npm install --save-dev @types/express: Installs the TypeScript type definitions for Express.

TypeScript Initialization:

npx tsc --init: Tried to create a tsconfig.json, but received an error because the file already existed (this is fine).

Compilation:

npx tsc: Successfully compiled your TypeScript files (src/*.ts) into JavaScript files in the dist/ directory.

Execution:

npm start: Executed the startup script defined in your package.json (likely node dist/server.js), which started the server.




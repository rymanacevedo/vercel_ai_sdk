# Vercel AI SDK Project

This project demonstrates the integration of **Vercel's AI SDK** with **Hono** and **TypeScript** to build a server-side AI-powered application. It leverages multiple AI providers, including **Anthropic** and **OpenAI**, to showcase how AI capabilities can be integrated into modern web applications.

## Features

- **AI Integration**: Uses Vercel's AI SDK (`ai`) to integrate AI models from **Anthropic** and **OpenAI**.
- **Server-Side Framework**: Built with **Hono**, a fast and lightweight web framework for Node.js.
- **TypeScript Support**: Fully typed with **TypeScript** for better developer experience and code reliability.
- **Validation**: Uses **Zod** for runtime validation and type safety.

## Technologies Used

- **AI SDKs**: `@ai-sdk/anthropic`, `@ai-sdk/openai`, `@ai-sdk/openai-compatible`, `ai`
- **Web Framework**: `hono`, `@hono/node-server`
- **Validation**: `zod`
- **TypeScript**: `typescript`
- **Runtime**: `bun` (via `@types/bun`)

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- **Bun** (v1.0 or higher) or **Node.js** (v16 or higher)
- **TypeScript** (v5.0 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rymanacevedo/vercel_ai_sdk.git
   cd vercel_ai_sdk
   ```

2. **Install dependencies**:
   If using **Bun**:
   ```bash
   bun install
   ```

   If using **Node.js**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your API keys for the AI providers:
   ```env
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server**:
   If using **Bun**:
   ```bash
   bun run index.ts
   ```

   If using **Node.js**:
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Test the application**:
   The server will start on `http://localhost:3000`. You can test the AI endpoints using tools like **Postman** or **cURL**.

### Example Request

Here’s an example of how to interact with the AI endpoints:

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Hello, how can I help you?",
    "model": "anthropic"
  }'
```

## Project Structure

```
vercel_ai_sdk/
├── index.ts          # Entry point for the Hono server
├── .env              # Environment variables
├── package.json      # Project dependencies
├── README.md         # Project documentation
└── (other files)     # Additional source files
```

## Dependencies

- **AI SDKs**:
    - `@ai-sdk/anthropic`: Integration with Anthropic's AI models.
    - `@ai-sdk/openai`: Integration with OpenAI's models.
    - `@ai-sdk/openai-compatible`: Support for OpenAI-compatible APIs.
    - `ai`: Vercel's AI SDK for seamless AI integration.

- **Web Framework**:
    - `hono`: Fast and lightweight web framework.
    - `@hono/node-server`: Node.js server adapter for Hono.

- **Validation**:
    - `zod`: Schema validation and type safety.

- **TypeScript**:
    - `typescript`: TypeScript support for the project.

- **Runtime**:
    - `@types/bun`: Type definitions for Bun (optional, if using Bun).

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to your branch.
4. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Key Updates:
- **Focus on AI SDKs**: Highlighted the use of **Anthropic**, **OpenAI**, and Vercel's `ai` SDK.
- **Hono Framework**: Emphasized the use of **Hono** for server-side development.
- **TypeScript and Zod**: Added details about TypeScript and Zod for type safety and validation.
- **Bun Support**: Mentioned optional support for **Bun** as a runtime.

Let me know if you’d like to add or tweak anything further! 🚀
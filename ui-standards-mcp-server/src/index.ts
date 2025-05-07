import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { 
  StdioServerTransport 
} from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

const server = new Server({
    name: "ui-standards-mcp-server",
    version: "1.0.0"
  }, {
    capabilities: {
      // resources: {},
      tools: {},
    }
});

// Tool schema for reading Angular coding standards
const readAngularCodingStandards = {
  name: "readAngularCodingStandards",
  description: "Reads and returns the content of the Angular coding standards .md file from a GitHub repository.",
  outputSchema: z.object({
    content: z.string(),
  })
}; 
// Tool schema for reading Angular testing standards
const readAngularTestingStandards = {
  name: "readAngularTestingStandards",
  description: "Reads and returns the content of the Angular testing standards .md file from a GitHub repository.",
  outputSchema: z.object({
    content: z.string(),
  })
};

// List tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      readAngularCodingStandards,
      readAngularTestingStandards
    ]
  };
});

// Tool handler for reading Angular coding standards
async function fetchAngularCodingStandards() {
  try {
    // Read angular coding standards from github url using env variable for token
    const githubToken = process.env.GITHUB_TOKEN;
    if (!githubToken) {
      throw new Error("GITHUB_TOKEN environment variable is not set.");
    }
    const url = "https://api.github.com/repos/jrajput1085/gen-ai-dev-exp/contents/ui-standards/angular-coding-standards.md";
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github.v3.raw"
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch content from ${url}: ${response.statusText}`);
    }
    const text = await response.text();
    return {
      content: text
    };
  }
  catch(exp) { // Handle error
    console.error("Error reading Angular coding standards:", exp);
    return {
      isError: true,
      content: [
        {
          type: "text",
          text: `Error reading Angular coding standards: ${exp}`
        }
      ]
    };
  }
}

// Tool handler for reading Angular testing standards
async function fetchAngularTestingStandards() {
  try {
    // Read angular testing standards from github url using env variable for token
    const githubToken = process.env.GITHUB_TOKEN;
    if (!githubToken) {
      throw new Error("GITHUB_TOKEN environment variable is not set.");
    }
    const url = "https://api.github.com/repos/jrajput1085/gen-ai-dev-exp/contents/ui-standards/angular-testing-standards.md";
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github.v3.raw"
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch content from ${url}: ${response.statusText}`);
    }
    const text = await response.text();
    return {
      content: text
    };
  }
  catch(exp) { // Handle error
    console.error("Error reading Angular testing standards:", exp);
    return {
      isError: true,
      content: [
        {
          type: "text",
          text: `Error reading Angular testing standards: ${exp}`
        }
      ]
    };
  }
}

// Implement tool handlers
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "readAngularCodingStandards") {
    return await fetchAngularCodingStandards();
  }
  if (request.params.name === "readAngularTestingStandards") {
    return await fetchAngularTestingStandards();
  }
  // Handle unknown tool
  return {
    isError: true,
    content: [
      {
        type: "text",
        text: `Unknown tool: ${request.params.name}`
      }
    ]
  };
});


// Start the server with stdio transport
async function main() {
    try {
        const transport = new StdioServerTransport();
        await server.connect(transport);
        console.error("Server started and listening on stdio");
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}

main().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
# Muchiri-OS Dashboard

A lightweight dashboard for the Muchiri-OS vault that can be used locally and deployed to Vercel.

## Local Usage

```bash
# 1. Start the API server (requires Node.js >=18)
cd dashboard
node api/index.js &

# 2. Open in browser
# http://localhost:3001
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VAULT_PATH` | Path to the Muchiri-OS vault | `C:\Users\KIMISH\Desktop\M-os` |

Set the vault path via environment variable:

```bash
# Windows PowerShell
$env:VAULT_PATH="C:\path\to\vault"
node api/index.js

# Linux/macOS
VAULT_PATH="/path/to/vault" node api/index.js
```

## API Endpoints

- `GET /` - Returns the static HTML dashboard (`index.html`)
- `GET /api/projects` - Returns projects from `06-Projects/Active/`
- `GET /api/vault` - Returns vault status info

## Vercel Deployment

### Prerequisites

1. [Vercel CLI](https://vercel.com/docs/cli) installed and logged in
2. GitHub account

### Deploy Steps

```bash
# Navigate to dashboard directory
cd dashboard

# Deploy to Vercel
vercel --prod
```

> **Note:** On Vercel, the API runs as a serverless function with a 10-second timeout. The vault is a local-only resource; on Vercel the vault endpoints will return `status: "error"` due to the serverless environment having no access to your local filesystem.

### Environment Variables on Vercel

```bash
vercel env add VAULT_PATH
```

Set a network-accessible path to your vault if available, or leave the default (the function will report error status in serverless environment).

## Files

```
dashboard/
├── index.html       # Static dashboard page
├── api/
│   └── index.js     # Vercel API route (Serverless Function)
├── vercel.json      # Vercel configuration
├── package.json     # Node.js package config
└── README.md        # This file
```

## Architecture

The dashboard uses a simple two-part architecture suitable for both local and serverless deployment:

1. **`index.html`** - A static HTML page with all dashboard UI and CSS embedded. No external dependencies. Served directly from Vercel's Edge Network.

2. **`api/index.js`** - A Vercel Serverless Function that:
   - Handles `/api/projects` requests by reading `06-Projects/Active/` directory
   - Handles `/api/vault` requests by scanning markdown files in vault root
   - Returns JSON responses

3. **`vercel.json`** - Routes `/api/*` requests to the serverless function, serves all other routes as static HTML.

This approach keeps the dashboard simple while allowing for dynamic vault data to be surfaced when deployed locally.
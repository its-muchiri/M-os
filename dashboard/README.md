# Muchiri-OS Dashboard

A lightweight dashboard for the Muchiri-OS vault that can be used locally and deployed to Vercel.

## Local Usage

```bash
# Start the server (requires Node.js >=18)
npm dev

# Or with node directly
node server.js

# Open in browser
# http://localhost:3000
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VAULT_PATH` | Path to the Muchiri-OS vault | `C:\Users\KIMISH\Desktop\M-os` |

Set the vault path via environment variable:

```bash
# Windows PowerShell
$env:VAULT_PATH="C:\path\to\vault"
npm dev

# Linux/macOS
VAULT_PATH="/path/to/vault" npm dev
```

## API Endpoints

- `GET /` - Returns the static HTML dashboard
- `GET /api/projects` - Returns projects from `06-Projects/Active/`
- `GET /api/vault` - Returns vault status info

## Vercel Deployment

### Prerequisites

1. [Vercel CLI](https://vercel.com/docs/cli) installed and logged in
2. GitHub account

### Deploy Steps

```bash
# 1. Initialize git repo in dashboard directory (if not already)
cd dashboard
git init

# 2. Deploy to Vercel
vercel

# 3. Set the VAULT_PATH environment variable on Vercel
vercel env add VAULT_PATH
```

> **Note:** On Vercel, the server runs in a read-only environment. The vault must be accessible via a public path or mounted as environment-specific configuration. For local network vault access, set `VAULT_PATH` to the network-accessible path.

### Using the GitHub Action (Recommended)

The dashboard is automatically deployed to Vercel when changes are pushed to the `dashboard/` directory.

1. Fork the [M-os repository](https://github.com/its-muchiri/M-os)
2. Create a Vercel project linked to your fork
3. Set these environment variables in Vercel:
   - `VAULT_PATH` - path to your local vault (if accessible)
   - `VERCEL_ORG_ID` - from `vercel teams` command
   - `VERCEL_PROJECT_ID` - from Vercel project settings

## Files

```
dashboard/
├── index.html       # Static dashboard page
├── server.js        # Node.js server (API + static serving)
├── vercel.json      # Vercel configuration
├── package.json     # Node.js package config
└── README.md        # This file
```

## Architecture

The dashboard uses a simple architecture:

1. **`index.html`** - A static HTML page with all dashboard UI and CSS embedded. No external dependencies.
2. **`server.js`** - A lightweight Node.js HTTP server that:
   - Serves `index.html` for all routes (SPA-friendly)
   - Provides API endpoints to read vault data dynamically
   - Reads from vault directories using Node's `fs` module
3. **`vercel.json`** - Configures Vercel to treat the dashboard as both a static site and serverless function deployment

This approach keeps the dashboard simple while allowing for dynamic vault data to be surfaced when deployed.
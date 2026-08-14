# Muchiri-OS Dashboard

A lightweight interactive dashboard for the Muchiri-OS vault that can be used locally and deployed to Vercel.

## Local Usage

```bash
# 1. Start the API server (requires Node.js >=18)
cd dashboard
node api/index.js &

# 2. Open in browser
# http://localhost:3001
# Or for the mind map: http://localhost:3001/map.html
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

## Dashboard Views

- **`/`** (`index.html`) — Overview dashboard with priorities, projects, clients, and agents
- **`/map.html`** — Interactive mind map visualization of the entire Muchiri-OS system architecture:
  - Drag nodes to reposition them
  - Click nodes to view details in the sidebar
  - Zoom and pan using mouse controls or zoom buttons
  - Fit to screen button resets the view

## API Endpoints

- `GET /` - Returns the static HTML dashboard (`index.html`)
- `GET /map` - Returns the mind map page (`map.html`)
- `GET /api/projects` - Returns projects from `06-Projects/Active/`
- `GET /api/vault` - Returns vault status info

## Mind Map Features

The interactive mind map (`map.html`) visualizes the entire Muchiri-OS system:

| Color | Meaning |
|-------|---------|
| 🟢 Green | User |
| 🔵 Blue | Tools (Obsidian, OpenCode, Git) |
| 🟠 Orange | Data (Vault) |
| 🟣 Purple | Directories (12 vault folders) |
| 🟢 Green | Documents (AGENTS.md, templates, etc.) |
| 🔴 Red | AI Agents (Research, SEO, Content, Developer, Marketing, Project Manager, Automation) |

### Interactions
- **Drag nodes** to reposition them in the graph
- **Click nodes** to view details in the right sidebar
- **Mouse wheel** to zoom in/out
- **Drag background** to pan the graph
- **"Fit to Screen"** button to reset the view

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

> **Note:** On Vercel, the API runs as a serverless function with a 10-second timeout. The vault is a local-only resource; on Vercel the vault endpoints will return `status: "error"` due to the serverless environment having no access to your local filesystem. The mind map view works perfectly on Vercel as it's a static HTML file.

### Environment Variables on Vercel

```bash
vercel env add VAULT_PATH
```

Set a network-accessible path to your vault if available, or leave the default.

## Files

```
dashboard/
├── index.html       # Static overview dashboard page
├── map.html         # Interactive mind map visualization
├── api/
│   └── index.js     # Vercel API route (Serverless Function)
├── vercel.json      # Vercel configuration
├── package.json     # Node.js package config
└── README.md        # This file
```

## Architecture

The dashboard uses a three-part architecture:

1. **`index.html`** - Static HTML dashboard with all UI and CSS embedded. No external dependencies.
2. **`map.html`** - Interactive mind map using D3.js (loaded from CDN) - visualizes the entire system architecture with draggable, clickable nodes.
3. **`api/index.js`** - Vercel Serverless Function for vault data endpoints.
4. **`vercel.json`** - Routes `/api/*` to the serverless function, serves static HTML for all other routes.

This approach keeps the dashboard simple while providing rich visual navigation of the Muchiri-OS system.
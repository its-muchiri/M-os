# Ollama Setup Guide — Muchiri-OS

This guide explains how to set up Ollama for local AI inference with Muchiri-OS agents.

## Prerequisites

1. **Ollama installed** — Download from https://ollama.com/download
2. **Ollama running** — Started via `ollama serve` or the Ollama desktop app
3. **Models downloaded** — See model list below

## Required Models

| Agent | Recommended Model | Size | Notes |
|-------|-------------------|------|-------|
| Research Agent | `hf.co/Team-Imix/mix-nous-v0.2.3:Q4_K_M` | ~4GB | Good balance of speed/quality |
| SEO Agent | `hf.co/Team-Imix/mix-nous-v0.2.3:Q4_K_M` | ~4GB | Sufficient for keyword analysis |
| Content Agent | `hf.co/Team-Imix/mix-nous-v0.2.3:Q4_K_M` | ~4GB | Good for creative writing |
| Developer Agent | `hf.co/Team-Imix/mix-nous-v0.2.3:Q4_K_M` | ~4GB | Adequate for coding tasks |
| Marketing Agent | `hf.co/Team-Imix/mix-nous-v0.2.3:Q4_K_M` | ~4GB | Good for strategy tasks |
| Project Manager Agent | `hf.co/Team-Imix/mix-nous-v0.2.3:Q4_K_M` | ~4GB | Good for planning |
| Automation Agent | `hf.co/Team-Imix/mix-nous-v0.2.3:Q4_K_M` | ~4GB | Good for scripting |

### Alternative Models

If the recommended model is too resource-intensive:

| Model | Size | Use Case |
|-------|------|----------|
| `llama3.2:1b` | ~1GB | Fastest, minimal system resources |
| `phi3:mini-4k-qlora-safetensors` | ~2GB | Fast coding tasks |
| `gemma2:2b` | ~2GB | Good balance |
| `llama3.2:3b` | ~3GB | General purpose |

## Installation Steps

### 1. Install Ollama

```bash
# Mac (Homebrew)
brew install ollama

# Linux (Debian/Ubuntu)
curl -fsSL https://ollama.com/install.sh | sh

# Windows
# Download from https://ollama.com/download
```

### 2. Start Ollama

```bash
# Terminal
ollama serve

# Or use the Ollama desktop app
```

### 3. Verify Connection

```bash
# Test the API endpoint
curl http://127.0.0.1:11434/api/tags
```

### 4. Download Models

```bash
# Pull the recommended model
ollama pull hf.co/Team-Imix/mix-nous-v0.2.3:Q4_K_M

# Or a smaller model if needed
ollama pull llama3.2:1b

# List all models
ollama list
```

## OpenCode Configuration

The `~/.opencode/opencode.json` file is already configured to use Ollama as the primary provider with fallback models.

### Configuration Highlights

- **Provider**: Ollama at `http://127.0.0.1:11434/v1`
- **Primary model**: `hf.co/Team-Imix/mix-nous-v0.2.3:Q4_K_M` (for all 7 agents)
- **Fallback**: `bedrock/anthropic.claude-3-sonnet-20240229-v1:0` (for cloud fallback)

## Using OpenCode with Muchiri-OS

### Starting OpenCode in the Vault

```powershell
cd C:\Users\KIMISH\Desktop\M-os
opencode
```

### Assigning Tasks to Agents

In OpenCode, you can reference agents by their defined names:

```text
Hey @research-agent, research the latest trends in AI for SEO

Hey @developer-agent, build a portfolio website using React

Hey @project-manager-agent, organize all tasks for the portfolio project
```

### Agent Routing

Each agent's instructions file is located at:
- `~/.opencode/agents/research-agent/instructions.md`
- `~/.opencode/agents/seo-agent/instructions.md`
- `~/.opencode/agents/content-agent/instructions.md`
- `~/.opencode/agents/developer-agent/instructions.md`
- `~/.opencode/agents/marketing-agent/instructions.md`
- `~/.opencode/agents/project-manager-agent/instructions.md`
- `~/.opencode/agents/automation-agent/instructions.md`

## Troubleshooting

### Ollama Not Responding

1. Check if Ollama is running: `curl http://127.0.0.1:11434/api/tags`
2. Restart Ollama: `ollama serve`
3. Check if the model is downloaded: `ollama list`

### Model Too Large

If you see memory errors or slow responses:
1. Pull a smaller model: `ollama pull llama3.2:1b`
2. Update `~/.opencode/opencode.json` to use the smaller model

### Port Conflict

If port 11434 is already in use:
```bash
# Check what's using port 11434
netstat -ano | findstr 11434

# Kill the process
taskkill /PID <PID> /F
```

## System Requirements

### Minimum
- RAM: 8GB (for `llama3.2:1b`)
- CPU: Modern multi-core processor
- Storage: 10GB free disk space

### Recommended
- RAM: 16GB (for `hf.co/Team-Imix/mix-nous-v0.2.3:Q4_K_M`)
- CPU: 8-core processor
- GPU: Apple Silicon (M1/M2) or NVIDIA GPU with 8GB+ VRAM
- Storage: 20GB free disk space

## Related

- [[AGENTS]]
- [[SYSTEM-MAP]]
- [[OPENCODE-INTEGRATION]]
- [[07-AI-Agents/Agent-Registry/README]]
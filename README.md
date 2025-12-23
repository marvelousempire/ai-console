# 🤖 AI Console

**Version:** 1.1.0  
**Last Updated:** Tuesday Dec 23, 2025

AI Console is a SundayApp-based console for AI features and management, powered by [Open WebUI](https://github.com/open-webui/open-webui).

---

## ✨ Features

| Tab | Description |
|-----|-------------|
| 💬 **Chat** | Full Open WebUI interface embedded (ChatGPT-like experience) |
| 🧠 **Models** | Pull, manage, and switch Ollama models |
| 📝 **Prompts** | Save and organize prompt templates |
| 📊 **Analytics** | Usage stats and performance metrics |
| ⚙️ **Settings** | Configure AI providers and preferences |

---

## 🤖 Open WebUI Integration

The **Chat** tab embeds [Open WebUI](https://github.com/open-webui/open-webui) — a full-featured AI chat interface:

- **Multi-model support** — Switch between Ollama models on the fly
- **Chat history** — Persistent conversations
- **RAG support** — Upload documents for context
- **User management** — Multi-user with authentication
- **Dark mode** — Matches AI Console theme

### Requirements

Open WebUI must be running on port 3000. Deploy with one command:

```bash
# Using Actions Console Slice Flow
node slices/slice-runner.js run slices/flows/setup-open-webui.yaml

# Or direct Docker command
docker run -d -p 3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data \
  --name open-webui \
  --restart always \
  ghcr.io/open-webui/open-webui:main
```

---

## 🚀 Hosting

### Via Quick Server (Recommended)

AI Console is hosted at `/ai-console` path through Quick Server.

### Standalone

```bash
# Serve with any static server
npx serve .
# Access at http://localhost:3000
```

---

## 🔗 API Expectations

| Endpoint | Purpose |
|----------|---------|
| `GET /api/ai/status` | Ollama connection status + models |
| `POST /api/ai/chat` | Chat completion |
| `GET /api/ollama/detect` | Ollama installation check |
| `GET /api/git/version` | Version info (optional) |

If endpoints don't exist, the UI gracefully falls back.

---

## 📁 Directory Structure

```
ai-console/
├── index.html          # Main entry point
├── app.config.js       # Console configuration (v1.1.0)
├── README.md           # This file
├── css/
│   └── ai-console.css  # Custom styles
└── html/
    ├── chat.html       # Open WebUI embedded interface
    ├── models.html     # Model management
    ├── prompts.html    # Prompt library
    ├── analytics.html  # Usage analytics
    ├── settings.html   # Settings page
    └── login.html      # Authentication
```

---

## 🔗 Related Projects

- [Open WebUI](https://github.com/open-webui/open-webui) — The embedded AI interface
- [Quick Server](https://github.com/marvelousempire/quick-server) — Platform host
- [Actions Console](https://github.com/marvelousempire/actions-console) — Slice Flow automation
- [CN Console](https://github.com/marvelousempire/cn-console) — Also embeds Open WebUI in AI tab

---

## License

Part of the Sunday App Framework ecosystem.

**In Good Faith With Clean Hands**

# 🤖 AI Console

AI Console is a SundayApp-based console for AI features and management.

## Features

- 💬 **Chat Interface** - Conversational AI with Ollama
- 🧠 **Model Management** - Pull, manage, and switch AI models
- 📝 **Prompt Library** - Save and organize prompts
- 📊 **Analytics** - Usage stats and performance metrics
- ⚙️ **Settings** - Configure AI providers and preferences

## Hosting

AI Console can be hosted standalone or proxied through Quick Server.

### Standalone
```bash
# Serve with any static server
npx serve .
```

### Via Quick Server
Configure nginx to proxy `/ai-console` to this directory.

## API Expectations

Integrates with host APIs:
- `GET /api/ollama/status` - Ollama connection status
- `GET /api/ollama/models` - List available models
- `POST /api/ollama/chat` - Chat completion
- `POST /api/ollama/generate` - Text generation
- `GET /api/git/version` - Version info (optional)
- `GET /api/git/log` - Changelog (optional)

If endpoints don't exist, the UI gracefully falls back.

## Directory Structure

```
ai-console/
├── index.html          # Main entry point
├── app.config.js       # Console configuration
├── css/
│   └── ai-console.css  # Custom styles
├── html/
│   ├── chat.html       # Chat interface
│   ├── models.html     # Model management
│   ├── prompts.html    # Prompt library
│   ├── analytics.html  # Usage analytics
│   └── settings.html   # Settings page
├── js/
│   └── ai-boot.js      # Bootstrap script
└── components/
    └── header/
        └── header.html # Custom header
```

## License

Part of the Sunday App Framework ecosystem.


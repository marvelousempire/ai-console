# 🤖 AI Console

**Version:** 1.1.0  
**Last Updated:** Tuesday Dec 23, 2025

---

## Trustee Quick Start (Plain English)

- **Open it**: Start **Quick Server**, then open **`/ai-console`** (the port is shown as **`Main:`** in the terminal).
- **What this is**: A private AI dashboard. Your chats can stay on your own machine.
- **If chat is blank**: Ask the operator to confirm **Open WebUI** is running and reachable on this host.

## What Is This?

**AI Console** is your personal AI assistant dashboard.

It lets you chat with AI, manage your AI models, save your favorite prompts, and see how much you've been using AI. The best part? Everything runs on your own computer — your conversations stay private.

---

## What Can It Do?

| Tab | What It Does |
|-----|--------------|
| 💬 **Chat** | Talk to AI just like ChatGPT (but it runs on your computer!) |
| 🧠 **Models** | Download and switch between different AI brains |
| 📝 **Prompts** | Save prompts you use often for quick access |
| 📊 **Analytics** | See stats about your AI usage |
| ⚙️ **Settings** | Change AI providers and preferences |

---

## 💬 Chat with AI (Open WebUI)

The Chat tab uses [Open WebUI](https://github.com/open-webui/open-webui) — a powerful AI chat interface:

- **Works Offline** — No internet needed once set up
- **Multiple Models** — Switch between AI models on the fly
- **Chat History** — Your old conversations are saved
- **Upload Files** — Share documents with AI for context
- **Dark Mode** — Easy on the eyes

---

## How to Set It Up

### Step 1: Install the AI

Run this command to set up Open WebUI and Ollama:
```bash
node slices/slice-runner.js run slices/flows/setup-open-webui.yaml
```

### Step 2: Open AI Console

Go to:
```
http://localhost:8001/ai-console
```

That's it! You can now chat with AI.

---

## 🛂 Passport (Identity Card)

AI Console has a "passport" file that tells the system who it is:

**Passport:** `passport-ai-console.json`

```json
{
  "udin": "CONSOLE-AI-20251223120000",
  "name": "AI Console",
  "type": "console"
}
```

This lets AI Console:
- Run on its own at `/ai-console`
- Load inside other apps as a part (called a "cartridge")
- Update to new versions smoothly

---

## Folder Layout

```
ai-console/
├── index.html          ← The main page
├── app.config.js       ← App settings
├── passport-ai-console.json ← Identity file
├── README.md           ← This file (you're reading it!)
├── css/                ← How it looks
└── html/               ← All the pages inside
```

---

## Related Apps

- [Open WebUI](https://github.com/open-webui/open-webui) — The AI chat engine inside
- [Quick Server](https://github.com/marvelousempire/quick-server) — The platform that hosts AI Console
- [Actions Console](https://github.com/marvelousempire/actions-console) — Automate AI setup
- [Contribution Network](https://github.com/marvelousempire/ContributionNetwork) — CN Console also has an AI tab

---

**In Good Faith With Clean Hands**

*AI Console v1.1.0*

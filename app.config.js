/**
 * AI Console - App Configuration
 * SundayApp Framework Configuration
 */
export default {
  app: {
    id: 'ai-console',
    name: 'AI Console',
    version: '1.0.0',
    icon: '🤖',
    description: 'AI features, Ollama integration, chat, and model management'
  },

  theme: {
    brand: '#7c3aed',
    accent: '#a78bfa',
    mode: 'dark'
  },

  navigation: {
    tabs: [
      { id: 'chat', label: 'Chat', icon: '💬', file: 'chat.html', default: true },
      { id: 'models', label: 'Models', icon: '🧠', file: 'models.html' },
      { id: 'prompts', label: 'Prompts', icon: '📝', file: 'prompts.html' },
      { id: 'analytics', label: 'Analytics', icon: '📊', file: 'analytics.html' },
      { id: 'settings', label: 'Settings', icon: '⚙️', file: 'settings.html' }
    ]
  },

  api: {
    base: '/api',
    endpoints: {
      ollama: '/api/ollama',
      chat: '/api/ollama/chat',
      models: '/api/ollama/models',
      generate: '/api/ollama/generate'
    }
  },

  features: {
    ollama: true,
    chat: true,
    modelManagement: true,
    promptLibrary: true,
    analytics: true
  }
};


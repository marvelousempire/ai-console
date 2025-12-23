/**
 * AI Console - App Configuration
 * SundayApp Framework Configuration
 * 
 * @version 1.1.0
 * @updated 2025-12-23
 */
export default {
  app: {
    id: 'ai-console',
    name: 'AI Console',
    version: '1.1.0',
    icon: '🤖',
    description: 'AI Console powered by Open WebUI - full-featured chat, models, prompts, and analytics'
  },

  theme: {
    brand: '#7c3aed',
    accent: '#a78bfa',
    mode: 'dark'
  },

  contentContainerId: 'contentContainer',
  tabsContainerId: 'mainTabs',
  headerContainerId: 'global-header-container',

  routes: {
    '': { page: 'chat', title: 'Chat', fallback: './html/chat.html' },
    'chat': { page: 'chat', title: 'Chat', fallback: './html/chat.html' },
    'models': { page: 'models', title: 'Models', fallback: './html/models.html' },
    'prompts': { page: 'prompts', title: 'Prompts', fallback: './html/prompts.html' },
    'analytics': { page: 'analytics', title: 'Analytics', fallback: './html/analytics.html' },
    'settings': { page: 'settings', title: 'Settings', fallback: './html/settings.html' },
    'login': { page: 'login', title: 'Sign In', fallback: './html/login.html' }
  },

  tabs: [
    { id: 'chat', label: 'Chat', icon: '💬' },
    { id: 'models', label: 'Models', icon: '🧠' },
    { id: 'prompts', label: 'Prompts', icon: '📝' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ],

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


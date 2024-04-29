import { ChatService } from './service/ChatService';
import { NdJsonChatApi } from './service/NdJsonChatApi';
import { NdJsonChatService } from './service/NdJsonChatService';

/**
 * Singleton instance of the ChatService.
 */
export const ChatServiceInstance: ChatService = new NdJsonChatService(
  new NdJsonChatApi(import.meta.env.VITE_NDJSON_URL),
  {
    defaultMessages: [
      {
        id: '0',
        message: 'Hello! How can I help you?',
        role: 'info',
      },
    ],
  },
);

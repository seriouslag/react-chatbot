# Deprecated - use [seriouslag/ui-chatbot-monorepo](https://github.com/seriouslag/ui-chatbot-monorepo)

# @seriouslag/react-chatbot

A simple chatbot component for React to interface with AI chats.
It uses @MUI for some of the components.
Internally uses tailwindcss for styling.

[![npm version](https://badge.fury.io/js/%40seriouslag%2Freact-chatbot.svg)](https://badge.fury.io/js/%40seriouslag%2Freact-chatbot)

![Demo](https://github.com/seriouslag/react-chatbot/blob/main/images/demo.gif?raw=true)

Peer dependencies include:

- react
- react-dom
- @mui/material
- @mui/icons-material
- @mui/lab
- rxjs

Currently only one service is available, the NdJsonChatService, which is a chat service that sends messages to a server that accepts NDJSON messages.

The chat service is a simple interface that can be implemented to send messages to a chat server.

- [ ] Split service and components into separate packages
- [ ] Add Unit tests
- [ ] Add example page
- [ ] Remove MUI dependencies

## Installation

```bash
npm install @seriouslag/react-chatbot
```

## Usage

```jsx
import React from 'react';
import { ChatButton, NdJsonChatService, NdJsonChatApi } from '@seriouslag/react-chatbot';
import { v4 } from 'uuid';
// load the css
import '@seriouslag/react-chatbot/css';

// setup the API
const chatApi = new NdJsonChatApi('http://localhost:3000/chat');
// setup the chat service
const chatServiceInstance = new NdJsonChatService(chatApi, {
  defaultMessages: [
    {
      id: v4(),
      message: 'Hello! How can I help you?',
      role: 'info',
    },
  ],
});

const App = () => {
  return (
    <ChatButton
      service={chatServiceInstance}
      botName="ChatBot"
      botDescription="Chat with me!"
      inputTextPlaceholder="Type a message..."
      sendButtonText="Send"
    />
  );
};

export default App;
```

## Development

```bash
# install dependencies
npm install
```

```bash
# run local development server
npm run dev
```

```bash
# build the package
npm run build
```

## License

MIT

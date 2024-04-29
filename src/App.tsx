import { ChatButton } from './components/ChatButton';
import { ChatServiceInstance } from './Singletons';

function App() {
  return (
    <ChatButton
      service={ChatServiceInstance}
      botName="ChatBot"
      botDescription="Chat with me!"
      inputTextPlaceholder="Type a message..."
      sendButtonText="Send"
    />
  );
}

export default App;

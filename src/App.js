import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="a8edfa20-6a1d-4b96-a9c2-9b8dde92074f"
            userName="TestUser"
            userSecret="Test123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;
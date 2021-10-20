import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css';

const App = () =>{
    return(
        <ChatEngine
            height='100vh'
            projectID="a98ac7a4-7643-4177-a6d3-5b14219429f2"
            userName="tyler"
            userSecret="tyler"
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/> }
        />
    )
}

export default App;
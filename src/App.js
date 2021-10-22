import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";
import LoginForm from "./components/Loginform";
import MenuAppBar from "./components/Navbar";


const App = (props) => {
  if (!localStorage.getItem("username")) return <LoginForm />;


  return (
    <div>
      <MenuAppBar />
      <ChatEngine
        height="93vh"
        projectID="a98ac7a4-7643-4177-a6d3-5b14219429f2"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
};

export default App;

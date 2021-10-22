import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./ChatFeed";
import "../App.css";
import LoginForm from "./Loginform";
import MenuAppBar from "./Navbar";


const Home = (props) => {
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

export default Home;

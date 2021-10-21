import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const _handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "a98ac7a4-7643-4177-a6d3-5b14219429f2",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios("https://api.chatengine.io/chats", { headers: authObject });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (error) {
      setError("Incorrect credentials please try again!");
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className='title'>깐부</h1>
        <form onSubmit={_handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button" id='login-button'>
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

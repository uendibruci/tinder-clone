import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@mui/material/Avatar";
import "./ChatScreen.css";
function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://i.pinimg.com/474x/aa/6d/b0/aa6db0a2b20ac4293a678c8da74f0be9.jpg",
      message: "helloo",
    },
    {
      name: "Ellen",
      image:
        "https://i.pinimg.com/474x/aa/6d/b0/aa6db0a2b20ac4293a678c8da74f0be9.jpg",
      message: "how are you?",
    },
    {
      message: "Hi Ellen?",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 07/17/2022
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;

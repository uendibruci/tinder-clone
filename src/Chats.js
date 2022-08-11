import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Hey"
        timestamp="40 seconds ago"
        profilePic="https://i.pinimg.com/474x/16/a1/b8/16a1b834e27f703a2b5271ab600d4828.jpg"
      />
      <Chat
        name="Anna"
        message="How are you?"
        timestamp="40 seconds ago"
        profilePic="https://i.pinimg.com/474x/aa/6d/b0/aa6db0a2b20ac4293a678c8da74f0be9.jpg"
      />
      <Chat
        name="Mark"
        message="Hey"
        timestamp="4 minutes ago"
        profilePic="https://i.pinimg.com/474x/c1/b3/b8/c1b3b8849f2b3265c51b9a9c7a6ec228.jpg"
      />
      <Chat
        name="Ellen"
        message="How u doing?"
        timestamp="40 seconds ago"
        profilePic="https://i.pinimg.com/474x/00/26/7e/00267ecc628f2182448fa553f1f7eed1.jpg"
      />
    </div>
  );
}

export default Chats;

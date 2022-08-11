import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/chat/:person"
            element={
              <>
                <Header backButton="/chat" />
                <ChatScreen />
              </>
            }
          />
          <Route
            path="/chat"
            element={
              <>
                <Header backButton="/" />
                <Chats />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <TinderCards />
                <SwipeButtons />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* Tinder Cards */
}
{
  /* Buttons below Tinder Cards */
}

{
  /* Chats screen */
}
{
  /* Individual chat screen */
}

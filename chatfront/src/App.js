import { Route } from "react-router-dom";
import "./App.css";
import ChatPage from "./Pages/ChatPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./components/Authentication/LoginPage";
import SignPage from "./components/Authentication/SignPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatPage} exact />
      <Route path="/login" component={LoginPage} exact />
      <Route path="/signup" component={SignPage} exact />
    </div>
  );
}

export default App;

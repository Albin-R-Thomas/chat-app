import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'react-tooltip/dist/react-tooltip.css'
import ChatProvider from "./context/ChatProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter forceRefresh={true}>
    <ChatProvider>
      <App />
    </ChatProvider>
  </BrowserRouter>

);

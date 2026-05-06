import React from "react"
import ReactDOM from "react-dom/client"
import { StrictMode } from "react"
import App from "./App.jsx"
import "./index.css"
import AppProvider from "./app/providers/AppProvider.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
)
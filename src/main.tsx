import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (typeof window !== "undefined") {
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");
  try {
    localStorage.removeItem("theme");
  } catch {}
}

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement // Certifique-se de que "root" existe no HTML
);

root.render(<App />); // Renderiza o componente principal

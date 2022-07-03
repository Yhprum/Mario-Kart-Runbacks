import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <Router basename="Mario-Kart-Runbacks">
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
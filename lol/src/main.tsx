import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OneChamp from "./pages/OneChamp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<h1>404 - Page Not Found</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/c/:id" element={<OneChamp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

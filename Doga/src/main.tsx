import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Szamologep from "./pages/Szamologep.tsx";
import Penzvalto from "./pages/Penzvalto.tsx";
import Kezdolap from "./pages/Kezdolap.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/szamologep" element={<Szamologep />} />
        <Route path="/penzvalto" element={<Penzvalto />} />
        <Route path="/" element={<Kezdolap/>} />
        <Route path="*" element={<h1>404 Page not found!</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

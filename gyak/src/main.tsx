import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Szamologep from "./pages/szamologep";
import Penzvalto from "./pages/penzvalto";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/szamologep" element={<Szamologep />} />
        <Route path="/penzvalto" element={<Penzvalto />} />
        <Route path="*" element={<h1>Nincs ilyen oldal!</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

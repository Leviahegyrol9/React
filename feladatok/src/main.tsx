import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Szamologep from "./pages/szamologep";
import Bmi from "./pages/bmi";
import Penzvalto from "./pages/penzvalto";
import Homerseklet from "./pages/homerseklet";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/szamologep" element={<Szamologep />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/penzvalto" element={<Penzvalto />} />
        <Route path="/homerseklet" element={<Homerseklet />} />
        <Route path="*" element={<h1>404 - Page not found!</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

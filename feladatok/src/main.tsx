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
        <Route path="/szamologep" element={<Szamologep />}></Route>
        <Route path="/bmi" element={<Bmi />}></Route>
        <Route path="/penzvalto" element={<Penzvalto />}></Route>
        <Route path="/homerseklet" element={<Homerseklet />}></Route>
        <Route path="*" element={<h1>404 - Page not found!</h1>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

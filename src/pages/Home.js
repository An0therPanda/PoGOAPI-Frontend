import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ListaTipos from "./components/ListaTipos";
import Eficacias from "./components/Eficacias";

function Home() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/tipos" element={<ListaTipos />} />
        <Route exact path="/eficacias" element={<Eficacias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;

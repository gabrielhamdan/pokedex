import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import PokemonPage from "./pokemon";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon/:name" element={<PokemonPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
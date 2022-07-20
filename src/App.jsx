// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./page/Home";
import SmartPage from "./page/SmartPage";
import LaptopsPage from "./page/LaptopsPage";
import PcGamingPage from "./page/PcGamingPage";
import AudifonosPages from "./page/AudifonosPages";
import MousePage from "./page/MousePage";
import TecladoPage from "./page/TecladoPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="smart" element={<SmartPage />} />
                    <Route path="laptops" element={<LaptopsPage />} />
                    <Route path="pc" element={<PcGamingPage />} />
                    <Route path="auriculares" element={<AudifonosPages />} />
                    <Route path="mouse" element={<MousePage />} />
                    <Route path="teclados" element={<TecladoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

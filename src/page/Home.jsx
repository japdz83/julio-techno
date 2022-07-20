import React from "react";
import SliderHome from "../components/slider-home/SliderHome";
import "../components/slider-home/Slider.css";
import SmartPhone from "../components/smartPhone/SmartPhone";
import Mouse from "../components/mouse/Mouse";
import Pc from "../components/pc/Pc";
import Teclados from "../components/teclados/Teclados";
import Laptops from "../components/laptops/Laptops";
import Auriculares from "../components/auriculares/Auriculares";
import Play from "../components/play/Play";
import Reloj from "../components/relojes/Reloj";

const Home = () => {
    return (
        <>
            <div className="container slider-home">
                <SliderHome />
            </div>
            <div className="container">
                <Play />
                <Reloj />
                <SmartPhone />
                <Mouse />
                <Pc />
                <Teclados />
                <Laptops />
                <Auriculares />
            </div>
        </>
    );
};

export default Home;

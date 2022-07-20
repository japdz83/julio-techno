import React from "react";
import LaptopCard from "./LaptopCard";
import "../../styles/StyleSlide.css";

const Laptops = () => {
    return (
        <>
            <section className="flash">
                <div className="container">
                    <div className="heading f_flex text-xl">
                        <i className="bx bxs-zap text-2xl"></i>
                        <h1>Laptops Gaming</h1>
                    </div>
                    <LaptopCard />
                </div>
            </section>
        </>
    );
};

export default Laptops;

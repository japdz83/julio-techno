import React from "react";
import LaptopsFullCard from "./LaptopsFullCard";

const LaptopsFull = () => {
    return (
        <section className="shop background">
            <div className="container">
                <div className="heading f_flex text-xl ">
                    <i className="bx bxs-zap text-2xl"></i>
                    <h1>Laptops Gaming</h1>
                </div>

                <div className="product-content grid1">
                    <LaptopsFullCard />
                </div>
            </div>
        </section>
    );
};

export default LaptopsFull;

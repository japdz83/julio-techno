import React from "react";
import LaptopsFull from "../components/laptops/LaptopsFull";

const LaptopsPage = () => {
    return (
        <>
            <section className="parallax-section parallax1">
                <div className="container">
                    <div className="parallax-text m">
                        <h2 className="text-2xl">Laptops Gaming</h2>
                    </div>
                </div>
            </section>
            <LaptopsFull />
        </>
    );
};

export default LaptopsPage;

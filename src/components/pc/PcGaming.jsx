import React from "react";
import PcGamingCard from "./PcGamingCard";

const PcGaming = () => {
    return (
        <section className="shop background">
            <div className="container">
                <div className="heading f_flex text-xl ">
                    <i className="bx bxs-zap text-2xl"></i>
                    <h1>PC Gaming</h1>
                </div>

                <div className="product-content grid1">
                    <PcGamingCard />
                </div>
            </div>
        </section>
    );
};

export default PcGaming;

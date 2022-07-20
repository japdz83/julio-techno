import React from "react";
import SmartCard from "./SmartCard";

const Smart = () => {
    return (
        <section className="shop background">
            <div className="container">
                <div className="heading f_flex text-xl ">
                    <i className="bx bxs-zap text-2xl"></i>
                    <h1>Smart Phones</h1>
                </div>

                <div className="product-content grid1">
                    <SmartCard />
                </div>
            </div>
        </section>
    );
};

export default Smart;

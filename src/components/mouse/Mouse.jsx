import React from "react";
import "../../styles/StyleGrid.css";
import MouseCard from "./MouseCard";

const Mouse = () => {
    return (
        <section className="shop background">
            <div className="container">
                <div className="heading f_flex text-xl ">
                    <i className="bx bxs-zap text-2xl"></i>
                    <h1>Mouse Gaming</h1>
                </div>

                <div className="product-content grid1">
                    <MouseCard />
                </div>
            </div>
        </section>
    );
};

export default Mouse;

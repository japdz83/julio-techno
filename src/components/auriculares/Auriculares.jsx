import React from "react";
import AuricularesCard from "./AuricularesCard";

const Auriculares = () => {
    return (
        <section className="shop background">
            <div className="container">
                <div className="heading f_flex text-xl ">
                    <i className="bx bxs-zap text-2xl"></i>
                    <h1>Auriculares Gaming</h1>
                </div>

                <div className="product-content grid1">
                    <AuricularesCard />
                </div>
            </div>
        </section>
    );
};

export default Auriculares;

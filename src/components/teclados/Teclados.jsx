import React from "react";
import "../../styles/StyleGrid.css";
import TecladosCard from "./TecladosCard";

const Teclados = () => {
    return (
        <section className="shop background">
            <div className="container">
                <div className="heading f_flex text-xl ">
                    <i className="bx bxs-zap text-2xl"></i>
                    <h1>Teclados Gaming</h1>
                </div>

                <div className="product-content grid1">
                    <TecladosCard />
                </div>
            </div>
        </section>
    );
};

export default Teclados;

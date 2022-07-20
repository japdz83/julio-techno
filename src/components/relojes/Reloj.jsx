import React from "react";
import PlayCard from "./RelojCard";
import "../../styles/StyleSlide.css";

const Reloj = () => {
    return (
        <>
            <section className="flash">
                <div className="container">
                    <div className="heading f_flex text-xl">
                        <i className="bx bxs-zap text-2xl"></i>
                        <h1>Relojes</h1>
                    </div>
                    <PlayCard />
                </div>
            </section>
        </>
    );
};

export default Reloj;

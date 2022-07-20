import React from "react";
import PcCard from "./PcCard";
import "../../styles/StyleSlide.css";

const Pc = () => {
    return (
        <>
            <section className="flash">
                <div className="container">
                    <div className="heading f_flex text-xl">
                        <i className="bx bxs-zap text-2xl"></i>
                        <h1>Pc Gaming</h1>
                    </div>
                    <PcCard />
                </div>
            </section>
        </>
    );
};

export default Pc;

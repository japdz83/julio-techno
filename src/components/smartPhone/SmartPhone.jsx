import React from "react";
import SmartPhoneCard from "./SmartPhoneCard";
import "../../styles/StyleSlide.css";

const SmartPhone = () => {
    return (
        <>
            <section className="flash">
                <div className="container">
                    <div className="heading f_flex text-xl">
                        <i className="bx bxs-zap text-2xl"></i>
                        <h1>Smart Phone</h1>
                    </div>
                    <SmartPhoneCard />
                </div>
            </section>
        </>
    );
};

export default SmartPhone;

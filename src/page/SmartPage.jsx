import React from "react";
import Smart from "../components/smartPhone/Smart";

const SmartPage = () => {
    return (
        <>
            <section className="parallax-section parallax1">
                <div className="container">
                    <div className="parallax-text m">
                        <h2 className="text-2xl">Smart Phones</h2>
                    </div>
                </div>
            </section>
            <Smart />
        </>
    );
};

export default SmartPage;

import React from "react";
import PcGaming from "../components/pc/PcGaming";

const PcGamingPage = () => {
    return (
        <>
            <section className="parallax-section parallax1">
                <div className="container">
                    <div className="parallax-text m">
                        <h2 className="text-2xl">PC Gaming</h2>
                    </div>
                </div>
            </section>
            <PcGaming />
        </>
    );
};

export default PcGamingPage;

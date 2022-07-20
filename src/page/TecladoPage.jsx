import React from "react";
import Teclados from "../components/teclados/Teclados";

const TecladoPage = () => {
    return (
        <>
            <section className="parallax-section parallax1">
                <div className="container">
                    <div className="parallax-text m">
                        <h2 className="text-2xl">Teclados Gaming</h2>
                    </div>
                </div>
            </section>
            <Teclados />
        </>
    );
};

export default TecladoPage;

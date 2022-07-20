import React from "react";
import Mouse from "../components/mouse/Mouse";

const MousePage = () => {
    return (
        <>
            <section className="parallax-section parallax1">
                <div className="container">
                    <div className="parallax-text m">
                        <h2 className="text-2xl">Mouse Gaming</h2>
                    </div>
                </div>
            </section>
            <Mouse />
        </>
    );
};

export default MousePage;

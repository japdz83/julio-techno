import React from "react";
import "./Wrapper.css";

const Wrapper = () => {
    const data = [
        {
            cover: <i className="bx bxs-truck icon-azul"></i>,
            title: "Entrega a Domicilio",
            decs: "Ofrecemos precios competitivos en nuestros más de 1.000 productos de cualquier rango.",
        },
        {
            cover: <i className="bx bxs-id-card icon-rosa"></i>,
            title: "Pago Seguro",
            decs: "Ofrecemos precios competitivos en nuestros más de 1.000 productos de cualquier rango",
        },
        {
            cover: <i className="bx bxs-shield icon-verde"></i>,
            title: "Compra con confianza ",
            decs: "Ofrecemos precios competitivos en nuestros más de 1.000 productos de cualquier rango",
        },
        {
            cover: <i className="bx bx-support icon-naranja"></i>,
            title: "Soporte 24/7",
            decs: "Ofrecemos precios competitivos en nuestros más de 1.000 productos de cualquier rango",
        },
    ];
    return (
        <>
            <section className="wrapper background">
                <div className="container grid2 wrapper-grid">
                    {data.map((val, index) => (
                        <div className="product" key={index}>
                            <div className="img icon-circle">
                                <i> {val.cover} </i>
                            </div>
                            <h3>{val.title}</h3>
                            <p>{val.decs}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Wrapper;

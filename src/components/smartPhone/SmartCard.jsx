import React from "react";
import Data from "../../data/PhoneData.js";

const SmartCard = () => {
    const { productItems } = Data;
    return (
        <>
            {productItems.map((productItem, index) => (
                <div className="box" key={index}>
                    <div className="product mtop">
                        <div className="img">
                            <img src={productItem.cover} alt="Img Product" />
                        </div>

                        <div className="product-details">
                            <h3>{productItem.name}</h3>
                            <div className="rate">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                            </div>
                            <div className="price">
                                <div className="detail">
                                    <h4>${productItem.price}.00</h4>
                                    <span>
                                        <p>Características:</p>
                                        {productItem.detail}
                                    </span>
                                </div>

                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={`https://api.whatsapp.com/send?phone=+584126390401&text=Me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20producto${productItem.name}`}
                                >
                                    <i className="bx bxl-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default SmartCard;

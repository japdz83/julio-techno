import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../../data/PhoneData.js";

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="bx bx-chevron-right"></i>
            </button>
        </div>
    );
};
const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="bx bx-chevron-left"></i>
            </button>
        </div>
    );
};

const SmartPhoneCard = () => {
    const { productItems } = Data;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: true,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
        ],
    };
    return (
        <>
            <Slider {...settings}>
                {productItems.map((productItem) => (
                    <div className="box" key={productItem.id}>
                        <div className="product mtop">
                            <div className="img">
                                <img
                                    src={productItem.cover}
                                    alt="Img Product"
                                />
                            </div>
                            <div className="product-detail mt-3">
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
            </Slider>
        </>
    );
};

export default SmartPhoneCard;

import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>;
        },
    };
    return (
        <Slider {...settings}>
            {Sdata.map((val, index) => (
                <div className="box slideGrid d_flex top" key={index}>
                    <div className="left">
                        <h1>{val.title}</h1>
                        <p>{val.desc}</p>
                        {/* <button className="btn-slide btn-primary">
                            Visit Collections
                        </button> */}
                        <a
                            className="btn-slide btn-primary"
                            target="_blank"
                            rel="noreferrer"
                            href={`https://api.whatsapp.com/send?phone=+584126390401&text=Me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos`}
                        >
                            Información <i className="bx bxl-whatsapp"></i>
                        </a>
                    </div>
                    <div className="right">
                        <img src={val.cover} alt="Slide img" />
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default SliderCard;

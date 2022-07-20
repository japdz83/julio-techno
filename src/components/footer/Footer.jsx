import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Web-Logo-soy-techno.jpg";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container grid2 footer-grid">
                <div className="box">
                    <Link to="/">
                        <div className=" flex md:flex text-2xl mb-3 ">
                            Julio-SoyTechno
                            <span>
                                {/* <img
                                    src={Logo}
                                    alt="Logo Img"
                                    width="200px"
                                    height="70px"
                                    className="px-2"
                                />{" "} */}
                            </span>
                        </div>
                    </Link>
                    <p>
                        Vendedor técnico con experiencia en la comercialización
                        de productos de calidad para las sastifacción de
                        clientes en busqueda de nuevas experiencias
                        tecnológicas.
                    </p>
                </div>

                <div className="box">
                    <h2>Sobre nosotros </h2>
                    <ul>
                        <li>Nuestras Tiendas</li>
                        <li>Nuestros Cuidados</li>
                        <li>Términos y condiciones</li>
                        <li>Política de privacidad</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Atención al cliente</h2>
                    <ul>
                        <li>Centro de ayuda </li>
                        <li>Cómo comprar </li>
                        <li>Rastrea tu orden </li>
                        <li>Compras corporativas y al por mayor </li>
                        <li>Devoluciones y reembolsos </li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Contacto</h2>
                    <ul>
                        <li>Caracas - Venezuela </li>
                        <li>Email: juliocesarmihawk@gmail.com</li>
                        <li>Phone: +58 412 6390401</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

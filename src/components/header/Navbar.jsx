import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import Logo from "../../img/Web-Logo-soy-techno.jpg";
import "./Navbar.css";

const Navbar = () => {
    const [MobileMenu, setMobileMenu] = useState(false);

    const location = useLocation();
    const urlActual = location.pathname;

    return (
        <>
            <header className="header ">
                <div className="container d_flex justify-between">
                    <div className="logo-box font-bold text-3xl cursor-pointer md:flex items-center">
                        <Link to="/">
                            <div className=" flex md:flex ">
                                Julio-{" "}
                                <span>
                                    {/* <img
                                        src={Logo}
                                        alt="Logo Img"
                                        width="200px"
                                        height="70px"
                                        className="px-2"
                                    />{" "} */}
                                    SoyTechno
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="navlink">
                        <ul
                            className={
                                MobileMenu
                                    ? "nav-links-MobileMenu"
                                    : "link f_flex capitalize"
                            }
                            onClick={() => setMobileMenu(false)}
                        >
                            <li>
                                <Link
                                    className={`${
                                        urlActual === "/"
                                            ? "text-blue-700"
                                            : "text-blue"
                                    }  text-1xl block  hover:text-blue-700`}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${
                                        urlActual === "/smart"
                                            ? "text-blue-700"
                                            : "text-blue"
                                    }  text-1xl block  hover:text-blue-700`}
                                    to="/smart"
                                >
                                    Smart Phone
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${
                                        urlActual === "/laptops"
                                            ? "text-blue-700"
                                            : "text-blue"
                                    }  text-1xl block  hover:text-blue-700`}
                                    to="/laptops"
                                >
                                    Laptops
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${
                                        urlActual === "/pc"
                                            ? "text-blue-700"
                                            : "text-blue"
                                    }  text-1xl block  hover:text-blue-700`}
                                    to="/pc"
                                >
                                    Pc Gaming
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${
                                        urlActual === "/auriculares"
                                            ? "text-blue-700"
                                            : "text-blue"
                                    }  text-1xl block  hover:text-blue-700`}
                                    to="/auriculares"
                                >
                                    Auriculares
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${
                                        urlActual === "/mouse"
                                            ? "text-blue-700"
                                            : "text-blue"
                                    }  text-1xl block  hover:text-blue-700`}
                                    to="/mouse"
                                >
                                    Mouse
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${
                                        urlActual === "/teclados"
                                            ? "text-blue-700"
                                            : "text-blue"
                                    }  text-1xl block  hover:text-blue-700`}
                                    to="/teclados"
                                >
                                    Teclados
                                </Link>
                            </li>
                        </ul>
                        <button
                            className="toggle"
                            onClick={() => setMobileMenu(!MobileMenu)}
                        >
                            {MobileMenu ? (
                                <i className="bx bxs-x-circle close home-btn"></i>
                            ) : (
                                <i className="bx bx-menu open"></i>
                            )}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;

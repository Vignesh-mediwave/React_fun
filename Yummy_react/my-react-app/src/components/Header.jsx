import { Link } from "react-router-dom";
import { ReactComponent as Yummylogo } from "../image/Yummy.svg";
import { ReactComponent as HandBurger } from "../image/Group 22.svg"
import React from "react";
import "../style/Header.css"
const Header = () => {
    return (
        <div className="header-one">
            <div className="header-two">
                <div className="logohamber">
                    <div className="logo">
                        <Link to="/">
                            <Yummylogo fill="#00b158" />
                        </Link>
                    </div>
                    <div className="handburg">
                        <HandBurger />
                    </div>
                </div>
                <div className="recipe-logo">
                    <a href="Home">Home</a>
                    <a href="recipe">Recipe</a>
                </div>

            </div>
        </div>
    );
}
export default Header;
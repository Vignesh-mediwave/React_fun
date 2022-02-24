import { Link } from "react-router-dom";
import { ReactComponent as Yummlogo } from "../image/Yummy.svg"
import { ReactComponent as Fb } from "../image/Group 12.svg"
import { ReactComponent as Twitter } from "../image/Group 14.svg"
import { ReactComponent as Insta } from "../image/Group 16.svg"
import "../style/Footer.css"
const Footer = () => {
    return (
        <div className="footer-one">
            <div className="footer-two">
                <div className="yum">
                    <Link to="/"><Yummlogo fill="#f2f2f2" /></Link>
                </div>

                <div className="link">
                    <a href="home">Home</a>
                    <a href="recipe">Recipe</a>
                </div>
                <div className="social-logo">
                    <Link to="/" className="logo"><Twitter /></Link>
                    <Link to="/" className="logo"><Fb /></Link>
                    <Link to="/" className="logo"><Insta /></Link>

                </div>

            </div>

            <div className="footer-last">
                <p>©2022 by yummy.</p>
            </div>

        </div>
    );
}

export default Footer;
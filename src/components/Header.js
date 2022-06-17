import React from "react";
import instagram from '../assets/InstagramLogo.png';
import "../pages/pages.css";

export default class Header extends React.Component {
    render(){
        return (
            <div>
                <div className="inst-logo">
                    <div className='zoom'>
                        <a href="https://www.instagram.com/martiansandsofficial/?hl=en">
                            <img src={instagram} alt="some value" type="image/png" className="plat-logo"/>
                        </a>
                    </div>
                    </div>
                    <div className="section-head">
                        <p>COLLECTIONS</p>
                    </div>
            </div>
        )
    }
}
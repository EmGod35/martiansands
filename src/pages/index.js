import React from "react"
import './pages.css'
import mishahome from '../assets/MishaHomepage.jpeg'

const Home = () => {
    return (
        <div className="home-container">
            <img src={mishahome} alt="home background" type="image/jpeg" className="homepage-pic"/>
            <div className="upperhead">FROM MARS TO EARTH</div>
            <div className="centered-text">Martian Sands</div>
        </div>
 )
}

export default Home
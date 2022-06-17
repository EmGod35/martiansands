import React from "react"
import MartianProfile from "../assets/MishaProfile.png"
import './pages.css'

const About = () => {
    return (
        <div className="abt-background">
            <div className="abt-pg">
                <div>
                    <img src={MartianProfile} alt="some value" type="image/png" className="profile zoom"/>
                </div>
                <div>
                    <div className="abt-head">
                        <p>Martian Sands</p>
                    </div>
                    <div className="abt-desc">
                        <p>
                            Martian Sands is a music and arts passion project created by Misha Betenbaugh. 
                            Growing up in the humble town of Idlewylde, Misha began his involvement in music 
                            through a traditional concert band, playing the Euphonium. In high school he taught 
                            himself to play the guitar through Youtube tutorials, and well enough to teach private 
                            guitar lessons to his fellow classmates as a side hustle. Alongside his comrades, Rob on 
                            guitar, Aaron on bass, and Sam on drums, Sands formed the group Missing Picks, 
                            which together wrote a few bangers like "Crowded Streets" which you only could have heard 
                            live circa 2013-2014. With college separating the band Sands took a hiatus from performing 
                            music live. After falling through the Portal at Moonrise, Misha began to write music under 
                            the moniker “Martian Sands” based on the adventures hes had since the Drop. Martian Sands 
                            first single “Dazed off a Crash Landing” debuted in November of 2020. With Back to Back Album 
                            drops “Chips in Space” and “Down to Earth” in 2021 Martian Sands has taken his own sui generis 
                            spin on Dubstep and Lo-fi respectively. Now in 2022 his following is awaiting the release date 
                            for his Third album "From the Menagerie" who's singles like "Tiger Egg" and "Mammoth Tusk" have 
                            organically captivated audiences hungry for a wide array of Shapeshifting Bass Music. 
                            Dm MartianSandsOfficial on instagram for Alien Contact, or to view original artworks by 
                            Martian Sands and his wife, Emily!
                        </p>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default About
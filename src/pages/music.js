import React from "react"
import './pages.css'
import spotify from '../assets/SpotifyLogo.png';
// import youtube from '../assets/YoutubeLogo.png';
import soundcloud from '../assets/SoundCloud.png';
import applemusic from '../assets/AppleMusicLogo.png'
import amazon from '../assets/AmazonLogo.png'

const Music = () => {
    return (
        <div>
            <div className="music-body">
                Listen on Any Platform!
            </div>
            <div className="logo-wrapper">
                <div className="zoom">
                    <a href="https://open.spotify.com/artist/5CKSjmeqeSh7EYSSnzM1lt?si=y4NXxJ2jSg-gtTIiEC863w">
                    <img src={spotify} alt="some value" type="image/jpg" className='plat-logo'/>
                    </a>
                </div>
                <div className="zoom">
                    <a href="https://soundcloud.com/mitchel-betenbaugh?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
                    <img src={soundcloud} alt="some value" type="image/jpg" className='plat-logo'/>
                    </a>
                </div>
                <div className="zoom">
                    <a href="https://music.apple.com/us/artist/martian-sands/1541506404">
                    <img src={applemusic} alt="some value" type="image/jpg" className='plat-logo'/>
                    </a>
                </div>
                <div className="zoom">
                    <a href="https://music.amazon.com/artists/B08NZGHYXC/martian-sands?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_gkwZRjZpVInYLA9KMFCkcmaff">
                    <img src={amazon} alt="some value" type="image/jpg" className='plat-logo'/>
                    </a>
                </div>
            </div>
            <div className="frame-pos">
                <iframe title="spotifyframe" className="frame-style" src="https://open.spotify.com/embed/artist/5CKSjmeqeSh7EYSSnzM1lt?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>
            </div>
        </div>
    )
}

export default Music
import React from 'react';
import LandingNav from '../../Components/NavBars/LandingNav/LandingNav';
import './LandingPage.css';


function LandingPage() {
    return (
        <div>
            <LandingNav />
            <h1 className="title">Howdy Jason! </h1>
            <p>this is <i>your</i> masterpiece to design! </p>
            <img src="https://imgur.com/71FuU1G.gif"alt="coding" />
        </div>
    )
}

export default LandingPage

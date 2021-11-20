import React from 'react';
import LandingNav from '../../Components/NavBars/LandingNav/LandingNav';
import './LandingPage.css';


function LandingPage() {
  return (
    <div>
      <LandingNav />
      <h1>Unwind With Color</h1>
      <h2>A Digital Drawing Experience</h2>
      <button>Go To Project</button>
      <img src="/img/rainbow-splash-image.svg" alt="rainbow splash"/>

      <h1>The Challenge</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam modi voluptas cum eum doloremque distinctio, non quia eaque cupiditate itaque incidunt soluta repellendus quod perferendis mollitia error tempora dignissimos. Cum.</p>

      <h1>The Process</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorem, maxime ipsam quas, alias labore, nulla eius quibusdam ratione voluptas, ab voluptatibus suscipit? Id, ipsa amet. Fugiat facere, similique commodi.</p>
    </div>
  )
}

export default LandingPage

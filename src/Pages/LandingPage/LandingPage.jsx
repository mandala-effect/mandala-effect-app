import React from 'react';
import LandingNav from '../../Components/NavBars/LandingNav/LandingNav';
import './LandingPage.css';

function LandingPage() {
  return (
    <>
      <LandingNav />
      <div className="landing-page">
        <h1>Unwind With Color</h1>
        <h2>A Digital Drawing Experience</h2>
        <button>Go To Project</button>
        <img src="/img/rainbow-splash-image.svg" alt="rainbow splash"/>

        <h1>The Challenge</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam modi voluptas cum eum doloremque distinctio, non quia eaque cupiditate itaque incidunt soluta repellendus quod perferendis mollitia error tempora dignissimos. Cum.</p>

        <h1>The Process</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorem, maxime ipsam quas, alias labore, nulla eius quibusdam ratione voluptas, ab voluptatibus suscipit? Id, ipsa amet. Fugiat facere, similique commodi.</p>

        <img src="" alt="GitHub"/>
        <img src="" alt="CodeSandbox"/>

        <h1>The Technologies</h1>

        <img src="" alt="React"/>
        <img src="" alt="Bootstrap"/>
        <h2>Front End</h2>

        <img src="" alt="CSS"/>
        <img src="" alt="?"/>
        <h2>Styling</h2>

        <h1>The Team</h1>

        <img src="" alt="Jason Hargrove"/>
        <h2>Jason Hargrove</h2>
        <h3>Software Engineer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, neque obcaecati repellat consequatur recusandae quas amet
        </p>
        <img src="" alt="LinkedIn"/>
        <img src="" alt="GitHub"/>

        <img src="" alt="Jessalynn Moncada"/>
        <h2>Jessalynn Moncada</h2>
        <h3>Software Engineer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, neque obcaecati repellat consequatur recusandae quas amet
        </p>
        <img src="" alt="LinkedIn"/>
        <img src="" alt="GitHub"/>

        <img src="" alt="Katherine Gomez"/>
        <h2>Katherine Gomez</h2>
        <h3>UX Designer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, neque obcaecati repellat consequatur recusandae quas amet
        </p>
        <img src="" alt="LinkedIn"/>
        <img src="" alt="WordPress"/>

        <h1>The Result</h1>
      </div>
      {/* ===== Footer goes here. ===== */}
    </>
  )
}

export default LandingPage

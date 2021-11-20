import React from 'react';
import LandingNav from '../../Components/NavBars/LandingNav/LandingNav';
import './LandingPage.css';

function LandingPage() {
  return (
    <>
      {/* ↓↓↓↓↓ ===== Landing Section ===== ↓↓↓↓↓ */}
      <LandingNav />
      <div className="landing-page">
        <h1>Unwind With Color</h1>
        <h2>A Digital Drawing Experience</h2>
        <button className="project-button">Go To Project</button>
        <img src="/img/rainbow-splash-image.svg" alt="rainbow splash"/>
      {/* ↑↑↑↑↑ ===== End Landing Section ===== ↑↑↑↑↑ */}

        {/* ↓↓↓↓↓ ===== Challenge Section ===== ↓↓↓↓↓ */}
        <h1>The Challenge</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam modi voluptas cum eum doloremque distinctio, non quia eaque cupiditate itaque incidunt soluta repellendus quod perferendis mollitia error tempora dignissimos. Cum.</p>
        {/* ↑↑↑↑↑ ===== End Challenge Section ===== ↑↑↑↑↑ */}

        <br/>

        {/* ↓↓↓↓↓ ===== Process Section ===== ↓↓↓↓↓ */}
        <h1>The Process</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolorem, maxime ipsam quas, alias labore, nulla eius quibusdam ratione voluptas, ab voluptatibus suscipit? Id, ipsa amet. Fugiat facere, similique commodi.</p>

        <img className="l-page-icons" src="/img/github-logo.svg" alt="GitHub"/>
        <img className="l-page-icons" src="/img/code-sandbox-logo.svg" alt="CodeSandbox"/>
        {/* ↑↑↑↑↑ ===== End Process Section ===== ↑↑↑↑↑ */}


        {/* ↓↓↓↓↓ ===== Tech Section ===== ↓↓↓↓↓ */}
        <h1>The Technologies</h1>

        <img className="l-page-icons" src="/img/reactjs-icon.svg" alt="React"/>
        <img className="l-page-icons" src="/img/bootstrap-icon.svg" alt="Bootstrap"/>
        <h2>Front End</h2>

        <img className="l-page-icons" src="/img/css-icon.svg" alt="CSS"/>
        <img className="l-page-icons" src="/img/material-ui-logo.svg" alt="MUI"/>
        <h2>Styling</h2>
        {/* ↑↑↑↑↑ ===== End Tech Section ===== ↑↑↑↑↑ */}


        {/* ↓↓↓↓↓ ===== Team Section ===== ↓↓↓↓↓ */}
        <h1>The Team</h1>

        {/* Katherine */}
        <img className="profile-picture" src="/img/katherine-gomez.png" alt="Katherine Gomez"/>
        <h2>Katherine Gomez</h2>
        <h3>UX Designer</h3>
        <p>
          UX Designer specializing in Visual Design, synthesizing data and accelerating business workflows. I’m a natural problem-solver with a keen eye for detail, project management, and group facilitation.
        </p>
        <p>
          With a background in 3D, I seek to use my creativity to make future forward, user focused empathetic experiences aligned with business goals.
        </p>
        <img className="l-page-icons" src="/img/linkedin-logo.svg" alt="LinkedIn"/>
        <img className="l-page-icons" src="/img/wordpress-icon.svg" alt="WordPress"/>

        {/* Jessalynn */}
        <img className="profile-picture" src="/img/jessalynn-moncada.png" alt="Jessalynn Moncada"/>
        <h2>Jessalynn Moncada</h2>
        <h3>Software Engineer</h3>
        <p>
          Loving friend, proud daughter and inspired woman in tech!
        </p>
        <p>
          Co-Founder/Host of a podcast where three minorities come together to voice their experiences in the tech industry.
        </p>
        <p>
          More exclusively, a Full Stack Software Engineer experienced in Node.js, React.js and database concepts such as MongoDB/PosgreSQL, with a passion for digital design and incorporating that into my frontends. I genuinely enjoy a great challenge in projects - getting outside my comfort zone and learning something new is always the goal.
        </p>
        <img className="l-page-icons" src="/img/linkedin-logo.svg" alt="LinkedIn"/>
        <img className="l-page-icons" src="/img/github-logo.svg" alt="GitHub"/>

        {/* Jason */}
        <img className="profile-picture" src="/img/jason-hargrove.png" alt="Jason Hargrove"/>
        <h2>Jason Hargrove</h2>
        <h3>Software Engineer</h3>
        <p>
          Software Engineer with a background in fine art and graphic design, able to tackle hidden problems by finding connections between seemingly unrelated things.
        </p>
          Passionate about helping clients overcome barriers to technology with well designed, user friendly, unique products.
        <p>
          Approach each project as a street artist and developer by communicating graphically to provoke positive reactions. Transform thoughts into action to generate tangible and creative results.
        </p>
        <img className="l-page-icons" src="/img/linkedin-logo.svg" alt="LinkedIn"/>
        <img className="l-page-icons" src="/img/github-logo.svg" alt="GitHub"/>
        {/* ↑↑↑↑↑ ===== End Team Section ===== ↑↑↑↑↑ */}


        {/* ↓↓↓↓↓ ===== Result Section ===== ↓↓↓↓↓ */}
        <h1>The Result</h1>
        {/* ↑↑↑↑↑ ===== End Result Section ===== ↑↑↑↑↑ */}
      </div>
      {/* ===== Footer goes here. ===== */}
    </>
  )
}

export default LandingPage

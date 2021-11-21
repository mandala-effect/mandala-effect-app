import React from 'react';
import LandingNav from '../../Components/NavBars/LandingNav/LandingNav';
import './LandingPage.css';

function LandingPage() {
  return (
    <>
      {/* ↓↓↓↓↓ ===== Landing Section ===== ↓↓↓↓↓ */}
      <div className="landing-page">
        <section className="container-top">
          <nav className="container-top-nav">
          <LandingNav />
          </nav>
          <article className="container-top-heading">
            <h1 className="purple">Unwind With Color</h1>
            <h5>A Digital Drawing Experience</h5>
            <button className="project-button">
              Go To Project
            </button>
          </article>
          <img className="contaner-top-image" src="/img/rainbow-splash-image.svg" alt="rainbow splash"/>
        </section>

      {/* ↑↑↑↑↑ ===== End Landing Section ===== ↑↑↑↑↑ */}


        {/* ↓↓↓↓↓ ===== Challenge Section ===== ↓↓↓↓↓ */}
        <h1 className="purple">The Challenge</h1>

        <p>
          <a href="https://mintbean.io/">Mintbean</a> Hiring Hackathon for Jr Web Devs. Paint App - Becoming Bob Ross.
          Computers have been a boon for creativity and imagination. Digital art has, for decades now, been a medium in its own right; and with the advent of NFTs, the future might be very bright indeed for digital artists. Today, we'll build an app that lets your friends and loved ones express their creative side.
        </p>
        <p>
          We were taked to build an app that lets people express their creativity in a visual format. You can build ANY application you'd like. Whether it's a blank canvas that you can paint on, a photo-editing app, a shared white board -- as long as it fulfills one OR both of the following requirements:
          * As a user, I can drag my mouse across the screen to make free-form lines.
          * As a user, I can click areas of the screen with my mouse to fill them with a color, texture or pattern.
        </p>
        {/* ↑↑↑↑↑ ===== End Challenge Section ===== ↑↑↑↑↑ */}

        <br/>

        {/* ↓↓↓↓↓ ===== Process Section ===== ↓↓↓↓↓ */}
        <h1 className="blue">The Process</h1>

        <p>
          Planned project, and planned our limited time wisely. Got a clear idea of what were were building. Set up standup meetings on Zoom. Implemented JIRA. Aim low, climb high minimum viable product. UX created a loft wireframe. Engineers used Create React App and updated README. Midfi wireframe and created canvas color pallet. General app structure. Hifi wireframe and gather SVSs.  Nav bars. Adjusted app structure. Basic styling. Began working on the landing page by adding images and meta data.
        </p>

        <img className="l-page-icons" src="/img/github-logo.svg" alt="GitHub"/>
        <img className="l-page-icons" src="/img/code-sandbox-logo.svg" alt="CodeSandbox"/>
        {/* ↑↑↑↑↑ ===== End Process Section ===== ↑↑↑↑↑ */}


        {/* ↓↓↓↓↓ ===== Tech Section ===== ↓↓↓↓↓ */}
        <h1 className="green">The Technologies</h1>

        <img className="l-page-icons" src="/img/reactjs-icon.svg" alt="React"/>
        <img className="l-page-icons" src="/img/bootstrap-icon.svg" alt="Bootstrap"/>
        <h2>Front End</h2>

        <img className="l-page-icons" src="/img/css-icon.svg" alt="CSS"/>
        <img className="l-page-icons" src="/img/material-ui-logo.svg" alt="MUI"/>
        <h2>Styling</h2>
        {/* ↑↑↑↑↑ ===== End Tech Section ===== ↑↑↑↑↑ */}


        {/* ↓↓↓↓↓ ===== Team Section ===== ↓↓↓↓↓ */}
        <h1 className="orange">The Team</h1>

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
        <h1 className="red">The Result</h1>
        {/* ↑↑↑↑↑ ===== End Result Section ===== ↑↑↑↑↑ */}
      </div>
      {/* ===== Footer goes here. ===== */}
    </>
  )
}

export default LandingPage

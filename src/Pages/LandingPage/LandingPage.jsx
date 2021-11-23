import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to={'/color'}>
              <button className="project-button">
                Go To Project
              </button>
            </Link>
          </article>
          <img className="container-top-image" src="/img/rainbow-splash-image.svg" alt="rainbow splash"/>
        </section>

      {/* ↑↑↑↑↑ ===== End Landing Section ===== ↑↑↑↑↑ */}


        {/* ↓↓↓↓↓ ===== Challenge Section ===== ↓↓↓↓↓ */}
        <h3 className="purple">The Challenge</h3>
        <p>
           This project is our submission for   <a href="https://mintbean.io/">Mintbean</a>'s Hiring Hackathon for Jr Web Devs. The theme prompt was "Paint App - Becoming Bob Ross". Computers have been a boon for creativity and imagination. Digital art has, for decades now, been a medium in its own right; and with the advent of NFTs, the future might be very bright indeed for digital artists.
        </p>
        <p>
          Our challenge was to build an app that lets people express their creativity in a visual format. We could build ANY application we'd like. Whether it was a blank canvas that you can paint on, a photo-editing app, a shared white board -- as long as it fulfilled one OR both of the following requirements: * As a user, I can drag my mouse across the screen to make free-form lines. * As a user, I can click areas of the screen with my mouse to fill them with a color, texture or pattern.
        </p>
        {/* ↑↑↑↑↑ ===== End Challenge Section ===== ↑↑↑↑↑ */}

        <br/>

        {/* ↓↓↓↓↓ ===== Process Section ===== ↓↓↓↓↓ */}
        <h3 className="blue">The Process</h3>

        <p>
          Planned project, and planned our limited time wisely. Got a clear idea of what were were building. Set up standup meetings on Zoom. Implemented JIRA. Aim low, climb high minimum viable product. UX created a LoFi Wireframe. Engineers used Create React App and updated README. MidFi wireframe and created canvas color palette. General app structure. HiFi Wireframe and gather SVSs.  Nav bars. Adjusted app structure. Basic styling. Began working on the landing page by adding images and meta data.
        </p>

        <figure className="process-icons">
          <a href="https://github.com/mandala-effect/mandala-effect-app.git">
            <img className="l-page-icons" src="/img/github-logo.svg" alt="GitHub"/>
          </a>
          <a href="https://codesandbox.io/">
            <img className="l-page-icons" src="/img/code-sandbox-logo.svg" alt="CodeSandbox"/>
          </a>
          <a href="https://www.figma.com/file/4f3Shhq1Sgypp3CqLYvY13/Drawing-App">
            <img className="l-page-icons" src="/img/figma-icon.png" alt="Figma"/>
          </a>
        </figure>
        {/* ↑↑↑↑↑ ===== End Process Section ===== ↑↑↑↑↑ */}


        {/* ↓↓↓↓↓ ===== Tech Section ===== ↓↓↓↓↓ */}
        <h3 className="green">The Technologies</h3>

        <section className="container-tech">
          <figure className="container-tech-front">
            <img className="l-page-icons" src="/img/reactjs-icon.svg" alt="React"/>
            <img className="l-page-icons" src="/img/bootstrap-icon.svg" alt="Bootstrap"/>
            <h5>Front End</h5>
          </figure>

          <figure className="container-tech-styling">
            <img className="l-page-icons" src="/img/css-icon.svg" alt="CSS"/>
            <img className="l-page-icons" src="/img/material-ui-logo.svg" alt="MUI"/>
            <h5>Styling</h5>
          </figure>
        </section>
        {/* ↑↑↑↑↑ ===== End Tech Section ===== ↑↑↑↑↑ */}


        {/* ↓↓↓↓↓ ===== Team Section ===== ↓↓↓↓↓ */}
        <h3 className="orange">The Team</h3>

        <section className="container-team">
          <aside className="kat">
            {/* Katherine */}
            <img className="profile-picture" src="/img/katherine-gomez.png" alt="Katherine Gomez"/>
            <h2>Katherine Gomez</h2>
            <h3>UX Designer</h3>
            <aside className="container-team-text">
            <p>
              Specializing in Visual Design, synthesizing data and accelerating business workflows. I’m a natural problem-solver with a keen eye for detail, project management, and group facilitation.
            </p>
            <p>
              With a background in 3D, I seek to use my creativity to make future forward, user focused empathetic experiences aligned with business goals.
            </p>
            </aside>
            <figure className="container-team-icons">
              <a href="https://www.linkedin.com/in/katherine-v-gomez-34343393/">
                <img className="l-page-icons" src="/img/linkedin-logo.svg" alt="LinkedIn"/>
              </a>
              <a href="https://katherinevgomez.com/">
                <img className="l-page-icons" src="/img/wordpress-icon.svg" alt="WordPress"/>
              </a>
            </figure>
          </aside>

          <aside className="jess">
            {/* Jessalynn */}
            <img className="profile-picture" src="/img/jessalynn-moncada.png" alt="Jessalynn Moncada"/>
            <h2>Jessalynn Moncada</h2>
            <h3>Software Engineer</h3>
            <aside className="container-team-text">
              <p>
                Loving friend, proud daughter and inspired woman in tech!
              </p>
              <p>
                Experienced in Node.js, React.js and database concepts such as MongoDB/PosgreSQL, with a passion for digital design and incorporating that into my frontends. I genuinely enjoy a great challenge in projects - getting outside my comfort zone and learning something new is always the goal.
              </p>
            </aside>
            <figure className="container-team-icons">
              <a href="https://www.linkedin.com/in/jessalynnmoncada/">
                <img className="l-page-icons" src="/img/linkedin-logo.svg" alt="LinkedIn"/>
              </a>
              <a href="https://github.com/Moncada-J">
                <img className="l-page-icons" src="/img/github-logo.svg" alt="GitHub"/>
              </a>
            </figure>
          </aside>

          <aside className="jay">
            {/* Jason */}
            <img className="profile-picture" src="/img/jason-hargrove.png" alt="Jason Hargrove"/>
            <h2>Jason Hargrove</h2>
            <h3>Software Engineer</h3>
            <aside className="container-team-text">
              <p>
                A background in fine art and graphic design, passionate about helping clients overcome barriers to technology with well designed, user friendly, unique products.
              </p>
              <p>
                Approach each project as a street artist and developer by communicating graphically to provoke positive reactions. Transform thoughts into action to generate tangible and creative results.
              </p>
            </aside>
            <figure className="container-team-icons">
              <a href="https://www.linkedin.com/in/jason--hargrove/">
                <img className="l-page-icons" src="/img/linkedin-logo.svg" alt="LinkedIn"/>
              </a>
              <a href="https://github.com/Jason-Hargrove">
                <img className="l-page-icons" src="/img/github-logo.svg" alt="GitHub"/>
              </a>
            </figure>
          </aside>
        </section>
        {/* ↑↑↑↑↑ ===== End Team Section ===== ↑↑↑↑↑ */}


        {/* ↓↓↓↓↓ ===== Result Section ===== ↓↓↓↓↓ */}
        <h3 className="red">The Result</h3>
        {/* ↑↑↑↑↑ ===== End Result Section ===== ↑↑↑↑↑ */}
      </div>
      {/* ===== Footer goes here. ===== */}
    </>
  )
}

export default LandingPage

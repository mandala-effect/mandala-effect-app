import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import './Footer.css';


export default function Footer() {
    return (
    <div className="footer-div">
      <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3 footer-div' >
        {/* <h5 className="footer-title">Mandala Effect</h5> */}
        <span>&copy; {new Date().getFullYear()} Copyright {' '}</span>
        <br />
        <span>Made with &nbsp;💛 &nbsp; by <strong>J, J & K</strong>
        </span>
        <br />
        <a className='footer-link' href='https://github.com/mandala-effect/mandala-effect-app/'>
        <img src="/img/github-white-logo.svg" alt="github-code" className="footer-logo"/>
        </a>
        <a className='footer-link' href='https://github.com/mandala-effect/mandala-effect-app/'>
        <img src="/img/code-sandbox-white-logo.png" alt="codesandbox-code"className="footer-logo" />
        </a>
      </div>
    </MDBFooter>
    </div>
    )
}



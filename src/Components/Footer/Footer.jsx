import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import './Footer.css';


export default function Footer() {
    return (
      <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3 footer-div' >
        {/* <h5 className="footer-title">Mandala Effect</h5> */}
        <span>&copy; {new Date().getFullYear()} Copyright {' '}
        <br />
        Made with &nbsp;💛 &nbsp; by <strong>J, J & K</strong>
        </span>
        <img src={""} alt="github">
        <a className='footer-link' href='https://github.com/mandala-effect/mandala-effect-app/'>
   
        </a></img>
      </div>
    </MDBFooter>
    )
}



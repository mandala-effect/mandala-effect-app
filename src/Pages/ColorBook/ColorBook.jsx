import React from 'react';
import SecondaryNav from 
'../../Components/NavBars/SecondaryNav/SecondaryNav';
import PaintBox from '../../Components/PaintBox/PaintBox';
import './ColorBook.css';


export default function ColorBook() {
    return (
        <div className="colorbook">
            <SecondaryNav />
            <PaintBox />
        </div>
    )
}
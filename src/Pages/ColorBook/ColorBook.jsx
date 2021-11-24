import React from 'react';
import SecondaryNav from 
'../../Components/NavBars/SecondaryNav/SecondaryNav';
import PaintBox from '../../Components/PaintBox/PaintBox';
import './ColorBook.css';


export default function ColorBook({darkMode, setDarkMode, emoji, setEmoji}) {
    return (
        <div className="colorbook">
            <SecondaryNav darkMode={darkMode} setDarkMode={setDarkMode} emoji={emoji} setEmoji={setEmoji}/>
            <PaintBox />
        </div>
    )
}
import React from 'react';
import Palette from '../Palette/Palette';
import './PaintBox.css';

export default function PaintBox() {
    return (
        <div className="PaintBox">
            <div className="paint-container">
                <Palette />
            </div>
        </div>
    )
}



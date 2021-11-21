import React from 'react';
import Palette from '../Palette/Palette';
import Save from '../Save/Save';
import './PaintBox.css';

export default function PaintBox() {
    return (
        <div className="PaintBox">
            <div className="paint-container">
                <Palette />
                <Save />
            </div>
        </div>
    )
}



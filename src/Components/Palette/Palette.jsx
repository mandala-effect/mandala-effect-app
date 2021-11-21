import React from 'react';
import Head from './Head/Head';
import ColorPanel from './ColorPanel/ColorPanel';
import Brush from './ButtonGroup/Brush/Brush';
import Clear from './ButtonGroup/Clear/Clear';
import ClearAll from './ButtonGroup/ClearAll/ClearAll';


export default function Palette() {
    return (
        <div className="Palette">
            <Head />
            <ColorPanel />
            <Brush />
            <Clear />
            <ClearAll />
        </div>
    )
}

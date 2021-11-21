import React from 'react';
import Head from './Head/Head';
import ColorPanel from './ColorPanel/ColorPanel';

export default function Palette() {
    return (
        <div className="Palette">
            <Head />
            <ColorPanel />
        </div>
    )
}

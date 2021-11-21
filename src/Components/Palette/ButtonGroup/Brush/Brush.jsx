import React from 'react';
import './Brush.css';

export default function Brush() {
    return (
        <div className="Brush">
             <div class="btn-group dropend">
                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Brush</button>
                <div class="dropdown-menu">
                    <a href="https://gle.com" class="dropdown-item">Bucket</a>
                </div>
            </div>
        </div>
    )
}

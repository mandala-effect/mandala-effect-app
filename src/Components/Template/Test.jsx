import React  from 'react';
import templates from '../../templates';
import './Template.css';


export default function Test() {
    // const [fillColors, setFillColors] = useState(Array)
    return (
        <div className="Template">
           <img src={templates[0].src} alt={templates[0].title} className="template-svg" />
        </div>
    )
}
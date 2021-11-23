import React  from 'react';
import './Template.css';


export default function Template({template}) {
    // const [fillColors, setFillColors] = useState(Array)
    return (
        <div className="Template">
            <img src={template.src}  alt={template.title} />
        </div>
    )
}

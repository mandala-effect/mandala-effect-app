import React from 'react';
import './TemplateBox.css';
// import templates from '../../templates';
// import Template from '../Template/Template';
import Test from '../Template/Test';

export default function TemplateBox() {
    return (
        <div className="template-box">
            {/* {templates.map((template) => (
                <Template template={template} key={template.id} />
                ))} */}
                <Test />
        </div>
    )
}

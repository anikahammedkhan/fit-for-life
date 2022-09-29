import React from 'react';

const Question = () => {
    return (
        <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                I have collapse-open className
            </div>
            <div className="collapse-content">
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
        </div>
    );
};

export default Question;
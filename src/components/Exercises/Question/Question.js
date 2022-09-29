import React from 'react';
import './Question.css';
const Question = () => {
    return (
        <div className='question-container'>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-white text-black peer-checked:bg-info peer-checked:text-white">
                    How Does React Work?
                </div>
                <div className="collapse-content  bg-white text-black peer-checked:bg-info peer-checked:text-white">
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
                </div>
            </div>
            <div className="collapse mt-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-white text-black peer-checked:bg-info peer-checked:text-white">
                    How Does React Work?
                </div>
                <div className="collapse-content  bg-white text-black peer-checked:bg-info peer-checked:text-white">
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
                </div>
            </div>
            <div className="collapse mt-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-white text-black peer-checked:bg-info peer-checked:text-white">
                    How Does React Work?
                </div>
                <div className="collapse-content  bg-white text-black peer-checked:bg-info peer-checked:text-white">
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
                </div>
            </div>
        </div>
    );
};

export default Question;
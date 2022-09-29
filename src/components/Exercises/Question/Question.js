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
                    <p>How does React work: While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                        Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                        Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
                </div>
            </div>
            <div className="collapse mt-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-white text-black peer-checked:bg-info peer-checked:text-white">
                    Difference Between Props and State ?
                </div>
                <div className="collapse-content  bg-white text-black peer-checked:bg-info peer-checked:text-white">
                    <p>
                        <ul>
                            <li>	Props are read-only.	State changes can be asynchronous.
                            </li>
                            <li>
                                Props are immutable.	State is mutable.
                            </li>
                            <li>
                                Props allow you to pass data from one component to other components as an argument.	State holds information about the components.
                            </li>
                            <li>
                                Props are used to communicate between components.	States can be used for rendering dynamic changes with the component.
                            </li>
                            <li>
                                Props are external and controlled by whatever renders the component.	The State is internal and controlled by the React Component itself.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="collapse my-3">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-white text-black peer-checked:bg-info peer-checked:text-white">
                    What we can do with useEffect besides data load ?
                </div>
                <div className="collapse-content  bg-white text-black peer-checked:bg-info peer-checked:text-white">
                    <p>
                        <ol>
                            <li>Running once on mount: fetch API data</li>
                            <li>Running on state change: validating input field</li>
                            <li>Running on state change: live filtering</li>
                            <li>Running on state change: trigger animation on new array value</li>
                            <li>Running on props change: update paragraph list on fetched API data update</li>
                            <li>Running on props change: updating fetched API data to get BTC updated price</li>
                        </ol>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Question;
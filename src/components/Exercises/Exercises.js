import React from 'react';
import Cart from '../Cart/Cart';
import './Exercises.css';

const Exercises = () => {
    const [exercises, setExercises] = React.useState([]);
    React.useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setExercises(data))
            .catch(err => console.log(err));
    }, []);
    const [cart, setCart] = React.useState([]);
    let newCart = [];
    const handleTask = (props) => {
        newCart = [...cart, props];
        setCart(newCart);
    }
    return (
        <div className='main-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4'>
            <div className='exercise-container col-span-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {
                    exercises.map(exercise =>
                        <div key={exercise.id} className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={exercise.picture} alt="exercise" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{exercise.name}</h2>
                                <p>{exercise.details.slice(0, 250)}</p>
                                <div className='font-bold'>
                                    <p>Age : {exercise.age} years</p>
                                    <p>Time : {exercise.time} seconds</p>
                                </div>
                                <div className="card-actions justify-center align-center">

                                    <div className='block'>
                                        <button className="btn btn-success" onClick={() => handleTask(exercise.time)}>Add To Task</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <div className='cart-container md:col-span-full lg:col-span-1'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Exercises;
import React from 'react';
import Image from './4.jpg';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Cart = (props) => {
    let { cart } = props;
    const time = cart.map(time => time);
    const total = time.reduce((total, time) => parseInt(total) + parseInt(time), 0);
    const [breaks, setBreaks] = React.useState(0);
    const handleBreakTime = (props) => {
        setBreaks(props);
    }
    return (
        <div className='cart-box'>
            <div className='profile'>
                <div className='p-3'>
                    <img src={Image} alt="" className='w-10 h-10 rounded-2xl' />
                </div>
                <div>
                    <h1 className='font-bold'>Md Anik Ahammed Khan</h1>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='flex justify-evenly bg-slate-200 p-4 rounded-lg my-3'>
                <div>
                    <p className='font-bold'>75<small>Kg</small></p>
                    <p>Weight</p>
                </div>
                <div>
                    <p className='font-bold'>6.5</p>
                    <p>Hight</p>
                </div>
                <div>
                    <p className='font-bold'>24<small>Years</small></p>
                    <p>Age</p>
                </div>
            </div>
            <h1 className='font-bold my-3'>Add A Break</h1>
            <div className='flex justify-evenly'>
                <button className='btn btn-circle btn-warning hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300' onClick={() => handleBreakTime(10)}>10</button>
                <button className='btn btn-circle btn-warning hover:bg-violet-600 active:bg-violet-900 focus:outline-none focus:ring focus:ring-violet-300' onClick={() => handleBreakTime(20)}>20</button>
                <button className='btn btn-circle btn-warning hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300' onClick={() => handleBreakTime(30)}>30</button>
                <button className='btn btn-circle btn-warning hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300' onClick={() => handleBreakTime(40)}>40</button>
                <button className='btn btn-circle btn-warning hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300' onClick={() => handleBreakTime(50)}>50</button>
            </div>
            <h1 className='font-bold my-3'>Exercise Details</h1>
            <div className='flex justify-between bg-slate-200 p-4 rounded-lg my-3 mx-4'>
                <h1>Exercise Time</h1>
                <p>{total} seconds</p>
            </div>
            <div className='flex justify-between bg-slate-200 p-4 rounded-lg my-3 mx-4'>
                <h1>Break Time</h1>
                <p>{breaks} seconds</p>
            </div>

            <div className="btn btn-primary flex align-center mx-3 mb-4" onClick={() => toast("Congartulation! You Have Successfully Completed Your Exercise !!")}>Activity Completed</div>
            <ToastContainer position="bottom-right" />
        </div>
    );
};

export default Cart;
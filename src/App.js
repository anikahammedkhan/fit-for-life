import './App.css';
import Exercises from './components/Exercises/Exercises';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-4xl text-center my-5 text-blue-700 font-bold'>Fit For Life</h1>
      <p className='text-lg pl-6 font-semibold pb-4'>Select Today's Exercise :</p>
      <Exercises></Exercises>
    </div>
  );
}

export default App;

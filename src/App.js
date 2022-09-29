import './App.css';
import Exercises from './components/Exercises/Exercises';
import Question from './components/Exercises/Question/Question';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-4xl text-center my-5 text-blue-600 font-bold'>Fit For Life</h1>
      <p className='text-lg pl-6 font-semibold pb-4'>Select Today's Exercise :</p>
      <Exercises></Exercises>
      <h1 className='text-4xl text-center my-5 text-cyan-500 font-bold'>Frequently Asked Question</h1>
      <Question></Question>
      <Footer></Footer>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import QuestionPoster from './components/QuestionPoster';
import {Routes, Route} from 'react-router-dom';
import Viewer from './components/Viewer';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/upload" element={<QuestionPoster/>}/>
          <Route path="/view" element={<Viewer/>}/>
        </Routes>
        <Footer/> 
    </div>
  );
}

export default App;

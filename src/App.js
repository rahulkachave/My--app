
import './App.css';
import Contact from './components/Contact';
import Details from './components/Details';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer'; //this is for a components file export import
import Student from './components/Student';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Java from './components/Java';
import Team from './components/Team';
import Error from './components/Error';
import SpringBoot from './components/SpringBoot';
import SpringHistory from './components/SpringHistory';
import SpringAnotation from './components/SpringAnotation';
function App() {
 
  return (
    <Router>
    <div className="App">
     <div className='welcome'> Wel-COME</div>
      <Footer/>
    
           <Routes>
            <Route path='/'>
          <Route path="/app" element={<Home />}/>
            <Route index element={Home}></Route>
           
          </Route>
          <Route path="/about" element={<About/>}/>
          <Route path='java' element={<Java />}/>
          <Route index element={<Java />}/>
          <Route path="team" element={<Team />} ></Route>
     
          
           <Route path='/contact' element={<Contact/>}/>
           <Route path ='SpringBoot' element={<SpringBoot/>}/>
           <Route index element={<SpringBoot/>}/>
           <Route path ='SpringHistory' element={<SpringHistory/>}/>
           <Route path ='SpringAnotation' element={<SpringAnotation/>}/>



          <Route path='/details' element={<Details/>}/>
          <Route path='/student' element={<Student/>}/> 
          <Route path ='*' element={<Error/>}/>


         </Routes>
      
    </div>
    </Router>
  );
}

export default App;

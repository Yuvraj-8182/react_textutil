
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
import About from './components/About';
import {BrowserRouter as Router,Route,Routes, BrowserRouter} from "react-router-dom";

function App() {
   const [mode, setmode] = useState('light'); //whether dark mode isenble not
   const [alert, setalert] = useState(null);

   const showalert = (message,type) =>{
     setalert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setalert(null)
     }, 1500);
   }
 const  toggleMode =() =>{
    if(mode === 'light')
    {
      setmode('dark');
      document.body.style.backgroundColor = "#042743";
      showalert("Dark mode has been enabled","success");
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor = "white";
      showalert("light mode has been enabled","success");
    }
  }
  return (

     <Router> 
        <Navbar title="Textutils" abouttext="About us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
      <Routes>
      
        <Route path='/About' element={<About  mode={mode}/>}></Route>
        <Route path='/' element={<TextFrom showalert={showalert} heading="Try TextUtils - word counter, character counter, remove extra spaces " mode={mode}/>}></Route>
        
      </Routes>
     </Router> 
 
  );
}

export default App;

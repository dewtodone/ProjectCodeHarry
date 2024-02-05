import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');


  const toggleMode = () => {
    if (mode ==='light'){
      setMode('dark')
      document.body.style.background = '#042743';
    }
    else {
      setMode('light')
      document.body.style.background = 'white';
    }
  }
  
  
  return (
    <>
      <Navbar title="Navigation Menu" mode={mode} toggleMode={toggleMode}/>
      <TextForm />      
      <About mode={setMode}/>
    </>
  );
}



export default App;



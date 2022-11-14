// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';




function App() {

  const [mode, setDarkMode] =  useState('light');

  const toggleMode = ()=> {
    if(mode === 'light'){
      setDarkMode('dark');
    }
    else{
      setDarkMode('light');
    }

  }
  return (
    <>
      <Navbar title="Text-Utils" mode={mode} toggleMode = {toggleMode}/>

      <div className="container my-3">
        <TextForm heading="Enter Text To Analyse" />
        {/* <About /> */}
      </div>
    
    </>
  );
}

export default App;

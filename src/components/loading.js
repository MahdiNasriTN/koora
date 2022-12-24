

import logo from '../Images/anim.gif';
import gsap from 'gsap';
import '../App.css';
import { useEffect } from 'react';

function Loading() {
    useEffect(() => {
      
   gsap.to(".App",{y:"-100vh",ease: "power2.inOut",delay:0.5,duration:2.29}).then(() =>{
    document.querySelector('body').style.overflow="visible";
   });
 

    },[]);
  return (
    <div className="App">
    
      <header className="App-header">
        <img src={logo} className="logoclass App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Loading;

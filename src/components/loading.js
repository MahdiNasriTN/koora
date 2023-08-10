

import logo from '../Images/anim.gif';
import gsap from 'gsap';
import './loading.css';
import { useEffect } from 'react';

function Loading() {
    useEffect(() => {
      window.scrollTo(0, 0);
      gsap.to(".App",{opacity:0,display:"none",ease: "power2.inOut",delay:3,duration:1.5}).then(() =>{
      document.querySelector('body').style.overflow="visible";
   }); },[]);



  return (
    <div className="App">
    
      <header className="App-header">
        <img src={logo} className="logoclass App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Loading;

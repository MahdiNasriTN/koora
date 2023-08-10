import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import Home from './Home';
import SectionOne from'./components/SectionOne';
import reportWebVitals from './reportWebVitals';
import Loading from './components/loading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Loading></Loading>
    <Home></Home>
    <SectionOne />
  </React.StrictMode>
);


reportWebVitals();

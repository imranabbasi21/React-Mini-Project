import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import Header from './Header/Header';
import './Pages/MemberShip.css'
import './Pages/Home.css'
import Footer from './Footer/Footer';
import './Review/Review'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Footer/>
  </React.StrictMode>
);


reportWebVitals();

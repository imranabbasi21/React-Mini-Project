import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Header.css'; // Add your CSS styles
import Home from '../Pages/Home';
import MemberShip from '../Pages/MemberShip';
import NewCar from '../Pages/NewCar';
import Inspeq from '../Pages/Inspeq';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search submitted:', searchQuery);
  };

  return (
    <Router>
      <div>
        <header className="header">
          <div className="logo">
            <a href="/">
              <img
                className="KiaLogo"
                // src="https://kia.car.com/assets/img/kia@2x.png"
                // alt="Kia Logo"
                  // src="https://logodix.com/logo/5396.png"
                  // alt="Kia Logo"
                  src="https://avatars.mds.yandex.net/i?id=ebde237600a3286e746fd304014f182a07630505-9863357-images-thumbs&ref=rim&n=33&w=356&h=200"
                  alt="Kia Logo"
              />
            </a>
          </div>
          <div className="nav-container">
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/New Car">New Car</Link></li>
                <li><Link to="/Inspeq">Inspeq</Link></li>
                <li><Link to="/MemberShip">MemberShip Form</Link></li>
              </ul>
            </nav>
          </div>
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery} 
              onChange={handleSearchChange} 
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>

          <button className="toggle-btn" onClick={toggleMenu}>
            ☰
          </button>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/New Car" element={<NewCar />} />
          <Route path="/Inspeq" element={<Inspeq />} />
          <Route path="/MemberShip" element={<MemberShip />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Header;

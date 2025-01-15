import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faUtensils, faFireworks, faHighway } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <nav className="hero-nav">
        <ul className="hero-nav-list">
          <li className="hero-nav-item">
            <a href="/hotels" className="hero-nav-link">
              <FontAwesomeIcon icon={faHotel} className="hero-nav-icon" />
              <span className="hero-nav-text">Hotels</span>
            </a>
          </li>
          <li className="hero-nav-item">
            <a href="/restaurants" className="hero-nav-link">
              <FontAwesomeIcon icon={faUtensils} className="hero-nav-icon" />
              <span className="hero-nav-text">Restaurants</span>
            </a>
          </li>
          <li className="hero-nav-item">
            <a href="/things-to-do" className="hero-nav-link">
              <FontAwesomeIcon icon={faFireworks} className="hero-nav-icon" />
              <span className="hero-nav-text">Things to Do</span>
            </a>
          </li>
          <li className="hero-nav-item">
            <a href="/places-to-visit" className="hero-nav-link">
              <FontAwesomeIcon icon={faHighway} className="hero-nav-icon" />
              <span className="hero-nav-text">Places to Visit</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center">
        <h1>Welcome to Our Website</h1>
        <p>We are glad to have you here. Explore our content and enjoy your stay!</p>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>
          <span className="mr-2">Search</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Hero;
import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full flex justify-between items-center z-50">
      <div className="header-left">
        <img src="/path/to/logo.png" alt="Website Logo" className="logo h-10" />
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/destination" className="hover:underline">Destination</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
      <div className="header-right relative">
        <div className="account-icon cursor-pointer" onClick={toggleDropdown} ref={dropdownRef}>
          <img src="/path/to/account-icon.png" alt="Account" className="h-10 w-10 rounded-full" />
          {dropdownOpen && (
            <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg p-4 flex flex-col space-y-2">
              {isLoggedIn ? (
                <>
                  <a href="/account" className="hover:underline">Account</a>
                  <a href="/logout" className="hover:underline">Logout</a>
                </>
              ) : (
                <>
                  <a href="/signin" className="hover:underline">Sign In</a>
                  <a href="/signup" className="hover:underline">Sign Up</a>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
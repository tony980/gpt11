import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">GPT-3</div>

      {/* Hamburger Icon for Small Screens */}
      <div className="hamburger">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hamburger-btn">
          <svg
            className="hamburger-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Menu Items - Hidden on small screens */}
      <ul className="menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#what-is-gpt">What is GPT?</a></li>
        <li><a href="#openai">OpenAI</a></li>
        <li><a href="#case-studies">Case Studies</a></li>
        <li><a href="#library">Library</a></li>
      </ul>

      {/* Action Buttons - Hidden on small screens */}
      <div className="actions">
        <button className="signin">Sign In</button>
        <button className="demo">Try Demo</button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#what-is-gpt">What is GPT?</a></li>
            <li><a href="#openai">OpenAI</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="#library">Library</a></li>
            <li><button className="signin">Sign In</button></li>
            <li><button className="demo">Try Demo</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

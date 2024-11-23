import React from 'react';
import Illustration from '../images/Illustration.png'; 
import '../css/Header.css';  


const Header = () => {
  return (
    <header className="header">
      {/* Text Section */}
      <div className="text-section">
        <h4 className="main-heading">
          <span className="highlight-1">Let’s Build</span><span className="highlight-2"> Something </span><br />
          <span className="highlight-1">amazing with</span><span className="highlight-2"> GPT-3 </span><br />
          <span className="highlight-3">OpenAI</span></h4><p style={{  color: '#81AFDD',fontWeight:'lighter' }}> Let's explore new possibilities and push the boundaries of what's possible with cutting-edge AI technology.
          GPT-3 can help turn your ideas into reality with unprecedented ease and creativity. Join us and be part of this exciting journey.
        </p>
        
        {/* Email Form */}
        <div className="email-form">
          <input
            type="email"
            placeholder="Your Email Address"
            className="email-input"
          />
          <button className="get-started-btn">
            Get Started
          </button>
        </div>
      </div>

      {/* Image Section (to the right, occupying all available space, pushed up) */}
      <div className="image-section">
        <img
          src={Illustration}
          alt="GPT-3 AI face"
          className="image"
        />
      </div>
    </header>
  );
};

export default Header;

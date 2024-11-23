import React from 'react';
import '../css/Logo.css'; 


import GoogleLogo from '../images/google.png';
import SlackLogo from '../images/slack.png';
import AtlassianLogo from '../images/atlassian.png';
import DropboxLogo from '../images/dropbox.png';
import ShopifyLogo from '../images/shopify.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={GoogleLogo} alt="Google Logo" className="logo" />
      <img src={SlackLogo} alt="Slack Logo" className="logo" />
      <img src={AtlassianLogo} alt="Atlassian Logo" className="logo" />
      <img src={DropboxLogo} alt="Dropbox Logo" className="logo" />
      <img src={ShopifyLogo} alt="Shopify Logo" className="logo" />
    </div>
  );
};

export default Logo;

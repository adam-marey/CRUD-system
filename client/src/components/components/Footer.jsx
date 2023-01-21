import React from 'react';
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
  return (
    <footer>
      <div>
        <span className="pr-10 cursor-pointer" target="_blank">
          <SocialIcon
            style={{ height: 30, width: 30, marginLeft: '0.5%' }}
            url="https://www.linkedin.com/in/sulaiman-marey/"
            network="linkedin"
            target="_blank"
          />
        </span>
        <span className="pr-2 cursor-pointer">
          <SocialIcon
            style={{ height: 30, width: 30, margin: '0.5%' }}
            url="https://github.com/adam-marey"
            network="github"
            target="_blank"
          />
        </span>
        <span className="pr-2 cursor-pointer">
          <SocialIcon
            style={{ height: 30, width: 30 }}
            url={'mailto:marey119988@gmail.com'}
            network="email"
            target="_blank"
          />
        </span>
        <p>Copyright © EZ-Manage 2023</p>
      </div>
    </footer>
  );
};

export default Footer;

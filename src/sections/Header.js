import {useEffect, useState} from 'react';
import gitcat from '../assets/gitCat.png';
import sunIcon from '../assets/sunIcon.png';
import moonIcon from '../assets/moonIcon.png';

const Header = () => {
  // currentMode when true is lightmode
  // when false is darkMode
  const [currentMode, setCurrentMode] = useState(false);
  
  useEffect(() => {
    document.body.classList.add('light-mode');
  }, []);

  useEffect(() => {
    if (currentMode) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
  })

  return (
    <header>
      <img src={ gitcat } className="github-icon" alt="gitcat" />
      <ul>
        <li><a href="#landing">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><img src={currentMode ? sunIcon : moonIcon} className="color-mode-icon" alt="switch theme" onClick={() => {setCurrentMode(!currentMode)}}/></li>
      </ul>
    </header>
  );
}

export default Header;
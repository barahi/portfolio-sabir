import gitcat from '../assets/gitCat.png';
import landingImg from "../assets/langing.png";
import Card from '../components/card/Card';
const Home = () => {

  const experiencePoints = [
    'Build extensible and reusable UI Components in React for responsive web applications.',
    'Leveraged React Native to extend React UI Components support for mobile.',
    'Build key features of an e-commerce marketplace application.',
    'Wrote tests to increase the test coverage of the backend platform',
    'Used different APIs such Material UI, Chakra UI and Stripe to build products faster'
  ];

  return (
    <>
      <header>
        <img src={ gitcat } alt="gitcat" />
        <ul>
          <li><a href="#landing">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
    <div className="landing">
      <h1>HI! I AM SABIR BARAHI</h1>
      <p>AN EAGER AND ENERGETIC SOFTWARE ENGINEER</p>
      <img src={ landingImg } alt="landingImg" />
    </div>
    
    <div className="about" id='about'>
      <h2>About</h2>
      <p>Ever since learning HTML in middle school, I've been fascinated and 
        and excited to persue a career in Software Engineering. I enjoy building
        Full Stack applications that help other people and learning new technologies.
      </p>
    </div>

    <div className="experience" id="experience">
      <h2>Experience</h2>
      <Card 
      cardName="株式会社DOUZO"
      link="https://corp.douzo.me/"
      points = { experiencePoints }
      />
    </div>

    <div className="projects" id="projects">
      <h2>Projects</h2>
    </div>

    <div className="skills" id="skills">
      <h2>Skills</h2>
    </div>

    <div className="contact" id="contact">
      <h2>Contact</h2>
    </div>
    </>
  )
}

export default Home;

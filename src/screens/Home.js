import Header from '../sections/Header';
import douzo from '../assets/douzo.png';
import reshubImg from '../assets/reshub.jpeg';
import Card from '../components/card/Card';
import { experiencePoints, schoolPoints, reshub } from '../constants/bulletPoints';
import {links} from '../constants/links';
import Landing from '../sections/Landing';
const Home = () => {
  return (
    <>
      <Header />
      <Landing />
    
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
        img= { douzo }
        link= { links.douzo }
        points = { experiencePoints }
      />
      <Card
        cardName="東京デザインテクノロジーセンタ専門学校"
        link={ links.school }
        points= { schoolPoints }
      />
    </div>

    <div className="projects" id="projects">
      <h2>Projects</h2>
      <Card
        cardName="Reshub"
        img={ reshubImg }
        link={ links.reshub }
        points={ reshub }
      />
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

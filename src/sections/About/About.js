import displayImage from '../../assets/me.jpg';
import { japAbout, about } from '../../constants/cardItems';

const About = () => {
  return (
    <div className="about section" id='about'>
      <h2 className="megrim section-title">About</h2>

      <div className="about-content">
        <img src={displayImage} alt="me" className="headshot" />

        <div className="about-text">
          <p>
            { about }
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

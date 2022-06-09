import displayImage from '../../assets/me.jpg';

const About = () => {
  return (
    <div className="about section" id='about'>
      <h2 className="megrim section-title">About</h2>

      <div className="about-content">
        <img src={displayImage} alt="me" className="headshot" />

        <div className="about-text">
          <p>Ever since learning HTML in middle school, I've been fascinated and 
            and excited to persue a career in Software Engineering. I enjoy building
            Full Stack applications that help other people and learning new technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

import Header from '../sections/Header/Header';
import Landing from '../sections/Landing/Landing';
import About from '../sections/About/About';
import Experience from '../sections/Experience/Experience';
import Project from '../sections/Projects/Project';
const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <About />
      <Experience />
      <Project />
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

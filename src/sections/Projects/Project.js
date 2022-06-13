import Card from "../../components/card/Card";
import { japProjectcard } from "../../constants/cardItems";

const Projects = () => {
  return (
  <div className="projects section" id="projects">
      <h2 className="megrim section-title">Projects</h2>
      <Card items={ japProjectcard } />
    </div>
  )
}

export default Projects;


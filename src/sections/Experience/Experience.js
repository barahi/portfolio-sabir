import Card from "../../components/card/Card";
import { japExpCard,expcard } from "../../constants/cardItems";

const Experience = () => {
  
  return (
     <div className="experience section" id="experience">
      <h2 className="megrim section-title">Experience</h2>
      <Card items = { expcard } />
    </div>

 
  )
}

export default Experience


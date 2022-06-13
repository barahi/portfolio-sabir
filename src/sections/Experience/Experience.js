import Card from "../../components/card/Card";
import { japExpCard } from "../../constants/cardItems";

const Experience = () => {
  
  return (
     <div className="experience section" id="experience">
      <h2 className="megrim section-title">Experience</h2>
      <Card items = { japExpCard } />
    </div>

 
  )
}

export default Experience


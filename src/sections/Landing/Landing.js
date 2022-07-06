import landingImg from "../../assets/landing.svg";
import { japLanding, landing } from '../../constants/cardItems';
const Landing =() => {
  return (
    <div className="landing megrim">
      <div className="intro">
        <h1>{ landing.top }</h1>
        <p>{ landing.bot }</p>
      </div>
      <img src={ landingImg } alt="landingImg" className="landing-image" />
    </div>
  );
}

export default Landing;

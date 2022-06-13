import landingImg from "../../assets/landing.svg";
import { japLanding } from '../../constants/cardItems';
const Landing =() => {
  return (
    <div className="landing megrim">
      <div className="intro">
        <h1>{ japLanding.top }</h1>
        <p>{ japLanding.bot }</p>
      </div>
      <img src={ landingImg } alt="landingImg" className="landing-image" />
    </div>
  );
}

export default Landing;

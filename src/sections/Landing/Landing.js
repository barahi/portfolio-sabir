import landingImg from "../../assets/landing.svg";

const Landing =() => {
  return (
    <div className="landing megrim">
      <div className="intro">
        <h1>Hi! I am Sabir Barahi</h1>
        <p>An Eager and Energetic<br/>Software Engineer</p>
      </div>
      <img src={ landingImg } alt="landingImg" className="landing-image" />
    </div>
  );
}

export default Landing;

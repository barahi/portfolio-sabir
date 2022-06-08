import landingImg from "../assets/landing.svg";

const Landing =() => {
  return (
    <div className="landing megrim">
      <p className="intro">
        <h1>Hi! I am Sabir Barahi</h1>
        <p>An Eager and Energetic<br/>Software Engineer</p>
      </p>
      <img src={ landingImg } alt="landingImg" className="landing-image" />
    </div>
  );
}

export default Landing;
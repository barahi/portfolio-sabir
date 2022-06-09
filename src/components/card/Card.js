import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Card = (props) => {
  return (
    <div className="cards">
      <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
        {
          props.items.map(item => (
            <div key={ item.id } className="card">
              <div className="cardTitle">
            <h2>{ item.name }</h2>
            { item.img ? <img src={ item.img } className="cardImg" alt="logo" /> : ''}
            </div>
            <p><a href={ item.link }>{ item.link }</a></p>
            {
              item.points.pts.map((pts, id=item.points.id) => (
                <ul key={id} className="points">
                  <li>{ pts }</li>
                </ul>
              ))
            }
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

export default Card;

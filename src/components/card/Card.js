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
            </div>
            <p className="link"><a href={ item.link }>Click Here for link</a></p>
            {
              item.points.pts.map((pts, id=item.points.id) => (
                <ul key={id} className="points">
                  <li className="list">{ pts }</li>
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

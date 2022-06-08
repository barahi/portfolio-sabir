const Card = (props) => {
  return (
    <>
      <h2><a href={ props.link }>{ props.cardName }</a></h2>
      { props.img ? <img src={ props.img } alt="logo"/> : '' }
      <ul>
        { props.points.map(items => (
          <li>{ items }</li>
        )) }
      </ul>
    </>
  )
}

export default Card;

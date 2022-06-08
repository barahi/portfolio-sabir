const Card = (props) => {
  return (
    <>
      <h2><a href={ props.link }>{ props.cardName }</a></h2>
      <ul>
        { props.points.map(items => (
          <li>{ items }</li>
        )) }
      </ul>
    </>
  )
}

export default Card;

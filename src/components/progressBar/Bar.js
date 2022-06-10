const Bar = (props) => {
    return (
      <div className="progress-bar">
        { props.name }
        <div className="back-bar">
          <div className="upper-bar" style={{ width: props.inView ? props.status : 0 }}>
            { props.status }
          </div>
        </div>
      </div>

    )
}
export default Bar;

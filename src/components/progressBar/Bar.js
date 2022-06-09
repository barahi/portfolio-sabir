const Bar = (props) => {
    return (
      <div className="progress-bar">
        { props.name }
        <div className="back-bar">
          <div className="upper-bar" style={{ width: props.status }}>
            { props.status }
          </div>
        </div>
      </div>

    )
}
export default Bar;

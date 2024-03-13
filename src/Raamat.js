function Raamat(props) {
  return (
    <div className="book">
      <img src={props.image} className="book-image" alt="Raamatu pilt" />
      <div className="book-title-author">
        <p><strong>Raamatu pealkiri:</strong> {props.title}</p>
        <p><strong>Raamatu autor:</strong> {props.author}</p>
      </div>
    </div>
  )
}

export default Raamat;

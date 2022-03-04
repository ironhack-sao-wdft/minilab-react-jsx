function List(props) {
  return (
    <div className="list-group">
      {props.arr.map((element) => {
        return (
          <label className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" value="" />
            {element}
          </label>
        );
      })}
    </div>
  );
}

export default List;

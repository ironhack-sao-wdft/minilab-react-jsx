const tasks = [
  "Fazer compras",
  "Renovar CNH",
  "Pagar contas",
  "Estudar React",
  "Fazer Minilab",
];

function List() {
  return (
      <ul className="list-group">
        {tasks.map((currentTask) => {
          return <li className="list-group-item">
          <input className="form-check-input me-1" type="checkbox"/>
          {currentTask}</li>;
        })}
      </ul>
  );
}

export default List;

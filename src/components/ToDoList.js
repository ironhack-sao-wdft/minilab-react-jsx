function Lista() {
  const tasks = [
    "Fazer compras",
    "Renovar CNH",
    "Pagar contas",
    "Estudar React",
    "Fazer Minilab",
  ];

  return (
    <ul className="list-group">
      {tasks.map((currentElement) => {
        return (
          <li className="list-group-item">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              aria-label="..."
            />
            {currentElement}
          </li>
        );
      })}
    </ul>
  );
}

export default Lista;

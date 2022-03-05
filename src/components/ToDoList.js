const tasks = [
  "Fazer compras",
  "Renovar CNH",
  "Pagar contas",
  "Estudar React",
  "Fazer Minilab",
];

function ToDoList() {
  return (
    <div class="list-group">
      {tasks.map((task) => {
        return (
          <label class="list-group-item">
            <input
              class="form-check-input me-1"
              type="checkbox"
              value=""
            ></input>
            {task}
          </label>
        );
      })}
    </div>
  );
}

export default ToDoList;

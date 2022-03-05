const tasks = [
    "Fazer compras",
    "Renovar CNH",
    "Pagar contas",
    "Estudar React",
    "Fazer Minilab",
  ];

function ToDoList() {
    return (
        <ul className = "list-group">
            {tasks.map((task) => {
                return <li className = "list-group-item">
                    <input className = "form-check-input me-1" type = "checkbox"></input> 
                        {task}</li>;
            })}
        </ul>
    )
}

export default ToDoList;

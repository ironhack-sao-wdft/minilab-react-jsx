function ToDoList() {
    const tasks = [
        "Fazer compras",
        "Renovar CNH",
        "Pagar contas",
     "Estudar React",
        "Fazer Minilab",
    ];
    return (
        <div>
            <ul>
               {tasks.map((currentElement) => {
                   return <li>{currentElement}</li>
                }
                )} 
            </ul>
        </div>
    )          
}

export default ToDoList;
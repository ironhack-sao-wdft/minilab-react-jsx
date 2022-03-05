import "bootstrap/dist/css/bootstrap.min.css";
import EmotionMeterFace from "./EmotionMeter";

import Greetings from "./Greeting";
import Profile from "./Profile";
import ToDoList from "./ToDoList";

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      <small>Interpolação de variáveis</small>
      <Greetings />
      <br></br>
      <small>Imagens</small>
      <hr />
      <Profile />
      <br></br>
      <small>Renderização de listas</small>
      <hr />
      <ToDoList />
      <br></br>
      <small>Renderização condicional</small>
      <hr />
      <EmotionMeterFace />
    </div>
  );
}

export default App;

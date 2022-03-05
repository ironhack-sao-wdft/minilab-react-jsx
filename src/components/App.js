import "bootstrap/dist/css/bootstrap.min.css";

import Greetings from "./Greeting";
import Profile from "./Profile";
import ToDoList from "./ToDoList";
import EmotionMeterFace from "./EmotionMeter";

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      <small>Interpolação de variáveis</small>
      <Greetings />
      <small>Imagens</small>
      <hr />
      <Profile />
      <small>Renderização de listas</small>
      <hr />
      <ToDoList />
      <small>Renderização condicional</small>
      <hr />
      <EmotionMeterFace />
    </div>
  );
}

export default App;

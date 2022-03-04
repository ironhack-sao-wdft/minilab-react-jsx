import "bootstrap/dist/css/bootstrap.min.css";
import PrintName from "./Greeting";
import "bootstrap";
import Card from "./Profile";
import puppy from "../assets/images/puppy.jpg";
import List from "./ToDoList";
import Emote from "./EmotionMeter";
// Não se esqueça de importar os componentes!

const tasks = [
  "Fazer compras",
  "Renovar CNH",
  "Pagar contas",
  "Estudar React",
  "Fazer Minilab",
];

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      {/* Não se esqueça de invocar seus componentes aqui! */}
      <small>Interpolação de variáveis</small>
      <PrintName nome="bruno" />
      <small>Imagens</small>
      <hr />
      <Card img={puppy} />
      <small>Renderização de listas</small>
      <hr />
      <List arr={tasks} />
      <small>Renderização condicional</small>
      <hr />
      <Emote emotion="HAPPY" />
      <Emote emotion="SAD" />
      <Emote emotion="erro" />
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import SayHello from "./Greeting";
import Card from "./Profile";
import List from "./ToDoList";
import Humor from "./EmotionMeter";
// Não se esqueça de importar os componentes!

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      {/* Não se esqueça de invocar seus componentes aqui! */}
      <small>Interpolação de variáveis</small>
      <SayHello />

      <small>Imagens</small>
      <hr />
      <Card />
      <small>Renderização de listas</small>
      <hr />
      <List/>
      <small>Renderização condicional</small>
      <hr />
      <Humor/>
    </div>
  );
}

export default App;

import ListGroup from "./components/ListGroup";
import Contador from "./components/contador";

const municipios = ["Funchal", "Santa Cruz", "Câmara de Lobos", "Ribeira Brava"];

function App() {
  return (
    <div>
      <ListGroup
        items={municipios}
        heading="Lista de Municípios"
        onSelectItem={(item) => alert("Seleccionaste: " + item)}
      />
      <Contador />
    </div>
  );
}

export default App;
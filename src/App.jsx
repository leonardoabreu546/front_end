import ListGroup from "./components/ListGroup";

const municipios = ["Funchal", "Santa Cruz", "Câmara de Lobos", "Ribeira Brava"];

function App() {
  return (
    <div>
      <ListGroup items={municipios} heading="Lista de Municípios" />
    </div>
  );
}

export default App;
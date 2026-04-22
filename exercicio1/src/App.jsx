import ListGroup from "./components/ListGroup";

const municipios = ["Funchal", "Santa Cruz", "Câmara de Lobos", "Ribeira Brava"];

function App() {
  return (
    <div>
      <ListGroup
        items={municipios}
        heading="Lista de Municípios"
        onSelectItem={(item) => alert("Seleccionaste: " + item)}
      />
    </div>
  );
}

export default App;
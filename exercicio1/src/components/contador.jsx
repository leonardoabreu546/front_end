import { useState } from "react";

function Contador() {
  const [valor, setValor] = useState(0);

  return (
    <div className="container text-center mt-5">
      <div className="card p-4 shadow-sm">
        <h1 className="mb-3">Contador: {valor}</h1>
        <button
          className="btn btn-primary"
          onClick={() => setValor(valor + 1)}
        >
          Clica aqui
        </button>
      </div>
    </div>
  );
}

export default Contador;
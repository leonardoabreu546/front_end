import { useState } from "react";

function Contador () {
    const [valor, setValor] = useState(0)
    
    return(
        <div>
            <h1>Contador: {valor}</h1>
            <button onClick={() => setValor(valor + 1)}>
                Clica aqui
            </button>
        </div>
    )
}

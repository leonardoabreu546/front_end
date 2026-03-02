import { Fragment, useState } from "react";

const items = ["Funchal", "Santa Cruz", "Câmara de Lobos", "Ribeira Brava"];

function ListGroup() {
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <Fragment>
      <h1>Lista de Municípios</h1>
      {items.length === 0 ? (
        <p>Não há itens na lista.</p>
      ) : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              key={item}
              className={
                selectedItem === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => setSelectedItem(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}

export default ListGroup;
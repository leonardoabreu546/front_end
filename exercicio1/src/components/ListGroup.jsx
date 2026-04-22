import { Fragment, useState } from "react";

function ListGroup({ items, heading, onSelectItem }) {
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <div className="container mt-4">
      <h1 className="mb-3">{heading}</h1>

      {items.length === 0 ? (
        <div className="alert alert-warning">
          Não há itens na lista.
        </div>
      ) : (
        <ul className="list-group shadow-sm">
          {items.map((item, index) => (
            <li
              key={item}
              className={
                selectedItem === index
                  ? "list-group-item active"
                  : "list-group-item list-group-item-action"
              }
              onClick={() => {
                setSelectedItem(index);
                onSelectItem(item);
              }}
              style={{ cursor: "pointer" }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListGroup;
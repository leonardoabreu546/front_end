import { Fragment, useState } from "react";

function ListGroup({ items, heading, onSelectItem }) {
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
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
              onClick={() => {
                setSelectedItem(index);
                onSelectItem(item);
              }}
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
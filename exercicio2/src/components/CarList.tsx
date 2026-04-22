import cars from "../cars.json";

function CarList() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Lugares</th>
          <th>Matrícula</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <tr key={car.plate}>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.seats}</td>
            <td>{car.plate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CarList;
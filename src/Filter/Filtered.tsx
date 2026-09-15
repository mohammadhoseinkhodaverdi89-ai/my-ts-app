import { BMWcol2026 } from "../DataCars/Data";

interface FilteredProps {
  search: string;
  models: string;
  minYear: string;
  maxYear: string;
  sort: string;
}

function Filtered({
  search,
  models,
  minYear,
  maxYear,
  sort,
} : FilteredProps) {
  const filteredCars = BMWcol2026
    .filter((car) => {
      const matchSearch = car.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchModel =
        models === "" || car.name === models;

      const matchYear =
        (minYear === "" || car.year >= Number(minYear)) &&
        (maxYear === "" || car.year <= Number(maxYear));

      return matchSearch && matchModel && matchYear;
    })
    .sort((a, b) => {
      if (sort === "low-high") {
        return a.price - b.price;
      }

      if (sort === "high-low") {
        return b.price - a.price;
      }

      return 0;
    });

  return (
    <div>
      {filteredCars.map((car) => (
        <div key={car.id}>
          <h2>{car.name}</h2>
          <p>{car.year}</p>
          <p>{car.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Filtered;
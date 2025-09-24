import CarsList from "@/components/template/CarsList";
import carsData from "@/data/carsData";

function FilteredCars({ params }) {
  const { slug } = params;

  const [min, max] = slug.map(Number);

  const filteredData = carsData.filter(
    (item) => item.price > min && item.price < max
  );

  if (!filteredData.length) return <h3>Not Found</h3>;
  return <CarsList data={filteredData} />;
}

export default FilteredCars;

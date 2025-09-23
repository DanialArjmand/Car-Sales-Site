import CarsList from "@/components/template/CarsList";
import carsData from "@/data/carsData";

function Hatchback() {
  const cars = carsData.filter((car) => car.category === "hatchback");
  return <CarsList data={cars} />;
}

export default Hatchback;

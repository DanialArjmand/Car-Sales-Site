import CarsList from "@/components/template/CarsList";
import carsData from "@/data/carsData";

function Sport() {
  const cars = carsData.filter((car) => car.category === "sport");
  return <CarsList data={cars} />;
}

export default Sport
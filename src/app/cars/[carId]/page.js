import CarsData from "../../../data/carsData";
import { notFound } from "next/navigation";

function CarDetail({ params }) {
  const { carId } = params;
  const carDetails = CarsData.find((car) => car.id === Number(carId));

  if (!carDetails) {
    return notFound();
  }

  return (
    <div>
      <h1>{carDetails.name}</h1>
      <p>Model: {carDetails.model}</p>
      <p>Year: {carDetails.year}</p>
    </div>
  );
}

export default CarDetail;

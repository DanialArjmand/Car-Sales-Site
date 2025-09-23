import CarsDetails from "../../../components/template/CarDetails";
import CarsData from "../../../data/carsData";
import { notFound } from "next/navigation";

function CarDetail({ params }) {
  const { carId } = params;
  const carDetails = CarsData.find((car) => car.id === Number(carId));

  if (!carDetails) {
    return notFound();
  }

  return <CarsDetails {...carDetails} />;
}

export default CarDetail;

import CarsPage from "../../components/template/CarsPage"
import carsData from "../../data/carsData";

function Details() {
    console.log("Details page rendered");
  return (
    <div>
      <CarsPage data={carsData} />
    </div>
  );
}

export default Details;

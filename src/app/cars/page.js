import Categories from "@/components/module/Categories";
import CarsPage from "../../components/template/CarsPage";
import carsData from "../../data/carsData";

function Details() {
  console.log("Details page rendered");
  return (
    <div>
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}

export default Details;

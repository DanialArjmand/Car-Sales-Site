import styles from "./Categories.module.css";
import Link from "next/link";
import Suv from "../icons/Suv";
import Sedan from "../icons/Sedan";
import Hatchback from "../icons/Hatchback";
import Sport from "../icons/Sport";

function Categories() {
  return (
    <div className={styles.container}>
      <Link href="/categories/sedan">
        <div>
          <p>Sedan</p>
          <Sedan />
        </div>
      </Link>
      <Link href="/categories/suv">
      <div>
        <p>SUV</p>
        <Suv />
      </div>
      </Link>
      
      <div>
        <p>Hatchback</p>
        <Hatchback />
      </div>
      <div>
        <p>Sport</p>
        <Sport />
      </div>
    </div>
  );
}

export default Categories;

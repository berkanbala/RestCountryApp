import { useEffect, useState } from "react";
import { ICountry } from "../../../common/models/country";
import styles from "./home.module.scss";
import Country from "../../../pages/country/country";

export default function Home() {
  const [theCountries, setTheCountries] = useState<ICountry[]>([]);

  console.log(theCountries);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/all`)
      .then((response) => response.json())
      .then((data) => setTheCountries(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {theCountries?.map((country: ICountry, index: number) => (
          <Country key={index} country={country} />
        ))}
      </div>
    </div>
  );
}

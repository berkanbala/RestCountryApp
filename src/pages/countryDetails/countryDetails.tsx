import { useEffect, useState } from "react";
import { ICountry } from "../../common/models/country";
import { useParams } from "react-router";
import styles from "./countryDetails.module.scss";

export default function CountryDetails() {
  const [country, setCountry] = useState<ICountry>({} as ICountry);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/name/${id}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [id]);

  console.log(id);

  return (
    <div className={styles.container}>
      <div className={styles.countryCard}>
        <div className={styles.countryFlag}>
          <img src={country?.flags?.png} alt="countryImage" />
        </div>
        <div className={styles.countryData}>
          <h3>{country?.name?.common}</h3>
          <span>Population:{country?.population}</span>
          <span>Region:{country?.region}</span>
          <span>Capital:{country?.capital}</span>
        </div>
      </div>
    </div>
  );
}

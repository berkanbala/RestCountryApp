import { useNavigate } from "react-router-dom";
import styles from "./country.module.scss";

export default function Country(props: Props) {
  const { country } = props;
  const navigate = useNavigate();
  const handleClick = () => navigate(`/${country.name.common}`);

  return (
    <div className={styles.container} onClick={() => handleClick()}>
      <div className={styles.countryCard}>
        <div className={styles.countryFlag}>
          <img src={country.flags.png} alt="countryImage" />
        </div>

        <div className={styles.countryData}>
          <h3> {country.name.common} </h3>
          <h6>Population: {country.population} </h6>
          <h6>Region: {country.region} </h6>
          <h6>Capital: {country.capital} </h6>
        </div>
      </div>
    </div>
  );
}

interface Props {
  country: {
    name: {
      common: string;
    };
    alpha3Code: string;
    capital: string;
    subregion: string;
    region: string;
    population: number;
    borders?: string[];
    nativeName: string;
    currencies: {
      code: string;
      name: string;
      symbol: string;
    };
    languages: {
      iso639_1: string;
      iso639_2: string;
      name: string;
      nativeName: string;
    };
    flags: {
      svg: string;
      png: string;
    };
  };
}

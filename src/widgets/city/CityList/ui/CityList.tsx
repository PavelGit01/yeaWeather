import { ReactNode } from "react";
import { LikedButton, WeatherFetcher } from "@/feautures/weather";
import { CityCard } from "@/entities/city";
import { City } from "@/shared/types";
import styles from "./styles.module.css";

interface Props {
  cityList: City[];
  emptyComponent: ReactNode;
}

const CityList = ({ cityList, emptyComponent }: Props) => {
  return (
    <section className={styles.sliderContainer}>
      {cityList.length > 0 ? (
        <ul className={styles.cardList}>
          {cityList.map(({ name, id }) => (
            <CityList.Item key={id} name={name} id={id} />
          ))}
        </ul>
      ) : (
        emptyComponent
      )}
    </section>
  );
};

export default CityList;

CityList.Item = ({ name, id }: City) => {
  return (
    <li>
      <WeatherFetcher
        name={name}
        type="card"
        render={(data) => (
          <CityCard
            type="card"
            name={name}
            likedButton={<LikedButton name={name} id={id} />}
            weatherData={data}
          />
        )}
      />
    </li>
  );
};

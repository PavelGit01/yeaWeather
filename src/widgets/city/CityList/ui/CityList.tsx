import { CityCard } from "@/entities/city";
import { City } from "@/shared/types";
import styles from "./styles.module.css";

type Props = {
  cityList: City[];
  emptyText: string;
};

const CityList: React.FC<Props> = ({ cityList, emptyText }) => {
  return (
    <section className={styles.sliderContainer}>
      {cityList.length > 0 ? (
        <>
          {cityList.map(({ cityName, id }) => (
            <CityCard type="card" key={id} cityName={cityName} />
          ))}
        </>
      ) : (
        <h3 className={styles.emptyFavoriteList}>{emptyText}</h3>
      )}
    </section>
  );
};

export default CityList;

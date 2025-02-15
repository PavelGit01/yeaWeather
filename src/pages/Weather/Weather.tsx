import { LocationWeather } from "@/feautures/weatherSearch";
import { CityList } from "@/widgets";
import { useAppSelector } from "@/app/appStore";
import styles from "./styles.module.css";

const Weather = () => {
  const savedCities = useAppSelector((state) => state.favorites.savedCities);

  return (
    <div className={styles.container}>
      <LocationWeather />
      <CityList
        cityList={savedCities}
        emptyText="Список избранных городов пуст."
      />
    </div>
  );
};
export default Weather;

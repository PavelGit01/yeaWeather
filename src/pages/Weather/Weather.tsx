import { useAppSelector } from "@/app/appStore";
import { CityList, LocationWeather } from "@/widgets";
import { EmptyComponent } from "@/shared/ui";
import styles from "./styles.module.css";

const Weather = () => {
  const savedCities = useAppSelector((state) => state.favorites.savedCities);

  return (
    <div className={styles.container}>
      <LocationWeather />
      <CityList
        cityList={savedCities}
        emptyComponent={
          <EmptyComponent>Список избранного пуст.</EmptyComponent>
        }
      />
    </div>
  );
};
export default Weather;

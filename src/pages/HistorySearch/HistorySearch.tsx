import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { CityList } from "@/widgets";
import { Button } from "@/shared/ui";
import { removeHistoryCities } from "@/feautures/weatherSearch/city/history/api/historySlice";
import styles from "./styles.module.css";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { City } from "@/shared/types";

const WeatherHistory = () => {
  const historyCities = useAppSelector((state) => state.history.historyCities);

  console.log(historyCities);

  const [_, setLocal] = useLocalStorage<[] | City>("history");

  const dispatch = useAppDispatch();

  const handleRemoveHistory = () => {
    dispatch(removeHistoryCities());
    setLocal([]);
  };

  return (
    <div className={styles.container}>
      <Button onClick={handleRemoveHistory}>Очистить историю поиска.</Button>
      <CityList
        cityList={historyCities}
        emptyText="Вы пока ничего не искали."
      />
    </div>
  );
};

export default WeatherHistory;

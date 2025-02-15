import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { CityList } from "@/widgets";
import { Button } from "@/shared/ui";
import { removeHistoryCities } from "@/feautures/weatherSearch/city/history/api/historySlice";
import styles from "./styles.module.css";

const WeatherHistory = () => {
  const historyCities = useAppSelector((state) => state.history.historyCities);

  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <Button onClick={() => dispatch(removeHistoryCities())}>
        Очистить историю поиска.
      </Button>
      <CityList
        cityList={historyCities}
        emptyText="Вы пока ничего не искали."
      />
    </div>
  );
};

export default WeatherHistory;

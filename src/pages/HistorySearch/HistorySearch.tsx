import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { CityList } from "@/widgets";
import { removeHistoryCities } from "@/entities/weather/history/api/historySlice";
import { EmptyComponent } from "@/shared/ui";
import styles from "./styles.module.css";

const WeatherHistory = () => {
  const historyCities = useAppSelector((state) => state.history.historyCities);

  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <button
        onClick={() => dispatch(removeHistoryCities())}
        className={styles.resetButton}
      >
        Очистить историю поиска
      </button>
      <CityList
        cityList={historyCities}
        emptyComponent={<EmptyComponent>Список поиска пуст.</EmptyComponent>}
      />
    </div>
  );
};

export default WeatherHistory;

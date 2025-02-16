import { useGetWeatherQuery } from "@/feautures/weatherSearch";
import { CardContainer } from "@/shared/ui";
import { memo, useEffect } from "react";
import { CityNameInfo } from "./CityNameInfo";
import { CityTempInfo } from "./CityTempInfo";
import { CityExtraInfo } from "./CityExtraInfo";
import { CircleLoader } from "@/shared/loaders";
import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { addHistoryCity } from "@/feautures/weatherSearch/city/history/api/historySlice";
import styles from "./styles.module.css";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { City } from "@/shared/types";

type Props = {
  cityName: string;
  type?: "card" | "banner";
};

const CityCard: React.FC<Props> = memo(({ cityName, type = "card" }) => {
  const { data, isLoading, isError, error, isSuccess } =
    useGetWeatherQuery(cityName);

  const dispatch = useAppDispatch();

  const [_, setLocalStorage] = useLocalStorage<[] | City>("history");

  const historyCity = useAppSelector((state) => state.history.historyCities);

  useEffect(() => {
    if (isSuccess && type === "banner") {
      dispatch(addHistoryCity({ id: data.id, cityName }));

      setLocalStorage([
        { id: data.id, cityName },
        ...historyCity.filter((city) => city.id !== data.id),
      ]);
    }
  }, [data, cityName]);

  if (isLoading)
    return (
      <CardContainer type={type}>
        <CircleLoader />
      </CardContainer>
    );

  if (isError || !data) {
    let errorMessage = "Произошла ошибка при загрузке данных...";

    if (error && "status" in error) {
      if (error.status === 404) {
        errorMessage = "Город не найден!";
      }
    }

    return (
      <CardContainer type={type} className={styles.error}>
        {errorMessage}
      </CardContainer>
    );
  }

  return (
    <CardContainer type={type}>
      <CityNameInfo cityName={cityName} id={data.id} />
      <CityTempInfo
        temp={data.main.temp}
        icon={data.weather[0].icon}
        windSpeed={data.wind.speed}
      />
      <CityExtraInfo
        coord={data.coord}
        main={data.main}
        visibility={data.visibility}
      />
    </CardContainer>
  );
});

export default CityCard;

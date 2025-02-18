import { useAppDispatch } from "@/app/appStore";
import { useGetWeatherQuery } from "@/entities/weather/api/api";
import { addHistoryCity } from "@/entities/weather/history/api/historySlice";
import { CardContainer } from "@/shared/ui";
import { CircleLoader } from "@/shared/loaders";
import { ReactNode, useEffect } from "react";
import styles from "./styles.module.css";

interface Props {
  name: string;
  type?: "card" | "banner";
  render: (data: any) => ReactNode;
}

const WeatherFetcher = ({ name, type = "card", render }: Props) => {
  const { data, isLoading, isError, isSuccess } = useGetWeatherQuery(name);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (type === "banner" && isSuccess) {
      dispatch(addHistoryCity({ name, id: data.id }));
    }
  }, [name, data]);

  if (isLoading)
    return (
      <CardContainer type={type}>
        <CircleLoader />
      </CardContainer>
    );

  if (isError || !data)
    return (
      <CardContainer type={type} className={styles.error}>
        Город не найден!
      </CardContainer>
    );

  return render(data);
};

export default WeatherFetcher;

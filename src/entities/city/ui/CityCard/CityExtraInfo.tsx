import styles from "./styles.module.css";
import { Weather } from "@/shared/types";

interface Props extends Pick<Weather, "coord" | "visibility" | "main"> {}

export const CityExtraInfo = ({ coord, main, visibility }: Props) => {
  return (
    <div className={styles.cityExtraInfo}>
      <p>Видимость: {visibility / 1000} км.</p>
      <p>Влажность: {main.humidity}%</p>
      <p>
        Координаты: {coord.lat} {coord.lon}
      </p>
    </div>
  );
};

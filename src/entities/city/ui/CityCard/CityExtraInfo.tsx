import React from "react";
import styles from "./styles.module.css";
import { Weather } from "@/shared/types";

type Props = Pick<Weather, "coord" | "visibility" | "main">;

export const CityExtraInfo: React.FC<Props> = ({ coord, main, visibility }) => {
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

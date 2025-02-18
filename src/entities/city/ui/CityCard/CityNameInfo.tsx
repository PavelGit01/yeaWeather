import { LuMapPin } from "react-icons/lu";
import styles from "./styles.module.css";
import { ReactNode } from "react";
interface Props {
  cityName: string;
  likedButton: ReactNode;
}

export const CityNameInfo = ({ cityName, likedButton }: Props) => {
  const formattedCityName =
    cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

  return (
    <div className={styles.cityNameInfo}>
      <p>
        {formattedCityName} <LuMapPin />
      </p>
      {likedButton}
    </div>
  );
};

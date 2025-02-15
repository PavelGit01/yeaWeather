import { LuMapPin } from "react-icons/lu";
import styles from "./styles.module.css";
import { LikedButton } from "@/shared/ui";
import { City } from "@/shared/types";

export const CityNameInfo: React.FC<City> = ({ cityName, id }) => {
  
  const formattedCityName =
    cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

  return (
    <div className={styles.cityNameInfo}>
      <p>
        {formattedCityName} <LuMapPin />
      </p>
      <LikedButton id={id} cityName={cityName} />
    </div>
  );
};

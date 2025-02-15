import { PiThermometerThin } from "react-icons/pi";
import { LiaWindSolid } from "react-icons/lia";
import styles from "./styles.module.css";
import { Img } from "@/shared/ui";

type Props = {
  temp: number;
  icon: string;
  windSpeed: number;
};

export const CityTempInfo: React.FC<Props> = ({ temp, icon, windSpeed }) => {
  return (
    <div className={styles.cityTempInfo}>
      <p>
        <LiaWindSolid /> {windSpeed}m/s
      </p>
      <p className={styles.infoTemperature}>
        <PiThermometerThin />
        {temp.toFixed(1)} &#8451;
      </p>
      <Img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
};

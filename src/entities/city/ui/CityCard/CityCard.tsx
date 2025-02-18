import { CardContainer } from "@/shared/ui";
import { memo, ReactNode } from "react";
import { CityNameInfo } from "./CityNameInfo";
import { CityTempInfo } from "./CityTempInfo";
import { CityExtraInfo } from "./CityExtraInfo";
import { Weather } from "@/shared/types";

interface Props {
  name: string;
  type?: "card" | "banner";
  likedButton: ReactNode;
  weatherData: Weather;
}

const CityCard = memo(
  ({ name, type = "card", likedButton, weatherData }: Props) => {
    return (
      <CardContainer type={type}>
        <CityNameInfo cityName={name} likedButton={likedButton} />
        <CityTempInfo
          temp={weatherData.main.temp}
          icon={weatherData.weather[0].icon}
          windSpeed={weatherData.wind.speed}
        />
        <CityExtraInfo
          coord={weatherData.coord}
          main={weatherData.main}
          visibility={weatherData.visibility}
        />
      </CardContainer>
    );
  }
);

export default CityCard;

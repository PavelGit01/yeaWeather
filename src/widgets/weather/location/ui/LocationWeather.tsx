import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LikedButton, WeatherFetcher } from "@/feautures/weather";
import { CityCard } from "@/entities/city";
import useDebounce from "@/shared/hooks/useDebounce";
import { CardContainer } from "@/shared/ui";
import styles from "./styles.module.css";

const LocationWeather = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [location, setLocation] = useState<string>(searchParams.get("q") || "");

  const debouncedLocation = useDebounce(location, 1000);

  const queryLocation = searchParams.get("q") || "";

  const handleChange = (nameCity: string) => {
    setLocation(nameCity.trim());
  };

  useEffect(() => {
    if (queryLocation) {
      setLocation(queryLocation);
    }
  }, []);

  useEffect(() => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);

      if (location) {
        newParams.set("q", location);
      } else {
        newParams.delete("q");
      }

      return newParams.toString();
    });
  }, [debouncedLocation]);

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Search location..."
        className={styles.input}
        value={location}
        onChange={(e) => handleChange(e.target.value)}
      />

      {debouncedLocation ? (
        <WeatherFetcher
          key={debouncedLocation}
          name={debouncedLocation}
          type="banner"
          render={(data) => {
            return (
              <CityCard
                type="banner"
                name={debouncedLocation}
                likedButton={
                  <LikedButton name={debouncedLocation} id={data.id} />
                }
                weatherData={data}
              />
            );
          }}
        />
      ) : (
        <CardContainer type="banner" className={styles.empty}>
          Введите название города.
        </CardContainer>
      )}
    </section>
  );
};

export default LocationWeather;

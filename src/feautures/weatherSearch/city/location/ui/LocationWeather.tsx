import { CardContainer, Input } from "@/shared/ui";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import useDebounce from "@/shared/hooks/useDebounce";
import { useSearchParams } from "react-router-dom";
import { CityCard } from "@/entities/city";

const LocationWeather: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [location, setLocation] = useState<string>(searchParams.get("q") || "");

  const debouncedLocation = useDebounce(location, 1000);

  const [firstRender, setFirstRender] = useState(true);

  const handleChange = (nameCity: string) => {
    setLocation(nameCity.trim());
  };

  useEffect(() => {
    const searchQuery = searchParams.get("q");

    if (searchQuery) {
      setLocation(searchQuery);

      setSearchParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams);

        newParams.set("q", searchQuery);

        return newParams;
      });
    }

    setFirstRender(false);
  }, []);

  useEffect(() => {
    if (!firstRender) {
      setSearchParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams);

        if (location) {
          newParams.set("q", location);
        } else {
          newParams.delete("q");
        }

        return newParams.toString();
      });
    }
  }, [debouncedLocation]);

  return (
    <section className={styles.container}>
      <Input
        type="search"
        placeholder="Search location..."
        className={styles.input}
        value={location}
        onChange={(e) => handleChange(e.target.value)}
      />

      {debouncedLocation ? (
        <CityCard
          type="banner"
          key={debouncedLocation}
          cityName={debouncedLocation}
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

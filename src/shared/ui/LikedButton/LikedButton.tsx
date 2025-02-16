import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import styles from "./styles.module.css";
import {
  addSavedCity,
  removeSavedCity,
} from "@/feautures/weatherSearch/city/favorites/api/favoritesSlice";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import { City } from "@/shared/types";

const LikedButton = ({ id, cityName }: City) => {
  const savedCities = useAppSelector((state) => state.favorites.savedCities);

  const [_, setLocal] = useLocalStorage<[] | City>("favorites");

  const dispatch = useAppDispatch();

  const isFavorite = savedCities.find((city) => city.id === id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeSavedCity(id));
      setLocal(savedCities.filter((city) => city.id !== id));
    } else {
      dispatch(addSavedCity({ id, cityName }));
      setLocal([...savedCities, { id, cityName }]);
    }
  };

  return (
    <button className={styles.likedButton} onClick={handleClick}>
      {isFavorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
    </button>
  );
};

export default LikedButton;

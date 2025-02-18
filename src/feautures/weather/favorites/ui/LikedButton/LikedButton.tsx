import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { City } from "@/shared/types";
import {
  addSavedCity,
  removeSavedCity,
} from "@/entities/weather/favorites/api/favoritesSlice";
import styles from "./styles.module.css";

const LikedButton = ({ id, name }: City) => {
  const savedCities = useAppSelector((state) => state.favorites.savedCities);

  const dispatch = useAppDispatch();

  const isFavorite = savedCities.find((city) => city.id === id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeSavedCity(id));
    } else {
      dispatch(addSavedCity({ id, name }));
    }
  };

  return (
    <button className={styles.likedButton} onClick={handleClick}>
      {isFavorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
    </button>
  );
};

export default LikedButton;

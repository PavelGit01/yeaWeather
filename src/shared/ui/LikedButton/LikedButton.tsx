import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import styles from "./styles.module.css";
import {
  addSavedCity,
  removeSavedCity,
} from "@/feautures/weatherSearch/city/favorites/api/favoritesSlice";

type Props = {
  id: number;
  cityName: string;
};

const LikedButton = ({ id, cityName }: Props) => {
  const savedCities = useAppSelector((state) => state.favorites.savedCities);

  const dispatch = useAppDispatch();

  const isFavorite = savedCities.find((city) => city.id === id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeSavedCity(id));
    } else {
      dispatch(addSavedCity({ id, cityName }));
    }
  };

  return (
    <button className={styles.likedButton} onClick={handleClick}>
      {isFavorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
    </button>
  );
};

export default LikedButton;

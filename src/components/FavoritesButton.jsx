import { MdFavorite } from "react-icons/md";
import NavButton from "./NavButton";

const FavoritesButton = () => {
  return (
    <NavButton name={"Favoritos"} icon={<MdFavorite />} toLink={"favorites"} />
  );
};

export default FavoritesButton;

import { FavoritesTable } from '../components/favoritesTable/';
import { useFavorites } from '../context/FavoritesContext';

export const Favorites = () => {
  const { favorites } = useFavorites();
  return (
    <div className=" flex flex-col items-center h-200 ">
      <h1 className="mt-20  md:text-4xl sm:text-xl xs:text-lg text-cyan-700  underline">
        Mis libros favoritos
      </h1>
      <FavoritesTable favorites={favorites} />
    </div>
  );
};

export default Favorites;

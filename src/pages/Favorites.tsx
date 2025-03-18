import { FiLoader } from 'react-icons/fi';
import { FavoritesTable } from '../components/favoritesTable/';
import { useFavoritesStore } from '../store/favoritesStores';

export const Favorites = () => {
  const { favorites, isLoading } = useFavoritesStore();
  return (
    <div className=" flex flex-col items-center min-h-[700px]">
      <h1 className="mt-20  md:text-4xl sm:text-xl xs:text-lg text-cyan-700  underline">
        Mis libros favoritos
      </h1>{' '}
      {isLoading ? (
        <div className="flex justify-center  mt-20">
          <FiLoader
            className="animate-spin"
            size={48}
            color="rgb(255, 100, 103)"
          />
        </div>
      ) : (
        <FavoritesTable favorites={favorites} />
      )}
    </div>
  );
};

export default Favorites;

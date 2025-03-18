import { Book, FavoritesBooks } from '../../types';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { Button } from '../button/Button';
import { useFavoritesStore } from '../../store/favoritesStores';
import { FiLoader } from 'react-icons/fi';

export const Card = ({ book }: { book: Book }) => {
  const { favorites, toggleFavorite, isLoading } = useFavoritesStore();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const isFavorite = favorites.some(
    (fav: FavoritesBooks) => fav.url === book.url
  );

  const synopsis =
    'Una aventura épica sobre la lucha entre el bien y el mal, donde héroes y villanos se enfrentan en un mundo mágico.';
  const userRating = (Math.random() * 4 + 1).toFixed(1);
  let icon;

  if (isLoading) {
    icon = (
      <FiLoader className="animate-spin" size={24} color="rgb(255, 100, 103)" />
    );
  } else if (isFavorite) {
    icon = (
      <IoHeart data-testid="heart-icon" color="rgb(255, 100, 103)" size={30} />
    );
  } else {
    icon = (
      <IoHeartOutline
        data-testid="heart-outline-icon"
        color="rgb(255, 100, 103)"
        size={30}
      />
    );
  }
  return (
    <div
      className="flex flex-col items-center
     rounded-md bg-blue-300 border-blue-400 border-r-4 border-b-4 py-10 px-8 backdrop-opacity-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)]  "
    >
      <div className="flex flex-col rounded-md bg-gray-100 h-30 w-full"></div>
      <h1 className="text-xl mt-4 font-bold underline">{book?.name}</h1>

      <div className="flex flex-col items-start mt-4">
        <h2 className="font-bold ">{book?.authors?.join(', ')}</h2>

        <h5 className="text-xs mt-4">País: {book?.country}</h5>
        <h5 className="text-xs">Páginas: {book?.numberOfPages}</h5>
        <h5 className="text-xs">Editorial: {book?.publisher}</h5>
        <p className="text-xs max-w-[250px] max-h-[48px] overflow-hidden text-ellipsis my-2">
          {synopsis}
        </p>
        <h5 className="text-xs ">
          Fecha de publicación:{' '}
          {book.released ? formatDate(new Date(book.released)) : 'Desconocida'}
        </h5>
        <h5 className="text-xs mt-2">
          Calificación de usuarios: {userRating} /5
        </h5>
      </div>

      <Button
        className=" bg-blue-300 ml-auto mt-4 "
        onClick={() => toggleFavorite(book)}
      >
        <>{icon}</>
      </Button>
    </div>
  );
};

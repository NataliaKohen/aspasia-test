import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="  text-white  bg-indigo-400 h-16">
      <nav className="flex items-center w-full  h-16">
        <Link to="/" className="px-10">
          <h4>Inicio</h4>
        </Link>
        <Link to="/favoritos" className="px-10">
          <h4>Favs</h4>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

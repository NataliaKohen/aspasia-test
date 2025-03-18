import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { BookProvider } from './context/BookContext';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <BookProvider>
      <FavoritesProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/books/:id" element={<Detail />} />
              <Route path="/favoritos" element={<Favorites />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </FavoritesProvider>
    </BookProvider>
  );
}

export default App;

import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { BookProvider } from './context/BookContext';
import Detail from './pages/Detail';
import Favs from './pages/Favs';

function App() {
  return (
    <BookProvider>
      <Router>
        <Routes>
          {/* <Route element={<Layout />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/detalle" element={<Detail />} />
          <Route path="/favoritos" element={<Favs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}

export default App;

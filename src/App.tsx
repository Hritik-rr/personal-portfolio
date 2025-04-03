import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CVPage from './pages/CVPage';
import BooksPage from './pages/BooksPage';
import PostsPage from './pages/PostsPage';
import ListsPage from './pages/ListsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/lists" element={<ListsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

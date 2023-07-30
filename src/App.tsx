import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Nav from '@/components/Nav/Nav';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

const Layout =() => {
  return(
    <div>
      <Nav />

      <Outlet />
    </div>
  )
}

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/:movieId" element={<DetailPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;

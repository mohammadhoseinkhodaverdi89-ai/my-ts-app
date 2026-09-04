import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Login from './Header/Login/Login';
import Featured from './Featured/Featured';
import Swiper from './Swiper/Swiper';
import Detail from './Swiper/Detail/Detail';

function App() {
  return (
 <div className="relative min-h-screen bg-black text-white overflow-hidden">
  

  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Featured />
            <Swiper />
          </>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  </BrowserRouter>

</div>
  );
}

export default App;
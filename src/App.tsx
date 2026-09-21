import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Login from './Header/Login/Login';
import Featured from './Featured/Featured';
import Swiper from './Swiper/Swiper';
import Detail from './Swiper/Detail/Detail';
import Cart from './Cart/Cart';
import Protect from './ZustandStore/Protect/Protect';
function App() {
  return (
 <div className="relative min-h-screen bg-black text-white overflow-hidden">
  

  <BrowserRouter>
    <Routes>
      <RouteProtect
            <Header />
            <Featured />
            <Swiper />
          </>
        }
      />
      <Route path="/login" element={<Login/>} />
      <Route path="/detail/:id" element={
        <Protect></Protect>
      } />
      <Route path='/cart' element={<Cart />}/>

    </Routes>
  </BrowserRouter>

</div>
  );
}

export default App;
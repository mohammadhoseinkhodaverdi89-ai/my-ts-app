import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header/Header';
import Login from './Header/Login/Login';
import Featured from './Featured/Featured';
import Swiper from './Swiper/Swiper';
import Detail from './Swiper/Detail/Detail';
import Cart from './Cart/Cart';
import Protect from './ZustandStore/Protect/Protect';
import Filtered from './Filter/Filtered';
function App() {
  const [search, setSearch] = useState<string>("");
  const [models, setModels] = useState<string>("");
  const [minYear, setMinYear] = useState<string>("");
  const [maxYear, setMaxYear] = useState<string>("");
  const [transmission, setTransmission] = useState<string>("");
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">


      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header search={search}
                  setSearch={setSearch}
                  models={models}
                  setModels={setModels}
                  minYear={minYear}
                  setMinYear={setMinYear}
                  maxYear={maxYear}
                  setMaxYear={setMaxYear}
                  transmission={transmission}
                  setTransmission={setTransmission}
                  sort={sort}
                  setSort={setSort} />
                <Featured />
                <Swiper />
                <Filtered />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/detail/:id" element={
            <Protect>
              <Detail />
            </Protect>
          } />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
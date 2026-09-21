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

interface Car {
  id: number;
  name: string;
  details: string;
  photo: string;
  year: number;
  price: number
}

function App() {
  const [search, setSearch] = useState<string>("");
  const [models, setModels] = useState<string>("");
  const [minYear, setMinYear] = useState<string>("");
  const [maxYear, setMaxYear] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);
  const [openBar, setOpenBar] = useState<boolean>(false);
    const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">


      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  search={search}
                  setSearch={setSearch}
                  minYear={minYear}
                  setMinYear={setMinYear}
                  maxYear={maxYear}
                  setMaxYear={setMaxYear}
                  setSort={setSort}
                  sort={sort}
                  onFilter={() => setCounter((prev) => prev + 1)}
                  openBar={openBar}
                  setOpenBar={setOpenBar}
                  filteredCars={filteredCars}
                />
                <Featured />
                <Swiper />
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
          <Route path='/filtered' element={<Filtered search={search} minYear={minYear}
            maxYear={maxYear}
            sort={sort}
            onFilter={() => setCounter((prev) => prev + 1)}
            openBar={openBar}
            setOpenBar={setOpenBar}
            filteredCars={filteredCars}
            setFilteredCars={setFilteredCars}
            />}
          />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
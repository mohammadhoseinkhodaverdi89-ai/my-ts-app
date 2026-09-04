import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Login from './Header/Login/Login';
import Featured from './Featured/Featured';
import Swiper from './Swiper/Swiper';
import Detail from './Swiper/Detail/Detail';

function App() {
  return (
       <div className="relative min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* Fixed Background */}
      <div className="fixed inset-0 -z-10">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,102,179,0.18),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(30,64,175,0.15),transparent_35%),linear-gradient(to_bottom,#020617,#030712,#000000)]" />

        {/* Blue glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute top-[40%] -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

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
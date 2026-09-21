import { BMWcol2026 } from "../DataCars/Data";
import { useState, useTransition, useEffect } from "react";
import Photo from '../Header/Photos/images__1_-removebg-preview.png'
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import type { Car } from "../App";

interface FilteredProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;


  minYear: string;
  setMinYear: React.Dispatch<React.SetStateAction<string>>;

  maxYear: string;
  setMaxYear: React.Dispatch<React.SetStateAction<string>>;

  transmission: string;
  setTransmission: React.Dispatch<React.SetStateAction<string>>;

  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;

  openBar: boolean;
 
  counter : number;
  onFilter:() => void

  setOpenBar: React.Dispatch<React.SetStateAction<boolean>>;

  filteredCars : Car[];
  setFilteredCars : React.Dispatch<React.SetStateAction<Car[]>>;
}


function Filtered({
  search,
  setSearch,
  minYear,
  maxYear,
  setMinYear,
  setMaxYear,
  sort,
  setSort,
  onFilter,
  counter,
  openBar,
  setOpenBar,
  filteredCars,
  setFilteredCars
}: FilteredProps) {
  const [isPending, startTransition] = useTransition();
  const Navigate = useNavigate();
  useEffect(() => {
    startTransition(() => {
      if (
        search === "" &&
        minYear === "" &&
        maxYear === "" &&
        sort === ""
      ) {
        setFilteredCars([]);
        return;
      }
      const result = [...BMWcol2026]
        .filter((car) => {
          const matchSearch = car.name
            .toLowerCase()
            .includes(search.toLowerCase());

          const matchYear =
            (minYear === "" || car.year >= Number(minYear)) &&
            (maxYear === "" || car.year <= Number(maxYear));

          return matchSearch && matchYear;
        })
        .sort((a, b) => {
          if (sort === "low-high") {
            return a.price - b.price;
          }

          if (sort === "high-low") {
            return b.price - a.price;
          }

          return 0;
        });
      setFilteredCars(result)
    })
  }, [counter])

  return (
    <div className="px-3 py-2">
      {isPending && (
        <span>Loading...</span>
      )}
      <header className="relative flex items-center justify-between border-b border-white/10 bg-[#05080d]/90 px-6 py-4 backdrop-blur-md">

        {/* Blue Glow */}
        <div className="pointer-events-none absolute left-10 top-0 h-20 w-32 rounded-full bg-blue-600/10 blur-3xl" />

        {/* Logo */}
        <div className="relative flex items-center gap-3">
          <img
            src={Photo}
            alt="BMW"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10"
          />

          <div>
            <p className="text-sm font-semibold tracking-widest text-white">
              BMW
            </p>

            <p className="text-[10px] tracking-[0.25em] text-gray-500">
              COLLECTION
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2">
        {/* Back Button */}
        <button
          className="
      group
      flex items-center gap-2
      rounded-xl
      border border-white/10
      bg-white/[0.03]
      px-5 py-2
      text-sm font-medium text-gray-300
      backdrop-blur-sm
      transition-all duration-300

      hover:-translate-y-1
      hover:border-blue-500/40
      hover:bg-blue-500/10
      hover:text-white
      hover:shadow-[0_8px_25px_rgba(37,99,235,0.15)]
    "
          onClick={() => Navigate(-1)} >
          <span className="transition-all duration-300 group-hover:-translate-x-1">
            ←
          </span>

          Back
        </button>
        <p className='cursor-pointer transition-colors duration-300' onClick={() => setOpenBar((prev) => !prev)}>{openBar ? <FaBarsStaggered /> : <FaBars />}
          <AnimatePresence>
            {openBar && (
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, y: -140, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -140, x: 300, scale: 0.6 }}
                transition={{ duration: 0.3 }}
                onKeyDown={(e) => { if (e.key === "Enter") {onFilter()}}}
                className='flex flex-col absolute top-20 right-1/2 translate-x-1/2 border border-blue-300 shadow-[1px_2px_12px_1px_rgb(0,0,255)] px-5 py-4 rounded-2xl bg-slate-950/80 gap-5 justify-center max-w-sm '>
                <div className='flex flex-col gap-2 relative'>
                  <div className='flex justify-between items-center'>
                    <label>Search BMW...</label>
                    <button className='text-lg font-bold text-rose-600 active:scale-95 hover:scale-105 transition-all duration-300' onClick={() => setOpenBar((prev) => !prev)}>X</button>
                  </div>

                  <span className='absolute bottom-2 left-2'><IoIosSearch size={18} /></span>
                  <input type="text" className='border-2 border-gray-600 py-1 px-8 rounded-md outline-none hover:ring-blue-600 hover:outline-none ring-1 focus:ring-2 focus:ring-blue-700 ring-transparent transition-all duration-300' placeholder='Search BMW..' value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                  <span>Year</span>
                  <div className='flex flex-row items-center gap-2 justify-between'>
                    <input
                      type="number"
                      placeholder="From"
                      className="w-full rounded-md border-2 border-gray-600 px-2 py-1 outline-none ring-1 ring-transparent transition-all duration-300 hover:ring-blue-600 focus:ring-2 focus:ring-blue-700" value={minYear} onChange={(e) => setMinYear(e.target.value)}
                    />

                    <input
                      type="number"
                      placeholder="To"
                      className="w-full rounded-md border-2 border-gray-600 px-2 py-1 outline-none ring-1 ring-transparent transition-all duration-300 hover:ring-blue-600 focus:ring-2 focus:ring-blue-700" value={maxYear} onChange={(e) => setMaxYear(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm text-zinc-400"> Sort By </label>
                  <select className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-white outline-none focus:border-blue-500" value={sort} onChange={(e) => setSort(e.target.value)}> <option value="">Newest</option> <option value="low-high">Price: Low to High</option> <option value="high-low">Price: High to Low</option> </select>
                </div>
                <div className='flex justify-between w-full gap-2'>
                  <button className='w-[100%] py-1 bg-blue-600 font-semibold rounded-sm hover:bg-blue-600/90 transition-all duration-300' onClick={onFilter}>Submit</button>
                  <button className='w-[40%] py-1 bg-gray-600 font-semibold rounded-sm hover:bg-gray-600/90 transition-all duration-300 text-sm'>Reset Filter</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </p>
       </div>
      </header>

      {filteredCars.map((car) => (
        <div
          key={car.id}
          className="group w-full max-w-sm overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl mt-4"
        >
          <div className="overflow-hidden">
            <img
              src={car.photo}
              alt={car.name}
              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <h2 className="mb-2 text-2xl font-bold text-white">
              {car.name}
            </h2>

            <p className="mb-4 line-clamp-2 text-sm leading-6 text-slate-400">
              {car.details}
            </p>

            <div className="mb-4 flex items-center justify-between border-t border-slate-700 pt-4">
              <span className="text-sm text-slate-400">
                Year
              </span>

              <span className="font-semibold text-white">
                {car.year}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">
                Price
              </span>

              <span className="text-xl font-bold text-blue-400">
                ${car.price.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Filtered;
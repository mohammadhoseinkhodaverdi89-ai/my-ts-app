import { SedanCars } from '../DataCars/Data';
import { useParams } from 'react-router-dom';
import useCartStore from '../ZustandStore/Zustand';
function More() {
    const { category } = useParams()
    const add = useCartStore((state) => state.addToCart)
    const filteredCar = SedanCars.filter((item) => (
        item.category === category
    ))
    return (
        <div className='w-full min-h-full px-4 md:px-8 lg:px-12 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredCar.map((item) => (
                <div key={item.id} className='w-full h-full overflow-hidden border rounded-2xl border-gray-800 bg-[#07111f] hover:hover:border-blue-500/50 hover:shadow-[0px_10px_40px_rgb(0,129,255,0.15)] hover:-translate-y-2 transition-all duration-300'>
                    <div className='overflow-hidden h-56'>
                        <img src={item.photo} alt="photo" className='w-full h-full object-cover hover:scale-105 transition-all duration-300' />
                    </div>
                    <div className='p-5'>
                        <div className='flex flex-row justify-between items-center'>
                            <h1 className='font-semibold text-xl'>{item.name}</h1>
                            <p className='text-gray-400'>{item.year}</p>
                        </div>
                        <p className='text-sm text-gray-500 mt-3'>{item.details}</p>
                        <div className='flex flex-row justify-between items-center mt-3'>
                            <p className='font-bold'>${item.price.toLocaleString()}</p>
                            <button onClick={() => add(item)} className='rounded-lg border border-blue-500/40 bg-blue-500/10 
                                   px-4 py-2 text-sm text-blue-400 
                                   transition-all duration-300
                                   hover:bg-blue-500 hover:text-white active:scale-90'>ADD</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default More
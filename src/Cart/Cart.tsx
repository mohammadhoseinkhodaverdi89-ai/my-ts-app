import useCartStore from "../ZustandStore/Zustand";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function Cart() {
    const Cars = useCartStore((state) => state.cartItem)
    const Delete = useCartStore((state) => state.removeCart)
    const Increaments = useCartStore((state) => state.increament)
    const Deacrement = useCartStore((state) => state.decreament)
    const nav = useNavigate();
    if (Cars.length === 0) {
        return (
            <div className="min-h-screen w-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center max-w-lg h-full items-center gap-5">
                    <p className="border p-5 rounded-full border-blue-300 bg-blue-600/20"><IoCartOutline size={56} /></p>
                    <div className="flex flex-col h-full w-full items-center gap-2">
                        <h1 className="font-light text-[20px] text-neutral-400 tracking-wider">Your garage is empty</h1>
                        <p className="font-montserrat text-[14px]">There are no items in your cart yet. Discover our collection to get started.</p>
                        <button
                            onClick={() => nav(-1)}
                            className="mt-2 flex items-center gap-2 text-lg uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300 py-2 px-6 border border-neutral-800 rounded-sm hover:border-neutral-600 bg-neutral-900/40"
                        >
                            <span>←</span> Back
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            {Cars.map((item) => (
                <div className="max-w-full h-full flex px-5 py-3 flex-row justify-between items-center border rounded-2xl mx-5 my-3">
                    <div className="w-full h-full overflow-hidden">
                        <img src={item.photo} alt="photo" className="rounded-lg w-2/3 h-50 object-cover"/>
                    </div>
                    <div className="flex flex-col justify-center">
                    <h1 className="text-[27px] font-montserrat">{item.name}</h1>
                    <p className="text-lg font-normal">{item.details}</p>
                    <p>{item.year}</p>
                    <p>{item.price}</p>
                    <button onClick={() => Delete(item.id)}>Delete</button>
                    <div className="flex flex-row items-center gap-2 border w-fit px-3 py-0.5 rounded-sm bg-gray-100/20 border-gray-800">
                    <button onClick={() => Increaments(item.id)} className="text-lg">+</button>
                    <p className="text-lg">{item.quantity}</p>
                    <button onClick={() => Deacrement(item.id)} className="text-lg">-</button>
                    </div>
                     </div>
                </div>
            ))}
        </div>
    )
}
export default Cart
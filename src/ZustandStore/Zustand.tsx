import { create } from 'zustand';

interface Car {
    id: number;
    name: string;
    details: string;
    photo: string;
    year: number;
    price: number
}

interface CarItems extends Car {
    quantity: number
}

interface CartStore {
    cartItem: CarItems[];

    addToCart: (car: Car) => void;
    removeCart: (id: number) => void;
    increament: (id: number) => void;
    decreament: (id: number) => void;
}

const useCartStore = create<CartStore>((set) => ({
    cartItem: [],
    addToCart: (car) =>
        set((state) => {
            const existingItem = state.cartItem.find((item) => (
                item.id === car.id
            ))
            if (existingItem) {
                return {
                    cartItem: state.cartItem.map((item) => (
                        item.id === car.id ? { ...item, quantity: item.quantity + 1 } : item
                    ))
                }
            }
            return {
                cartItem: [...state.cartItem, {
                    ...car,
                    quantity: 1,
                }]
            }
        }),
    removeCart: (id) =>
        set((state) => ({
            cartItem: state.cartItem.filter((item) => item.id !== id),
        })),
    increament: (id) =>
        set((state) => ({
            cartItem: state.cartItem.map((item) => (
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            ))
        })),
    decreament: (id) =>
        set((state) => ({
            cartItem: state.cartItem.map((item) => (
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            ))
        }))
}))
export default useCartStore
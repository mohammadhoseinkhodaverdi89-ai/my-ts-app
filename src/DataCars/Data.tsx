import Photo1 from './Photo/chris-saran-iXHHhfwJD1E-unsplash.jpg'
import Photo2 from './Photo/devon-janse-van-rensburg-2h3UGhof_fU-unsplash.jpg'
import Photo3 from './Photo/jakob-rosen-dC748GtzSgg-unsplash.jpg'
import Photo4 from './Photo/josh-berquist-_4sWbzH5fp8-unsplash.jpg'
import Photo5 from './Photo/serjan-midili-yedYysaveC8-unsplash.jpg'
import Photo6 from './Photo/zox-shilpi-g2MKxO7Pywc-unsplash.jpg'
import Photo7 from './Photo/devon-janse-van-rensburg-2h3UGhof_fU-unsplash.jpg'
import Photo8 from './Photo/martin-katler-e3gVocvZ-g0-unsplash.jpg'
import Photo9 from './Photo/alain-gehri-w77TcvuhtWE-unsplash.jpg'
import Photos1 from './SEDAN/2021_bmw_3-series_sedan_330e_fq_oem_1_1600.avif';
import Photos2 from './SEDAN/images (3).jpg'
import Photos3 from './SEDAN/2023-bmw-m340i-xdrive-182-640f4380f300b.avif'
import Photos4 from './SEDAN/images (4).jpg'
import Photos5 from './SEDAN/2024-bmw-5-series-plug-in.webp'
import Photos6 from './SEDAN/images (5).jpg'
import Photos7 from './SEDAN/images (6).jpg'
import Photos8 from './SEDAN/image-placeholder-title.avif'
import Photos9 from './SEDAN/2026_bmw_m5_sedan_base_fq_oem_16_1600.avif'
import Photos10 from './SUV/images (7).jpg'
import Photos11 from './SUV/updated-2022-bmw-x3-imagined-looks-like-a-slightly-smaller-x5-147151_1.jpg'
import Photos12 from './SUV/2022_bmw_x4_4dr-suv_m40i_fq_oem_2_1600.avif'
import Photos13 from './SUV/images (8).jpg'
import Photos14 from './SUV/images (9).jpg'
import Photos15 from './SUV/2024-bmw-x5-xdrive-50e-796-659d5427d6862.avif'
import Photos16 from './SUV/images (10).jpg'
import Photos17 from './SUV/images (11).jpg'
import Photos18 from './SUV/images (12).jpg'
import Photos19 from './COUPE/GoJNe.jpg'
import Photos20 from './COUPE/2022-bmw-m20i-04-1641420758.avif'
import Photos21 from './COUPE/2023_bmw_4-series-gran-coupe_sedan_430i-xdrive_fq_oem_1_1280.jpg'
import Photos22 from './COUPE/2023-bmw-m440i-xdrive-coupe-102-1673295432.avif'
import Photos23 from './COUPE/images (13).jpg'
import Photos24 from './COUPE/2023-bmw-8-series-03-1643213321.avif'
import Photos25 from './COUPE/2025-bmw-m2-122-693af3ccd5ca5.avif'
import Photos26 from './COUPE/images (14).jpg'
import Photos27 from './COUPE/images (15).jpg'
import Photos28 from './ELECTRIC/bmw_i4_edrive40_photos-28.jpg'
import Photos29 from './ELECTRIC/images (7).jpg'
import Photos30 from './ELECTRIC/images (8).jpg'
import Photos31 from './ELECTRIC/images (9).jpg'
import Photos32 from './ELECTRIC/Screen-Shot-2022-01-21-at-3.38.43-PM.avif'
import Photos33 from './ELECTRIC/2024 BMW i5 eDrive40.avif'
import Photos34 from './ELECTRIC/images (10).jpg'
import Photos35 from './ELECTRIC/images (11).jpg'
import Photos36 from './ELECTRIC/images (12).jpg'
interface Bmw {
    id: number;
    name: string;
    details: string;
    photo: string;
    year: number;
    price: number;
    category?: string;
}
export const BMWcol2026: Bmw[] = [
    {
        id: 1,
        name: "BMW M5 Competition",
        details: "High-performance luxury sedan with powerful M engineering.",
        photo: Photo1,
        year: 2026,
        price: 200000000
    },
    {
        id: 2,
        name: "BMW M4 Competition",
        details: "A sporty coupe combining aggressive design with dynamic performance.",
        photo: Photo2,
        year: 2026,
        price: 223500000
    },
    {
        id: 3,
        name: "BMW i4 M50",
        details: "Fully electric performance sedan with instant acceleration and M power.",
        photo: Photo3,
        year: 2026,
        price: 7860000000
    },
    {
        id: 4,
        name: "BMW XM Label",
        details: "High-performance luxury SUV with bold styling and electrified power.",
        photo: Photo4,
        year: 2026,
        price: 2320000000
    },
    {
        id: 5,
        name: "BMW i7 xDrive60",
        details: "Premium electric sedan focused on comfort, technology, and luxury.",
        photo: Photo5,
        year: 2026,
        price: 2232300000
    },
    {
        id: 6,
        name: "BMW X5 M Competition",
        details: "Powerful performance SUV built for luxury, speed, and everyday driving.",
        photo: Photo6,
        year: 2026,
        price: 12400000
    },
    {
        id: 7,
        name: "BMW iX3",
        details: "Next-generation electric SUV with modern design and advanced technology.",
        photo: Photo7,
        year: 2026,
        price: 125600000
    },
    {
        id: 8,
        name: "BMW Z4 Roadster",
        details: "Open-top sports car designed for an exciting and engaging drive.",
        photo: Photo8,
        year: 2026,
        price: 267800000
    },
    {
        id: 9,
        name: "BMW M2",
        details: "Compact M car delivering agile handling and pure driving excitement.",
        photo: Photo9,
        year: 2026,
        price: 24000000
    }
];
export const AllCarts: Bmw[] = [
    {
        id: 1,
        name: "BMW M5 Competition",
        details: "High-performance luxury sedan with powerful M engineering.",
        photo: Photo1,
        year: 2026,
        price: 200000000
    },
    {
        id: 2,
        name: "BMW M4 Competition",
        details: "A sporty coupe combining aggressive design with dynamic performance.",
        photo: Photo2,
        year: 2026,
        price: 223500000
    },
    {
        id: 3,
        name: "BMW i4 M50",
        details: "Fully electric performance sedan with instant acceleration and M power.",
        photo: Photo3,
        year: 2026,
        price: 7860000000
    },
    {
        id: 4,
        name: "BMW XM Label",
        details: "High-performance luxury SUV with bold styling and electrified power.",
        photo: Photo4,
        year: 2026,
        price: 2320000000
    },
    {
        id: 5,
        name: "BMW i7 xDrive60",
        details: "Premium electric sedan focused on comfort, technology, and luxury.",
        photo: Photo5,
        year: 2026,
        price: 2232300000
    },
    {
        id: 6,
        name: "BMW X5 M Competition",
        details: "Powerful performance SUV built for luxury, speed, and everyday driving.",
        photo: Photo6,
        year: 2026,
        price: 12400000
    },
    {
        id: 7,
        name: "BMW iX3",
        details: "Next-generation electric SUV with modern design and advanced technology.",
        photo: Photo7,
        year: 2026,
        price: 125600000
    },
    {
        id: 8,
        name: "BMW Z4 Roadster",
        details: "Open-top sports car designed for an exciting and engaging drive.",
        photo: Photo8,
        year: 2026,
        price: 267800000
    },
    {
        id: 9,
        name: "BMW M2",
        details: "Compact M car delivering agile handling and pure driving excitement.",
        photo: Photo9,
        year: 2026,
        price: 24000000
    },
        {
        id: 112,
        name: "BMW 330i Sedan",
        year: 2022,
        price: 42000,
        details: "2.0L Turbo • 255 HP • Automatic • RWD",
        photo: Photos1,
        category: "SEDAN",
    },
    {
        id: 212,
        name: "BMW 530i Sedan",
        year: 2022,
        price: 49000,
        details: "2.0L Turbo • 255 HP • Automatic • RWD",
        photo: Photos2,
        category: "SEDAN",
    },
    {
        id: 312,
        name: "BMW M340i Sedan",
        year: 2023,
        price: 57000,
        details: "3.0L Turbo I6 • 386 HP • Automatic • AWD",
        photo: Photos3,
        category: "SEDAN",
    },
    {
        id: 412,
        name: "BMW 540i xDrive Sedan",
        year: 2023,
        price: 65000,
        details: "3.0L Turbo I6 • 375 HP • Automatic • AWD",
        photo: Photos4,
        category: "SEDAN",
    },
    {
        id: 512,
        name: "BMW 550e xDrive Sedan",
        year: 2024,
        price: 73000,
        details: "3.0L Turbo Hybrid • 483 HP • Automatic • AWD",
        photo: Photos5,
        category: "SEDAN",
    },
    {
        id: 612,
        name: "BMW 740i Sedan",
        year: 2024,
        price: 89000,
        details: "3.0L Turbo I6 • 375 HP • Automatic • RWD",
        photo: Photos6,
        category: "SEDAN",
    },
    {
        id: 712,
        name: "BMW M3 Sedan",
        year: 2025,
        price: 79000,
        details: "3.0L Twin-Turbo I6 • 473 HP • Manual • RWD",
        photo: Photos7,
        category: "SEDAN",
    },
    {
        id: 812,
        name: "BMW 530i Sedan",
        year: 2025,
        price: 60500,
        details: "2.0L Turbo • 255 HP • Automatic • RWD",
        photo: Photos8,
        category: "SEDAN",
    },
    {
        id: 912,
        name: "BMW M5 Sedan",
        year: 2026,
        price: 123300,
        details: "4.4L Twin-Turbo V8 Hybrid • 717 HP • Automatic • AWD",
        photo: Photos9,
        category: "SEDAN",
    },
    {
        id: 10,
        name: "BMW X1 xDrive28i",
        year: 2022,
        price: 39000,
        details: "2.0L Turbo • 241 HP • Automatic • AWD",
        photo: Photos10,
        category: "SUV",
    },
    {
        id: 11,
        name: "BMW X3 xDrive30i",
        year: 2022,
        price: 47000,
        details: "2.0L Turbo • 248 HP • Automatic • AWD",
        photo: Photos11,
        category: "SUV",
    },
    {
        id: 12,
        name: "BMW X4 xDrive30i",
        year: 2023,
        price: 52000,
        details: "2.0L Turbo • 248 HP • Automatic • AWD",
        photo: Photos12,
        category: "SUV",
    },
    {
        id: 13,
        name: "BMW X5 xDrive40i",
        year: 2023,
        price: 68000,
        details: "3.0L Turbo I6 • 375 HP • Automatic • AWD",
        photo: Photos13,
        category: "SUV",
    },
    {
        id: 14,
        name: "BMW X6 xDrive40i",
        year: 2024,
        price: 73000,
        details: "3.0L Turbo I6 • 375 HP • Automatic • AWD",
        photo: Photos14,
        category: "SUV",
    },
    {
        id: 15,
        name: "BMW X5 xDrive50e",
        year: 2024,
        price: 82000,
        details: "3.0L Turbo Hybrid • 483 HP • Automatic • AWD",
        photo: Photos15,
        category: "SUV",
    },
    {
        id: 16,
        name: "BMW X3 M50",
        year: 2025,
        price: 65000,
        details: "3.0L Turbo I6 • 393 HP • Automatic • AWD",
        photo: Photos16,
        category: "SUV",
    },
    {
        id: 17,
        name: "BMW X6 M",
        year: 2025,
        price: 130000,
        details: "4.4L Twin-Turbo V8 • 617 HP • Automatic • AWD",
        photo: Photos17,
        category: "SUV",
    },
    {
        id: 18,
        name: "BMW XM",
        year: 2026,
        price: 160000,
        details: "4.4L Twin-Turbo V8 Hybrid • 644 HP • Automatic • AWD",
        photo: Photos18,
        category: "SUV",
    },
    {
        id: 19,
        name: "BMW 230i Coupe",
        year: 2022,
        price: 37000,
        details: "2.0L Turbo • 255 HP • Automatic • RWD",
        photo: Photos19,
        category: "COUPE",
    },
    {
        id: 20,
        name: "BMW M240i Coupe",
        year: 2022,
        price: 49000,
        details: "3.0L Turbo I6 • 382 HP • Automatic • AWD",
        photo: Photos20,
        category: "COUPE",
    },
    {
        id: 21,
        name: "BMW 430i Coupe",
        year: 2023,
        price: 48000,
        details: "2.0L Turbo • 255 HP • Automatic • RWD",
        photo: Photos21,
        category: "COUPE",
    },
    {
        id: 22,
        name: "BMW M440i Coupe",
        year: 2023,
        price: 62000,
        details: "3.0L Turbo I6 • 382 HP • Automatic • AWD",
        photo: Photos22,
        category: "COUPE",
    },
    {
        id: 23,
        name: "BMW 840i Coupe",
        year: 2024,
        price: 91000,
        details: "3.0L Turbo I6 • 375 HP • Automatic • RWD",
        photo: Photos23,
        category: "COUPE",
    },
    {
        id: 24,
        name: "BMW M850i xDrive Coupe",
        year: 2024,
        price: 110000,
        details: "4.4L Twin-Turbo V8 • 523 HP • Automatic • AWD",
        photo: Photos24,
        category: "COUPE",
    },
    {
        id: 25,
        name: "BMW M2 Coupe",
        year: 2025,
        price: 65000,
        details: "3.0L Twin-Turbo I6 • 473 HP • Manual • RWD",
        photo: Photos25,
        category: "COUPE",
    },
    {
        id: 26,
        name: "BMW M4 Competition Coupe",
        year: 2025,
        price: 85000,
        details: "3.0L Twin-Turbo I6 • 503 HP • Automatic • RWD",
        photo: Photos26,
        category: "COUPE",
    },
    {
        id: 27,
        name: "BMW M8 Competition Coupe",
        year: 2026,
        price: 140000,
        details: "4.4L Twin-Turbo V8 • 617 HP • Automatic • AWD",
        photo: Photos27,
        category: "COUPE",
    },
        {
        id: 28,
        name: "BMW i4 eDrive40",
        year: 2022,
        price: 56000,
        details: "Electric • 335 HP • Automatic • RWD",
        photo: Photos28,
        category: "ELECTRIC",
    },
    {
        id: 29,
        name: "BMW i4 M50",
        year: 2022,
        price: 68000,
        details: "Dual Motor • 536 HP • Automatic • AWD",
        photo: Photos29,
        category: "ELECTRIC",
    },
    {
        id: 30,
        name: "BMW iX xDrive50",
        year: 2023,
        price: 85000,
        details: "Dual Motor • 516 HP • Automatic • AWD",
        photo: Photos30,
        category: "ELECTRIC",
    },
    {
        id: 31,
        name: "BMW i7 xDrive60",
        year: 2023,
        price: 120000,
        details: "Dual Motor • 536 HP • Automatic • AWD",
        photo: Photos31,
        category: "ELECTRIC",
    },
    {
        id: 32,
        name: "BMW iX M60",
        year: 2024,
        price: 112000,
        details: "Dual Motor • 610 HP • Automatic • AWD",
        photo: Photos32,
        category: "ELECTRIC",
    },
    {
        id: 33,
        name: "BMW i5 eDrive40",
        year: 2024,
        price: 67000,
        details: "Electric • 335 HP • Automatic • RWD",
        photo: Photos33,
        category: "ELECTRIC",
    },
    {
        id: 34,
        name: "BMW i5 M60",
        year: 2025,
        price: 85000,
        details: "Dual Motor • 593 HP • Automatic • AWD",
        photo: Photos34,
        category: "ELECTRIC",
    },
    {
        id: 35,
        name: "BMW i7 M70",
        year: 2025,
        price: 168000,
        details: "Dual Motor • 650 HP • Automatic • AWD",
        photo: Photos35,
        category: "ELECTRIC",
    },
    {
        id: 36,
        name: "BMW iX3",
        year: 2026,
        price: 75000,
        details: "Dual Motor • 500+ HP • Automatic • AWD",
        photo: Photos36,
        category: "ELECTRIC",
    },

]
export const SedanCars: Bmw[] = [
    {
        id: 1,
        name: "BMW 330i Sedan",
        year: 2022,
        price: 42000,
        details: "2.0L Turbo • 255 HP • Automatic • RWD",
        photo: Photos1,
        category: "SEDAN",
    },
    {
        id: 2,
        name: "BMW 530i Sedan",
        year: 2022,
        price: 49000,
        details: "2.0L Turbo • 255 HP • Automatic • RWD",
        photo: Photos2,
        category: "SEDAN",
    },
    {
        id: 3,
        name: "BMW M340i Sedan",
        year: 2023,
        price: 57000,
        details: "3.0L Turbo I6 • 386 HP • Automatic • AWD",
        photo: Photos3,
        category: "SEDAN",
    },
    {
        id: 4,
        name: "BMW 540i xDrive Sedan",
        year: 2023,
        price: 65000,
        details: "3.0L Turbo I6 • 375 HP • Automatic • AWD",
        photo: Photos4,
        category: "SEDAN",
    },
    {
        id: 5,
        name: "BMW 550e xDrive Sedan",
        year: 2024,
        price: 73000,
        details: "3.0L Turbo Hybrid • 483 HP • Automatic • AWD",
        photo: Photos5,
        category: "SEDAN",
    },
    {
        id: 6,
        name: "BMW 740i Sedan",
        year: 2024,
        price: 89000,
        details: "3.0L Turbo I6 • 375 HP • Automatic • RWD",
        photo: Photos6,
        category: "SEDAN",
    },
    {
        id: 7,
        name: "BMW M3 Sedan",
        year: 2025,
        price: 79000,
        details: "3.0L Twin-Turbo I6 • 473 HP • Manual • RWD",
        photo: Photos7,
        category: "SEDAN",
    },
    {
        id: 8,
        name: "BMW 530i Sedan",
        year: 2025,
        price: 60500,
        details: "2.0L Turbo • 255 HP • Automatic • RWD",
        photo: Photos8,
        category: "SEDAN",
    },
    {
        id: 9,
        name: "BMW M5 Sedan",
        year: 2026,
        price: 123300,
        details: "4.4L Twin-Turbo V8 Hybrid • 717 HP • Automatic • AWD",
        photo: Photos9,
        category: "SEDAN",
    },
    {
        id: 10,
        name: "BMW X1 xDrive28i",
        year: 2022,
        price: 39000,
        details: "2.0L Turbo • 241 HP • Automatic • AWD",
        photo: Photos10,
        category: "SUV",
    },
    {
        id: 11,
        name: "BMW X3 xDrive30i",
        year: 2022,
        price: 47000,
        details: "2.0L Turbo • 248 HP • Automatic • AWD",
        photo: Photos11,
        category: "SUV",
    },
    {
        id: 12,
        name: "BMW X4 xDrive30i",
        year: 2023,
        price: 52000,
        details: "2.0L Turbo • 248 HP • Automatic • AWD",
        photo: Photos12,
        category: "SUV",
    },
    {
        id: 13,
        name: "BMW X5 xDrive40i",
        year: 2023,
        price: 68000,
        details: "3.0L Turbo I6 • 375 HP • Automatic • AWD",
        photo: Photos13,
        category: "SUV",
    },
    {
        id: 14,
        name: "BMW X6 xDrive40i",
        year: 2024,
        price: 73000,
        details: "3.0L Turbo I6 • 375 HP • Automatic • AWD",
        photo: Photos14,
        category: "SUV",
    },
    {
        id: 15,
        name: "BMW X5 xDrive50e",
        year: 2024,
        price: 82000,
        details: "3.0L Turbo Hybrid • 483 HP • Automatic • AWD",
        photo: Photos15,
        category: "SUV",
    },
    {
        id: 16,
        name: "BMW X3 M50",
        year: 2025,
        price: 65000,
        details: "3.0L Turbo I6 • 393 HP • Automatic • AWD",
        photo: Photos16,
        category: "SUV",
    },
    {
        id: 17,
        name: "BMW X6 M",
        year: 2025,
        price: 130000,
        details: "4.4L Twin-Turbo V8 • 617 HP • Automatic • AWD",
        photo: Photos17,
        category: "SUV",
    },
    {
        id: 18,
        name: "BMW XM",
        year: 2026,
        price: 160000,
        details: "4.4L Twin-Turbo V8 Hybrid • 644 HP • Automatic • AWD",
        photo: Photos18,
        category: "SUV",
    },
    {
        id: 19,
        name: "BMW 230i Coupe",
        year: 2022,
        price: 37000,
        details: "2.0L Turbo • 255 HP • Automatic • RWD",
        photo: Photos19,
        category: "COUPE",
    },
    {
        id: 20,
        name: "BMW M240i Coupe",
        year: 2022,
        price: 49000,
        details: "3.0L Turbo I6 • 382 HP • Automatic • AWD",
        photo: Photos20,
        category: "COUPE",
    },
    {
        id: 21,
        name: "BMW 430i Coupe",
        year: 2023,
        price: 48000,
        details: "2.0L Turbo • 255 HP • Automatic • RWD",
        photo: Photos21,
        category: "COUPE",
    },
    {
        id: 22,
        name: "BMW M440i Coupe",
        year: 2023,
        price: 62000,
        details: "3.0L Turbo I6 • 382 HP • Automatic • AWD",
        photo: Photos22,
        category: "COUPE",
    },
    {
        id: 23,
        name: "BMW 840i Coupe",
        year: 2024,
        price: 91000,
        details: "3.0L Turbo I6 • 375 HP • Automatic • RWD",
        photo: Photos23,
        category: "COUPE",
    },
    {
        id: 24,
        name: "BMW M850i xDrive Coupe",
        year: 2024,
        price: 110000,
        details: "4.4L Twin-Turbo V8 • 523 HP • Automatic • AWD",
        photo: Photos24,
        category: "COUPE",
    },
    {
        id: 25,
        name: "BMW M2 Coupe",
        year: 2025,
        price: 65000,
        details: "3.0L Twin-Turbo I6 • 473 HP • Manual • RWD",
        photo: Photos25,
        category: "COUPE",
    },
    {
        id: 26,
        name: "BMW M4 Competition Coupe",
        year: 2025,
        price: 85000,
        details: "3.0L Twin-Turbo I6 • 503 HP • Automatic • RWD",
        photo: Photos26,
        category: "COUPE",
    },
    {
        id: 27,
        name: "BMW M8 Competition Coupe",
        year: 2026,
        price: 140000,
        details: "4.4L Twin-Turbo V8 • 617 HP • Automatic • AWD",
        photo: Photos27,
        category: "COUPE",
    },
        {
        id: 28,
        name: "BMW i4 eDrive40",
        year: 2022,
        price: 56000,
        details: "Electric • 335 HP • Automatic • RWD",
        photo: Photos28,
        category: "ELECTRIC",
    },
    {
        id: 29,
        name: "BMW i4 M50",
        year: 2022,
        price: 68000,
        details: "Dual Motor • 536 HP • Automatic • AWD",
        photo: Photos29,
        category: "ELECTRIC",
    },
    {
        id: 30,
        name: "BMW iX xDrive50",
        year: 2023,
        price: 85000,
        details: "Dual Motor • 516 HP • Automatic • AWD",
        photo: Photos30,
        category: "ELECTRIC",
    },
    {
        id: 31,
        name: "BMW i7 xDrive60",
        year: 2023,
        price: 120000,
        details: "Dual Motor • 536 HP • Automatic • AWD",
        photo: Photos31,
        category: "ELECTRIC",
    },
    {
        id: 32,
        name: "BMW iX M60",
        year: 2024,
        price: 112000,
        details: "Dual Motor • 610 HP • Automatic • AWD",
        photo: Photos32,
        category: "ELECTRIC",
    },
    {
        id: 33,
        name: "BMW i5 eDrive40",
        year: 2024,
        price: 67000,
        details: "Electric • 335 HP • Automatic • RWD",
        photo: Photos33,
        category: "ELECTRIC",
    },
    {
        id: 34,
        name: "BMW i5 M60",
        year: 2025,
        price: 85000,
        details: "Dual Motor • 593 HP • Automatic • AWD",
        photo: Photos34,
        category: "ELECTRIC",
    },
    {
        id: 35,
        name: "BMW i7 M70",
        year: 2025,
        price: 168000,
        details: "Dual Motor • 650 HP • Automatic • AWD",
        photo: Photos35,
        category: "ELECTRIC",
    },
    {
        id: 36,
        name: "BMW iX3",
        year: 2026,
        price: 75000,
        details: "Dual Motor • 500+ HP • Automatic • AWD",
        photo: Photos36,
        category: "ELECTRIC",
    },

];
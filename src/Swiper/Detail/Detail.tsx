import { useParams } from "react-router-dom";
import Photo1 from './Photo/Gemini_Generated_Image_e2q6yhe2q6yhe2q6.jpg'
import { IoFlashOutline } from "react-icons/io5";
import { IoMdSpeedometer } from "react-icons/io";
import { PiEngineLight } from "react-icons/pi";
import { TbManualGearbox } from "react-icons/tb";

interface Todo  {
    img : string;
    col : string;
    name: string;
    model : string;
    detail : string;
    info?:string;
    id : number;
}

type RouteParams = {
    id : string;
}

const BmwDetail : Todo[] = [
    {img : Photo1 , col : "2026 collection" , name :  "BMW M5" , model : "competion" , detail : "the ultimate blend op performance and luxury " , info : "awawa" , id : 1 }
]
function Detail() {
  const { id } = useParams<RouteParams>();

  const detail = BmwDetail.find((item) => item.id === Number(id));

  if (!detail) {
    return <div className="p-6 text-white">محصولی پیدا نشد!</div>;
  }

  return (
    <div className="text-white min-h-screen w-full relative overflow-hidden">
      <div className="w-full h-full absolute inset-0">
      <img src={detail.img} alt="photo" className="w-full h-1/2 object-center object-cover"/>
      </div>
      <div className="hidden md:flex md:flex-col h-1/2 top-10 right-4 absolute">
      <div className="flex flex-row items-center">
      <span className="w-[2px] h-4 bg-blue-300 "></span>
        <p className="bg-blue-500/20 text-blue-300 text-[10px] px-2 py-0.5 rounded-sm font-medium text-center">{detail.col}</p>
      </div>
      <h1 className="font-inter text-5xl">{detail.name}</h1>
      <h1 className="font-montserrat text-4xl">{detail.model}</h1>
      <p className="font-medium text-[15px] max-w-70 mt-2.5">{detail.detail}</p>

      <div className="flex flex-row justify-center items-center gap-5 mr-2.5 mt-5">
      <div className="flex flex-row justify-center items-center gap-2">
        <p className="text-lg"><IoFlashOutline /></p>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[12px]">625</p>
          <p className="text-[12px] text-gray-400">HP</p>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center  gap-2">
      <p className="text-lg"><IoMdSpeedometer /></p>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[12px]">3.3s</p>
          <p className="text-[12px] text-gray-400">0-100 km/h </p>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center  gap-2">
      
      <p className="text-lg"><PiEngineLight /></p>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[12px]">4.4L V8</p>
          <p className="text-[12px] text-gray-400">Twin Turbo </p>
        </div>
      </div>

       <div className="flex flex-row justify-center items-center  gap-2">
      <p className="text-lg"><TbManualGearbox /></p>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[12px]">8 speed</p>
          <p className="text-[12px] text-gray-400">M Steptronic</p>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Detail;
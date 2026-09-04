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
      <p className="font-medium text-[15px] max-w-70">{detail.detail}</p>

      <div className="flex flex-row">
      <div className="flex flex-row justify-center items-center">
        <IoFlashOutline />
        <div className="flex flex-col justify-center items-center">
          <p className="text-[10px]">625</p>
          <p>HP</p>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center">
      <IoMdSpeedometer />
        <div className="flex flex-col justify-center items-center">
          <p>3.3s</p>
          <p>0-100 km/h </p>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center">
      <PiEngineLight />
        <div className="flex flex-col justify-center items-center">
          <p>4.4L V8</p>
          <p>Twin Turbo </p>
        </div>
      </div>

       <div className="flex flex-row justify-center items-center">
      <TbManualGearbox />
        <div className="flex flex-col justify-center items-center">
          <p>8 speed</p>
          <p>M Steptronic</p>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Detail;
import { useParams } from "react-router-dom";
import Photo1 from './Photo/Gemini_Generated_Image_e2q6yhe2q6yhe2q6.jpg'
interface Todo  {
    img : string;
    col : string;
    name: string;
    model : string;
    detail : string;
    info : string;
    id : number;
}

type RouteParams = {
    id : string;
}

const BmwDetail : Todo[] = [
    {img : Photo1 , col : "2026 collection" , name :  "BMW M5" , model : "competion" , detail : "dwadawdadadawaw" , info : "awawa" , id : 1 }
]
function Detail() {
  const { id } = useParams<RouteParams>();

  const detail = BmwDetail.find((item) => item.id === Number(id));

  if (!detail) {
    return <div className="p-6 text-white">محصولی پیدا نشد!</div>;
  }

  return (
    <div className="text-white min-h-screen w-full relative">
      <div className="w-full h-full">
      <img src={detail.img} alt="photo" className="w-full h-full object-cover object-center"/>
      </div>
      <div className="absolute translate-y-1/2 top-0 right-0 p-3">
          <p className="bg-blue-500/20 rounded-sm flex justify-center text-blue-300 text-sm">{detail.col}</p>
      <h1>{detail.name}</h1>
      <h1>{detail.model}</h1>
      <p>{detail.detail}</p>
      <p>{detail.info}</p>
      </div>
    </div>
  );
}

export default Detail;
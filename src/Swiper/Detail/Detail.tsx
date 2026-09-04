import { useParams } from "react-router-dom";

interface Todo  {
    id : number;
    name: string;
}

type RouteParams = {
    id : string;
}

const BmwDetail : Todo[] = [
    {id : 1 , name : "hello"},
    {id : 2 , name : "by"}
]
function Dtail() {
  const { id } = useParams<RouteParams>();

  const detail = BmwDetail.find((item) => item.id === Number(id));

  if (!detail) {
    return <div className="p-6 text-white">محصولی پیدا نشد!</div>;
  }

  return (
    <div className="p-6 text-white">
      <h1>کد: {detail.id}</h1>
      <p>نام: {detail.name}</p>
    </div>
  );
}

export default Dtail;
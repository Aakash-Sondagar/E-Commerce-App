import { Link } from "react-router-dom";

const Card = (props) => {
  const data = props?.data;
  return (
    <Link to={`/product/${data?.id}`}>
      <div className="w-72 flex flex-col gap-3 mb-10">
        <div className="w-full h-96 overflow-hidden relative">
          {data?.isNew && (
            <div className=" absolute z-20 top-3 left-3 bg-white text-teal-500 px-3 py-1 font-semibold text-sm">
              New Season
            </div>
          )}
          <img
            src={data?.image1}
            alt=""
            className="w-full h-full object-cover absolute z-10 hover:z-0"
          />
          <img
            src={data?.image2}
            alt=""
            className="w-full h-full object-cover absolute z-0 hover:z-10"
          />
        </div>
        <div className="text-base font-normal">{data?.title}</div>
        <div className="flex gap-5">
          <div className="text-lg font-semibold text-gray-500 line-through">
            ${data?.oldPrice || data?.price + 20}
          </div>
          <div className="text-lg font-semibold">${data?.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

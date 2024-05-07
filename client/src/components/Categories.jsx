import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="flex h-[80vh] gap-3 m-3">
      <div className="flex flex-col gap-y-3 flex-1">
        <div className="flex flex-1 gap-3 relative overflow-hidden">
          <img
            className=" w-full h-full object-cover"
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute h-12 p-3 min-w-24 w-fit m-auto top-0 bottom-0 left-0 right-0 cursor-pointer border-none bg-white uppercase font-semibold">
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="flex flex-1 gap-3 relative overflow-hidden">
          <img
            className=" w-full h-full object-cover"
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute h-12 p-3 min-w-24 w-fit m-auto top-0 bottom-0 left-0 right-0 cursor-pointer border-none bg-white uppercase font-semibold">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 flex-1">
        <div className="flex flex-1 gap-10 relative overflow-hidden">
          <img
            className=" w-full h-full object-cover"
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute h-12 p-3 min-w-24 w-fit m-auto top-0 bottom-0 left-0 right-0 cursor-pointer border-none bg-white uppercase font-semibold">
            <Link className="link" to="/products/1">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 flex-1">
        <div className="flex flex-1 gap-3 relative overflow-hidden">
          <div className="flex flex-col gap-y-3 flex-1">
            <div className="flex flex-1 gap-3 relative overflow-hidden">
              <img
                className=" w-full h-full object-cover"
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button className="absolute h-12 p-3 min-w-24 w-fit m-auto top-0 bottom-0 left-0 right-0 cursor-pointer border-none bg-white uppercase font-semibold">
                <Link className="link" to="/products/1">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 flex-1">
            <div className="flex flex-1 gap-3 relative overflow-hidden">
              <img
                className=" w-full h-full object-cover"
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button className="absolute h-12 p-3 min-w-24 w-fit m-auto top-0 bottom-0 left-0 right-0 cursor-pointer border-none bg-white uppercase font-semibold">
                <Link className="link" to="/products/1">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 gap-10 relative overflow-hidden">
          <img
            className=" w-full h-full object-cover"
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute h-12 p-3 min-w-24 w-fit m-auto top-0 bottom-0 left-0 right-0 cursor-pointer border-none bg-white uppercase font-semibold">
            <Link className="link" to="/products/1">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;

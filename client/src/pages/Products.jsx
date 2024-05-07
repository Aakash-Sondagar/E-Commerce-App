import React from "react";

const Products = () => {
  return (
    <div className="px-8 py-5 flex">
      <div className="flex-1 sticky h-full top-12">
        <div className="mb-5">
          <div className="mb-3 font-semibold text-lg">Product Categories</div>
          <div className="mb-3">
            <input type="checkbox" id="1" value={1} />
            <label className="ml-3" htmlFor="1">
              Shoes
            </label>
          </div>
          <div className="mb-3">
            <input type="checkbox" id="2" value={1} />
            <label className="ml-3" htmlFor="2">
              Shirts
            </label>
          </div>
          <div className="mb-3">
            <input type="checkbox" id="3" value={1} />
            <label className="ml-3" htmlFor="3">
              Coats
            </label>
          </div>
        </div>
        <div className="mb-5">
          <div className="mb-3 font-semibold text-lg">Filter by price</div>
          <div className="mb-3 flex">
            <div className="mr-2">0</div>
            <input type="range" min={0} max={100} />
            <div className="ml-2">1000</div>
          </div>
        </div>
        <div className="mb-5">
          <div className="mb-3 font-semibold text-lg">Sort by</div>
          <div className="mb-3">
            <input type="radio" name="price" id="asc" value={"asc"} />
            <label className="ml-3" htmlFor="asc">
              Price (Lowest First)
            </label>
          </div>
          <div className="mb-3">
            <input type="radio" name="price" id="desc" value={"desc"} />
            <label className="ml-3" htmlFor="desc">
              Price (Highest First)
            </label>
          </div>
        </div>
      </div>
      <div className=" flex-[3]">
        <img
          className=" w-full h-72 object-cover mb-12"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      </div>
    </div>
  );
};

export default Products;

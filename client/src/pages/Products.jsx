import { useState } from "react";
import { useParams } from "react-router-dom";

import List from "../components/List";

const Products = () => {
  const params = useParams();
  const id = parseInt(params?.id);

  const [maxPrice, setMaxPrice] = useState(100);
  const [sort, setSort] = useState(null);

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
            <input
              type="range"
              min={0}
              max={100}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <div className="ml-2">{maxPrice}</div>
          </div>
        </div>
        <div className="mb-5">
          <div className="mb-3 font-semibold text-lg">Sort by</div>
          <div className="mb-3">
            <input
              type="radio"
              name="price"
              id="asc"
              value={"asc"}
              onChange={(e) => setSort(e.target.value)}
            />
            <label className="ml-3" htmlFor="asc">
              Price (Lowest First)
            </label>
          </div>
          <div className="mb-3">
            <input
              type="radio"
              name="price"
              id="desc"
              value={"desc"}
              onChange={(e) => setSort(e.target.value)}
            />
            <label className="ml-3" htmlFor="desc">
              Price (Highest First)
            </label>
          </div>
        </div>
      </div>
      <div className="flex-[3]">
        <img
          className="w-full h-56 object-cover mb-12"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List id={id} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;

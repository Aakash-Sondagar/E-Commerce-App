import Card from "./Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      image1:
        "https://static.zara.net/assets/public/64c3/e521/f6a14fc4ac38/6f5f907349a7/image-landscape-fill-0fcc0dca-374e-4964-835c-08d6c06fb958-default_0.jpg?ts=1714335419519&amp;w=1920",
      image2:
        "https://static.zara.net/assets/public/ac0f/47c6/599e44fe87ed/321bd49902b7/image-landscape-fill-55978639-3f60-4bf2-a33f-82172c0e5daa-default_0.jpg?ts=1714335517565&amp;w=1920",
      title: "Product 1",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      image1:
        "https://static.zara.net/assets/public/64c3/e521/f6a14fc4ac38/6f5f907349a7/image-landscape-fill-0fcc0dca-374e-4964-835c-08d6c06fb958-default_0.jpg?ts=1714335419519&amp;w=1920",
      title: "Product 1",
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="my-24 mx-48">
      <div className="flex mb-12">
        <div className="w-1/4 font-bold text-xl capitalize">
          {type} Products
        </div>
        <div className="w-3/4 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </div>
      </div>
      <div className="flex justify-center gap-12">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

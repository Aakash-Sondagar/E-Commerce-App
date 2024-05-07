import Card from "./Card.jsx";
const List = () => {
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
      title: "Product 2",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      image1:
        "https://static.zara.net/assets/public/64c3/e521/f6a14fc4ac38/6f5f907349a7/image-landscape-fill-0fcc0dca-374e-4964-835c-08d6c06fb958-default_0.jpg?ts=1714335419519&amp;w=1920",
      title: "Product 3",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      image1:
        "https://static.zara.net/assets/public/64c3/e521/f6a14fc4ac38/6f5f907349a7/image-landscape-fill-0fcc0dca-374e-4964-835c-08d6c06fb958-default_0.jpg?ts=1714335419519&amp;w=1920",
      title: "Product 4",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="flex justify-between flex-wrap">
      {data.length === 0 && <h1>No Products Found</h1>}
      {data.length > 0 &&
        data.map((item) => {
          return <Card className="ml-2" data={item} key={item?.id} />;
        })}
    </div>
  );
};

{
}
export default List;

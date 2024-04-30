import { useState, useEffect } from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://static.zara.net/assets/public/64c3/e521/f6a14fc4ac38/6f5f907349a7/image-landscape-fill-0fcc0dca-374e-4964-835c-08d6c06fb958-default_0.jpg?ts=1714335419519&amp;w=1920",
    "https://static.zara.net/assets/public/134c/23c2/3d24443f837c/0a0da5b42270/image-landscape-fill-8c07c561-8230-42f1-aa57-640ad8c93f69-default_0.jpg?ts=1714386477816&amp;w=1920",
    "https://static.zara.net/assets/public/ac0f/47c6/599e44fe87ed/321bd49902b7/image-landscape-fill-55978639-3f60-4bf2-a33f-82172c0e5daa-default_0.jpg?ts=1714335517565&amp;w=1920",
    "https://static.zara.net/assets/public/c39a/3209/45814ba8bdb3/bd20b8cacf51/image-landscape-fill-539906db-0d51-4b89-83ca-a469e46e49e6-default_0.jpg?ts=1713344191678&amp;w=1920",
    "https://static.zara.net/assets/public/eac6/b9ee/7a3a45aaad39/d197bed1d075/image-landscape-default-fill-7a4f8b65-a4d9-41e8-be2a-27515e91da16-default_0.jpg?ts=1714461208193&amp;w=1920",
  ];

  const len = data.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === len - 1 ? 0 : currentSlide + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, len]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? len - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === len - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="h-[calc(100vh-85px)] w-full relative overflow-hidden">
      <div
        className={"h-auto flex transition-all duration-1000 ease-linear "}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {data.map((item, index) => (
          <img
            className={"h-auto object-cover " + `w-full`}
            src={item}
            alt=""
            key={index}
          />
        ))}
      </div>
      <div className="w-fit	flex absolute gap-3 m-auto left-0 right-0 bottom-[100px]">
        <div
          className="w-12 h-12 border border-gray-300 flex justify-center items-center cursor-pointer rounded-2xl hover:bg-blue-500 hover:text-white transition ease-in-out delay-100 hover:scale-110"
          onClick={prevSlide}
        >
          <WestIcon />
        </div>
        <div
          className="w-12 h-12 border border-gray-300 flex justify-center items-center cursor-pointer rounded-2xl hover:bg-blue-500 hover:text-white transition ease-in-out delay-100 hover:scale-110"
          onClick={nextSlide}
        >
          <EastIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;

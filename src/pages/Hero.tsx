import React from "react";
import Slider from "react-slick";
import pic1 from "../assets/house.png";
import pic2 from "../assets/house2.png";
import pic3 from "../assets/house3.png"; // Add more images as needed
import Rents from "../components/Rents";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
};

const HeroSlider: React.FC = () => {
  const slides = [
    {
      image: pic1,
      title: "Welcome to Your Dream Home",
      subtitle: "Find the perfect place to live.",
    },
    {
      image: pic2,
      title: "Modern Living Spaces",
      subtitle: "Comfort and style in every corner.",
    },
    {
      image: pic3,
      title: "Luxury at its Best",
      subtitle: "Experience premium living.",
    },
  ];

  return (
    <div className="relative">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
              <p className="text-lg md:text-2xl mt-4 ">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </Slider>
      <Rents />
    </div>
  );
};

export default HeroSlider;

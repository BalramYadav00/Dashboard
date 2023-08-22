import React, { useState, useEffect } from "react";
export default function TopCardView() {
  const images = [
    "https://thumbs.dreamstime.com/b/fuel-economy-crisis-expensive-gas-consumption-prices-outline-concept-fossil-energy-value-financial-increasing-money-flow-out-244822479.jpg",
    "https://wallpapercave.com/wp/wp1862058.jpg",
    "https://i.pinimg.com/originals/4e/6a/f2/4e6af2a0d70204721df30aaa6823d611.jpg",
  ];
  const texts = [
    { title: "Featured", heading: "Annual Energy Outlook", description: "" },
    {
      title: "Featured",
      heading: "Environment",
      description:
        "WRI Partnership Aims to Foster Supply Chain Transparency, Zero-Deforestation Strategies",
    },
    {
      title: "Featured",
      heading: "Environment",
      description:
        "WRI Partnership Aims to Foster Supply Chain Transparency, Zero-Deforestation Strategies",
    },

    // Add more texts here corresponding to the images
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to update the current slide index
  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(handleNextSlide, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="p-8 w-full space-x-8 flex flex-row  font-mono">
      <div className=" bg-green-100 rounded-2xl   w-2/3 h-fit p-12  flex flex-row shadow-md hover:shadow-lg">
        <div className=" place-self-center space-y-2 content-center px-6">
          <p className="text-2xl text-slate-600 font-semibold">
            Welcome back 👋
          </p>
          <p className="text-2xl text-slate-600 font-semibold">Blackcoffer</p>
          <p className=" text-base">
            I hope you find the dashboard attractive and awesome, <br /> I need to
            be sure there isn't anything left.
          </p>
          <br />
          <button className=" bg-emerald-400 font-extra bold text-white hover:bg-green-600 rounded-lg p-2">
            Go Now
          </button>
        </div>
        <div>
          <img
            className="w-full h-full object-fit"
            src="https://static.vecteezy.com/system/resources/thumbnails/025/003/289/small/3d-cute-cartoon-female-teacher-character-on-transparent-background-generative-ai-png.png"
            alt="Dashboard"
          />
        </div>
      </div>
      <div className=" w-1/3  ">
        {" "}
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="carousel">
            {/* Slides */}
            <div
              className="carousel-inner flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="carousel-item min-w-full">
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-72 object-fit"
                  />
                  <div className="absolute bottom-0 h-full w-full bg-black bg-opacity-60 p-2">
                    <div className="flex flex-col h-full justify-center items-center">
                      <div>
                        <p className="text-green-400 text-xl">
                          {texts[index].title.length > 35
                            ? texts[index].title.slice(0, 35) + "..."
                            : texts[index].title}
                        </p>
                      </div>
                      <div>
                        <p className="text-white text-xl">
                          {texts[index].heading.length > 35
                            ? texts[index].heading.slice(0, 35) + "..."
                            : texts[index].heading}
                        </p>
                      </div>
                      <div>
                        <p className="text-white text-xl">
                          {texts[index].description.length > 35
                            ? texts[index].description.slice(0, 35) + "..."
                            : texts[index].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Add navigation buttons */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white rounded"
            onClick={handlePrevSlide}
          >
            Prev
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white rounded"
            onClick={handleNextSlide}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

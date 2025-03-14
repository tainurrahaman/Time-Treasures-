import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  return (
    <div className="mt-5 md:mt-10 lg:mt-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-10 my-4 md:my-14">
        {/* Text Section */}
        <div className="w-full md:w-2/5 text-center md:text-left">
          <Fade direction="left">
            <p className="font-extralight font-pacifico text-xl sm:text-2xl lg:text-3xl mb-4">
              Echoes of the Ages
            </p>
            <h3 className="font-bebas-neue text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Explore the Legacy of the Past
            </h3>
            <p className="font-roboto  lg:font-bebas-neue text-lg sm:text-xl md:text-2xl lg:text-4xl mt-4">
              Discover, Track, and Preserve the World’s Most Fascinating
              Historical Artifacts
            </p>
          </Fade>
        </div>
        {/* Carousel Section */}
        <div className="w-full md:w-3/5">
          {/* Slide 1 */}
          <div
            className={`carousel-item relative w-full h-48 sm:h-64 md:h-80 lg:h-96 ${
              currentSlide === 1 ? "block" : "hidden"
            }`}
          >
            <img
              src="https://i.ibb.co.com/jkXChPYP/view-vintage-objects-still-life-23-2150348530.jpg"
              className="w-full h-full object-cover rounded-md"
              alt="Slide 1"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button onClick={handlePrevSlide} className="btn btn-circle">
                ❮
              </button>
              <button onClick={handleNextSlide} className="btn btn-circle">
                ❯
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className={`carousel-item relative w-full h-48 sm:h-64 md:h-80 lg:h-96 ${
              currentSlide === 2 ? "block" : "hidden"
            }`}
          >
            <img
              src="https://i.ibb.co.com/VphVvSdB/istockphoto-1473262691-612x612.jpg"
              className="w-full h-full object-cover rounded-md"
              alt="Slide 2"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button onClick={handlePrevSlide} className="btn btn-circle">
                ❮
              </button>
              <button onClick={handleNextSlide} className="btn btn-circle">
                ❯
              </button>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className={`carousel-item relative w-full h-48 sm:h-64 md:h-80 lg:h-96 ${
              currentSlide === 3 ? "block" : "hidden"
            }`}
          >
            <img
              src="https://i.ibb.co.com/1YSKJW98/top-view-beautiful-rpg-still-life-items-23-2149282449.jpg"
              className="w-full h-full object-cover rounded-md"
              alt="Slide 3"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button onClick={handlePrevSlide} className="btn btn-circle">
                ❮
              </button>
              <button onClick={handleNextSlide} className="btn btn-circle">
                ❯
              </button>
            </div>
          </div>

          {/* Slide 4 */}
          <div
            className={`carousel-item relative w-full h-48 sm:h-64 md:h-80 lg:h-96 ${
              currentSlide === 4 ? "block" : "hidden"
            }`}
          >
            <img
              src="https://i.ibb.co.com/HD024MYp/epiphany-day-treasure-chest-with-stones-magus-23-2148746798.jpg"
              className="w-full h-full object-cover rounded-md"
              alt="Slide 4"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button onClick={handlePrevSlide} className="btn btn-circle">
                ❮
              </button>
              <button onClick={handleNextSlide} className="btn btn-circle">
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

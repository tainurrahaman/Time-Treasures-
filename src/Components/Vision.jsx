const Vision = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Our Mission */}
      <div className="flex flex-col md:flex-row mt-6 sm:mt-8 md:mt-28 gap-6 sm:gap-8 md:gap-10">
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 sm:gap-8 md:gap-10 px-0 lg:px-14">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <h2 className="font-bold">Our Mission</h2>
          </div>
          <p className=" text-[12px] sm:text-base md:text-[18px]">
            The MooM exists to exhibit, interpret, preserve and promote the
            visual, artistic and cultural heritage of Indigenous Peoples; to
            educate and engage the public on local, regional and global social
            issues through the visual arts. Present, collect and interpret
            historic and contemporary art in innovative and challenging ways
            that encourage the engagement and enjoyment of existing and future
            audiences.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="w-full rounded-lg"
            src="https://i.ibb.co.com/KchLTXz3/our-mission.jpg"
            alt="Website Mission img"
          />
        </div>
      </div>

      {/* Our Vision */}
      <div className="flex flex-col md:flex-row mt-6 sm:mt-8 md:mt-28 gap-6 sm:gap-8 md:gap-10">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <img
            className="w-full rounded-lg"
            src="https://i.ibb.co.com/mrr9gyBq/our-vision.jpg"
            alt="Website vision image"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 sm:gap-8 md:gap-6 px-0 lg:px-10 order-1 md:order-2">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <h2 className="font-bold">Our Vision</h2>
          </div>
          <p className=" text-[12px] sm:text-base md:text-[18px]">
            We envision a gallery accessible to everyone as a vibrant public
            space in service of our community, to foster greater social
            engagement, critical thinking and creativity. Inspiring and
            challenging our community through art.
          </p>
          <button className="flex justify-start">
            <a
              target="_blank"
              href="https://onlinelibrary.wiley.com/doi/abs/10.1002/9781118829059.wbihms201"
              className="text-[16px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-pacifico hover:text-gray-500"
              rel="noopener noreferrer"
            >
              See Why We’re the Best
            </a>
          </button>
        </div>
      </div>

      {/* Our Goals */}
      <div className="flex flex-col md:flex-row mt-6 sm:mt-24 md:mt-24 gap-6 sm:gap-6 md:gap-10">
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 sm:gap-4 md:gap-6 px-0 lg:px-14">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <h2 className="font-bold">Our Goals</h2>
          </div>
          <p className=" text-sm sm:text-base md:text-[18px]">
            We are at the forefront of creativity with quality programs and
            exhibitions. We provide a cultural and educational service of the
            very highest quality and to act as a focus for civic pride and
            community identity for the people. The gallery interacts with the
            community by designing programs that inspire, challenge, educate and
            entertain.
          </p>
          <button className="flex justify-start">
            <a
              target="_blank"
              href="https://www.museumnext.com/article/museums-and-sustainable-development-goals/"
              className="text-lg sm:text-xl md:text-[22px] font-pacifico hover:text-gray-500"
              rel="noopener noreferrer"
            >
              See more here
            </a>
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="w-full rounded-lg"
            src="https://i.ibb.co.com/j9Qb09xD/our-goals.jpg"
            alt="Website goals image"
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;

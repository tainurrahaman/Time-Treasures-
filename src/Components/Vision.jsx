const Vision = () => {
  return (
    <div className="px-8">
      {/* Our Mision */}
      <div className="flex  mt-28 gap-10">
        <div className="w-2/4 flex flex-col justify-center gap-10 px-14">
          <div className=" text-5xl">
            {" "}
            <h2 className="font-bold"> Our Mission</h2>
          </div>
          <p className="text-gray-300 text-[18px]">
            The MooM exists to exhibit, interpret, preserve and promote the
            visual, artistic and cultural heritage of Indigenous Peoples; to
            educate and engage the public on local, regional and global social
            issues through the visual arts.present, collect and interpret
            historic and contemporary art in innovative and challenging ways
            that encourage the engagement and enjoyment of existing and future
            audiences.
          </p>
        </div>
        <div className="w-2/4">
          <img
            className="w-full"
            src="https://i.ibb.co.com/KchLTXz3/our-mission.jpg"
            alt="Website Mission img"
          />
        </div>
      </div>

      {/* Our Vision */}
      <div className="flex  mt-28 gap-10">
        <div className="w-2/4">
          <img
            className="w-full"
            src="https://i.ibb.co.com/mrr9gyBq/our-vision.jpg"
            alt="Website vision image"
          />
        </div>
        <div className="w-2/4 flex flex-col justify-center gap-10 px-10">
          <div className=" text-5xl">
            {" "}
            <h2 className="font-bold"> Our Vision</h2>
          </div>
          <p className="text-gray-300 text-[18px]">
            We envision a gallery accessible to everyone as a vibrant public
            space in service of our community, to foster greater social
            engagement, critical thinking and creativity. Inspiring and
            challenging our community through art
          </p>
          <button className="flex justify-start">
            <a
              target="_blank"
              href="https://onlinelibrary.wiley.com/doi/abs/10.1002/9781118829059.wbihms201"
              className="text-[22px] font-pacifico hover:text-gray-500"
            >
              See Why We’re the Best
            </a>
          </button>
        </div>
      </div>
      {/* Our Goals */}
      <div className="flex  mt-28 gap-10">
        <div className="w-2/4 flex flex-col justify-center gap-10 px-14">
          <div className=" text-5xl">
            {" "}
            <h2 className="font-bold"> Our Goals</h2>
          </div>
          <p className="text-gray-300 text-[18px]">
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
              className="text-[22px] hover:text-gray-500 font-pacifico"
            >
              See more here
            </a>
          </button>
        </div>
        <div className="w-2/4">
          <img
            className="w-full"
            src="https://i.ibb.co.com/j9Qb09xD/our-goals.jpg"
            alt="Website goals image"
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;

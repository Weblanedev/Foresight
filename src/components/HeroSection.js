import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44"
      id="home"
    >
      <div className="container px-5 md:px-16 mx-auto flex flex-col justify-between">
        <div>
          <h1 className="capitalize text-center flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[4rem] 2xl:text-5xl font-bold">
            <p>Welcome to Foresight</p>
            <p>A place for all your car needs</p>
          </h1>
          <p className="text-lg leading-normal text-center mx-auto w-[70%] sm:leading-loose my-4 md:my-6">
          At Foresight, we are committed to driving excellence in the automotive industry. With a focus on innovation and quality, we assemble, manufacture, import, export, supply, and deal in a wide range of motor vehicles. 
          </p>
        </div>
        <div className="w-full relative">
          <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0  after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
            <Image
              src="https://images.pexels.com/photos/27639779/pexels-photo-27639779/free-photo-of-white-toyota-sports-car-parked-in-an-underground-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={1100}
              height={1000}
              alt="hero Image"
              className="object-contain mx-auto rounded-xl"
            />
          </div>
        </div>

      </div>

    </section>
  );
};

export default HeroSection;

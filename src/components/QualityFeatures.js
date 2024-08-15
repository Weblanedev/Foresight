import Image from "next/image";

const QualityFeature = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      {/* <Image src={imgSrc} width={80} height={80} alt="features" /> */}
      {/* <div className="h-[15px] w-[20px] bg-blue-500 rounded-full"></div> */}
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const QualityFeatures = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="services">
      <span className="service-name text-center text-2xl">WHY US</span>
      <h2 className="title text-center ">Whether you're looking for cars, lorries, buses, vans, motorcycles, or specialized vehicles, Foresight is your trusted partner in mobility.</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[100%] mx-auto">
        <QualityFeature
          imgSrc="/features/1.svg"
          title="Quality Assurance"
          desc="Every vehicle we assemble, manufacture, or supply undergoes rigorous quality checks to ensure it meets the highest standards."
        />
        <QualityFeature
          imgSrc="/features/2.svg"
          title="Comprehensive Range"
          desc="From compact cars to heavy-duty buses and everything in between, our diverse product range caters to all your transportation needs."
        />
        <QualityFeature
          imgSrc="/features/3.svg"
          title="Global Reach"
          desc="With a presence in multiple countries, Foresight is a trusted name in the international automotive market."
        />
        <QualityFeature
          imgSrc="/features/4.svg"
          title="Customer-Centric Approach"
          desc="We prioritize our customers' needs, offering tailored solutions and excellent after-sales service."
        />
      </div>
    </section>
  );
};

export default QualityFeatures;

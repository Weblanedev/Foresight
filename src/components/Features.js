import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="services">
      <span className="service-name text-center">Our Expertise</span>
      <h2 className="title text-center">Find out why we are the best</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Assemblers"
          desc="We take pride in assembling vehicles that meet the highest standards of safety and performance. Our state-of-the-art facilities and skilled technicians ensure that every vehicle we assemble is crafted with precision and care."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Manufacturers"
          desc="As manufacturers, we innovate to bring you vehicles that combine cutting-edge technology with durability. From design to production, our focus is on delivering vehicles that exceed expectations."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Importers & Exporters"
          desc="Foresight has a global reach, importing and exporting vehicles to and from various markets. Our extensive network ensures that we bring the best vehicles from around the world to our customers, and distribute our own vehicles globally."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Suppliers & Dealers"
          desc="Our role as suppliers and dealers means that we offer a diverse range of motor vehicles to meet the needs of every customer. Whether you need a reliable car, a robust lorry, a spacious bus, a versatile van, or a swift motorcycle, we have the perfect solution."
        />
      </div>
    </section>
  );
};

export default Features;

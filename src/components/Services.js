"use client";

import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";

const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
      <Image
        src={imgSrc}
        width={70}
        height={70}
        alt="features"
        className="mx-auto"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="leading-loose">{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative container px-5 md:px-16 mx-auto">
      <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
        <div className="relative w-full flex-1">
          <Image
            src="https://images.pexels.com/photos/27639803/pexels-photo-27639803/free-photo-of-white-toyota-sports-car-parked-in-a-rooftop-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={500}
            height={500}
            alt="video banner"
            className="object-contain w-full rounded-3xl"
          />
        </div>
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">
            <span className="service-name text-center lg:text-left">

            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-center lg:text-left">
              Our Story
            </h2>
          </div>
          <p className="leading-loose">
          At Foresight, we specialize in assembling, manufacturing, importing, exporting, supplying, and dealing in a comprehensive range of motor vehicles. From cars and lorries to buses, vans, and motorcycles, we are dedicated to delivering top-notch vehicles that meet your every need.

Our commitment to quality and innovation ensures that every vehicle we offer is built to last, combining cutting-edge technology with unmatched reliability.
          </p>
          <p className="leading-loose">Foresight is not just a business; it's a commitment to excellence. Our global reach, extensive range, and customer-centric approach make us the ideal choice for all your automotive needs. Whether you're looking for a reliable car, a durable lorry, or a versatile van, we have you covered.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;

"use client";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Features from "@/components/Features";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";

const Plan = ({ title }) => {

  return (
    <div className="flex items-center gap-2">
      <CheckCircleIcon className="text-blue-600 text-xl" />
      <span>{title}</span>
    </div>
  );
};

const PricingCard = ({ name, title, price, image, btnText, trail, titleOne, titleTwo, titleThree, titleFour }) => {
  const router = useRouter()
  const purchase = (name, price) => {
    const product = {
      name,
      price,
    }
    localStorage.setItem("item", JSON.stringify(product))
    router.push("/billing")
  }
  return (
    <div className="mx-2 md:mx-3 cursor-pointer p-10 transition-all hover:shadow-lg flex flex-col gap-6 rounded-3xl border-neutral-200 border">
      <div>
        <Image
          src={image}
          width={300}
          height={300}
          alt="features"
          className="w-full rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold capitalize">{name}</h2>
        <span className="text-neutral-500">{title}</span>
      </div>
      <div className="flex flex-col gap-5">
        {/* <Plan title={titleOne} />
        <Plan title={titleTwo} />
        <Plan title={titleThree} />
        <Plan title={titleFour} /> */}
      </div>
      <div className="mx-auto">
        <h2 class="text-4xl text-center leading-none flex items-center pb-4 mb-4">
          <span>${price}</span>
          <span class="text-lg ml-1 font-normal text-neutral-500">
          </span>
        </h2>
        <Link href="/billing">
          <p
            onClick={() => { purchase(name, price) }}
            className="w-fit capitalize text-base hover:bg-blue-600 hover:shadow-md hover:shadow-blue-600 hover:border-2 border-2 border-transparent py-3 px-6 text-white bg-blue-600 hover:border-blue-600 hover:text-white rounded-full">
            {btnText}
          </p>
        </Link>
        <span className="block text-blue-600 mt-5 font-semibold animate-bounce cursor-pointer">
          {trail}
        </span>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className="pt-[150px] flex flex-col gap-y-[70px] container mx-auto">
      <div>
        <span className="service-name text-center">Our Services</span>
        <h2 className="title text-center">Purchase services we provide</h2>
      </div>
      <div className="grid grid-cols-3 gap-[40px]">
        <PricingCard
          name="Vehicle Assembly"
          title="Precision assembly of various motor vehicles, ensuring top-notch quality and performance."
          price="7500"
          image="https://images.pexels.com/photos/4022545/pexels-photo-4022545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          btnText="Purchase"
          titleOne="Sofas, couches, and sectionals"
          titleTwo="Dining tables and chairs"
          titleThree="Beds and mattresses"
          titleFour="Cabinets and storage solutions"

        />
        <PricingCard
          name="Customized Vehicle Solutions"
          title="Providing tailored vehicle solutions to meet specific client needs, including specialized modifications."
          price="500"
          image="https://images.pexels.com/photos/3874329/pexels-photo-3874329.jpeg?auto=compress&cs=tinysrgb&w=600"
          btnText="Purchase"
          titleOne="Sofas, couches, and sectionals"
          titleTwo="Dining tables and chairs"
          titleThree="Beds and mattresses"
          titleFour="Cabinets and storage solutions"

        />
        <PricingCard
          name="Monthly Rentals"
          title="Short-term rentals for monthly use, perfect for running errands or exploring the city."
          price="900"
          image="https://images.pexels.com/photos/18776097/pexels-photo-18776097/free-photo-of-blue-and-white-honda-civic-cars.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          btnText="Purchase"
          titleOne="Sofas, couches, and sectionals"
          titleTwo="Dining tables and chairs"
          titleThree="Beds and mattresses"
          titleFour="Cabinets and storage solutions"

        />
        <PricingCard
          name="One-Way Rentals"
          title="Flexibility to pick up a rental car at one location and drop it off at another, great for road trips or moving purposes."
          price="200"
          image="https://images.pexels.com/photos/17958138/pexels-photo-17958138/free-photo-of-cars-on-road-near-construction-beams-on-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          btnText="Purchase"
          titleOne="Sofas, couches, and sectionals"
          titleTwo="Dining tables and chairs"
          titleThree="Beds and mattresses"
          titleFour="Cabinets and storage solutions"

        />
        <PricingCard
          name="Luxury Car Rentals"
          title="Premium vehicles with top-of-the-line features and amenities for special occasions or luxury travel experiences."
          price="1200"
          image="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          btnText="Purchase"
          titleOne="Sofas, couches, and sectionals"
          titleTwo="Dining tables and chairs"
          titleThree="Beds and mattresses"
          titleFour="Cabinets and storage solutions"
        />
        <PricingCard
          name="Consultation Services"
          title="Managing and maintaining vehicle fleets for businesses, including regular servicing and logistical support."
          price="600"
          image="https://images.pexels.com/photos/5864152/pexels-photo-5864152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          btnText="Purchase"
          titleOne="Sofas, couches, and sectionals"
          titleTwo="Dining tables and chairs"
          titleThree="Beds and mattresses"
          titleFour="Cabinets and storage solutions"
        />
        <PricingCard
          name="After-Sales Support"
          title="Offering maintenance, repair services, and parts replacement to ensure long-term vehicle performance."
          price="2300"
          image="https://images.pexels.com/photos/6044781/pexels-photo-6044781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          btnText="Purchase"
          titleOne="Sofas, couches, and sectionals"
          titleTwo="Dining tables and chairs"
          titleThree="Beds and mattresses"
          titleFour="Cabinets and storage solutions"
        />
      </div>
    </div>
  )
}

export default page
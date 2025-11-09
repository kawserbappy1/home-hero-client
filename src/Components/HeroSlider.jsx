import { Swiper, SwiperSlide } from "swiper/react";
import per1 from "../assets/per1.jpg";
import per2 from "../assets/per2.jpg";
import per3 from "../assets/per3.jpg";
import per4 from "../assets/per4.jpg";
import per5 from "../assets/per5.jpg";
import cln1 from "../assets/clean7.jpg";
import cln2 from "../assets/clean4.jpg";
import cln3 from "../assets/clean3.jpg";
import ele1 from "../assets/ele1.jpg";
import ele2 from "../assets/ele3.jpg";
import ele3 from "../assets/ele4.jpg";
import car1 from "../assets/car2.jpg";
import car2 from "../assets/car5.jpg";
import car3 from "../assets/car6.jpg";
import pan1 from "../assets/pan4.jpg";
import pan2 from "../assets/pan6.jpg";
import pan3 from "../assets/pan10.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { SiOpenbadges } from "react-icons/si";
import { IoIosArrowRoundForward } from "react-icons/io";

// import "./styles.css";

const HeroSlider = () => {
  return (
    <div className="container mx-auto px-2">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* slider 1  */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 py-20">
            {/* slider left  */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold mb-5">
                Realiable{" "}
                <span className="text-yellowColor ">Cleaning Service</span> at
                your haven
              </h1>
              <p className="max-w-md mb-5">
                we provide professional, realiable and efficient services to
                meet all your needs. Just touch at me one time we will always
                with you.
              </p>
              <button className="bg-greenColor text-yellowColor px-6 py-3 capitalize tracking-wider rounded-md flex items-center mb-5 cursor-pointer transition-all duration-500 hover:bg-yellowColor hover:text-greenColor">
                see all services{" "}
                <IoIosArrowRoundForward className="ml-2 text-xl" />
              </button>
              <div className="flex items-center gap-5 mt-10">
                <div className="border-r-3 border-r-bg3">
                  <h2 className="text-center font-heading text-3xl font-bold text-greenColor">
                    150+{" "}
                  </h2>
                  <p className="text-sm md:text-base">
                    Team Members by our services
                  </p>
                </div>
                <div className="border-r-3 border-r-bg3">
                  <h2 className="text-center font-heading text-3xl font-bold text-greenColor">
                    2,300+{" "}
                  </h2>
                  <p className="text-sm md:text-base">
                    Project Completed by our services
                  </p>
                </div>
                <div>
                  <h2 className="text-center font-heading text-3xl font-bold text-greenColor">
                    24+{" "}
                  </h2>
                  <p className="text-sm md:text-base">
                    Years experience by our services
                  </p>
                </div>
              </div>
            </div>
            {/* slider right  */}
            <div className="flex-1 flex gap-2 items-center">
              <div>
                <div className="flex">
                  <img src={per1} alt="" className=" size-12 rounded-full " />
                  <img
                    src={per2}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                  <img
                    src={per3}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                  <img
                    src={per4}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                  <img
                    src={per5}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                </div>
                <div className="my-3">
                  <p className="text-sm md:text-base">
                    <span className=" font-heading text-xl md:text-3xl font-bold text-greenColor">
                      20K
                    </span>{" "}
                    Total Happy Customers
                  </p>
                </div>
                <div className="mb-8">
                  <img
                    src={cln1}
                    alt=""
                    className="w-80 rounded-md shadow-md"
                  />
                </div>
                <div className="flex items-center gap-5 bg-bg3 rounded-md p-5">
                  <SiOpenbadges size={50} className="text-yellowColor" />
                  <div>
                    <h2 className=" font-heading text-xl md:text-3xl font-bold text-greenColor">
                      100%
                    </h2>
                    <p>Satisfaction Gurantee</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <img
                    src={cln3}
                    alt=""
                    className="w-full h-[250px] rounded-md mb-3 shadow-md border-2 border-greenColor"
                  />
                </div>
                <div>
                  <img
                    src={cln2}
                    alt=""
                    className="w-full h-[200px] rounded-md mb-3 border-2 border-greenColor object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2  */}
        <SwiperSlide>
          {/* slider 2  */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 py-20">
            {/* slider left  */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold mb-5">
                Truted{" "}
                <span className="text-yellowColor ">Electrical Service</span> at
                your haven
              </h1>
              <p className="max-w-md mb-5">
                we provide professional, realiable and efficient services to
                meet all your needs. Just touch at me one time we will always
                with you.
              </p>
              <button className="bg-greenColor text-yellowColor px-6 py-3 capitalize tracking-wider rounded-md flex items-center mb-5 cursor-pointer transition-all duration-500 hover:bg-yellowColor hover:text-greenColor">
                see all services{" "}
                <IoIosArrowRoundForward className="ml-2 text-xl" />
              </button>
              <div className="flex items-center gap-5 mt-10">
                <div className="border-r-3 border-r-bg3">
                  <h2 className="text-center font-heading text-3xl font-bold text-greenColor">
                    150+{" "}
                  </h2>
                  <p className="text-sm md:text-base">
                    Team Members by our services
                  </p>
                </div>
                <div className="border-r-3 border-r-bg3">
                  <h2 className="text-center font-heading text-3xl font-bold text-greenColor">
                    2,300+{" "}
                  </h2>
                  <p className="text-sm md:text-base">
                    Project Completed by our services
                  </p>
                </div>
                <div>
                  <h2 className="text-center font-heading text-3xl font-bold text-greenColor">
                    24+{" "}
                  </h2>
                  <p className="text-sm md:text-base">
                    Years experience by our services
                  </p>
                </div>
              </div>
            </div>
            {/* slider right  */}
            <div className="flex-1 flex gap-2 items-center">
              <div>
                <div className="flex">
                  <img src={per1} alt="" className=" size-12 rounded-full " />
                  <img
                    src={per2}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                  <img
                    src={per3}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                  <img
                    src={per4}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                  <img
                    src={per5}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                </div>
                <div className="my-3">
                  <p className="text-sm md:text-base">
                    <span className=" font-heading text-xl md:text-3xl font-bold text-greenColor">
                      20K
                    </span>{" "}
                    Total Happy Customers
                  </p>
                </div>
                <div className="mb-8">
                  <img
                    src={ele1}
                    alt=""
                    className="w-80 rounded-md shadow-md"
                  />
                </div>
                <div className="flex items-center gap-5 bg-bg3 rounded-md p-5">
                  <SiOpenbadges size={50} className="text-yellowColor" />
                  <div>
                    <h2 className=" font-heading text-xl md:text-3xl font-bold text-greenColor">
                      100%
                    </h2>
                    <p>Satisfaction Gurantee</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <img
                    src={ele2}
                    alt=""
                    className="w-full h-[250px] rounded-md mb-3 shadow-md border-2 border-greenColor"
                  />
                </div>
                <div>
                  <img
                    src={ele3}
                    alt=""
                    className="w-full h-[200px] rounded-md mb-3 border-2 border-greenColor object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 3  */}
        <SwiperSlide>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 py-20">
            {/* slider left  */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold mb-5">
                Realible{" "}
                <span className="text-yellowColor ">Plubming Service</span> at
                your haven
              </h1>
              <p className="max-w-md mb-5">
                we provide professional, realiable and efficient services to
                meet all your needs. Just touch at me one time we will always
                with you.
              </p>
              <button className="bg-greenColor text-yellowColor px-6 py-3 capitalize tracking-wider rounded-md flex items-center mb-5 cursor-pointer transition-all duration-500 hover:bg-yellowColor hover:text-greenColor">
                see all services{" "}
                <IoIosArrowRoundForward className="ml-2 text-xl" />
              </button>
              <div className="flex items-center gap-5 mt-10">
                <div className="border-r-3 border-r-bg3">
                  <h2 className="text-center font-heading text-3xl font-bold text-greenColor">
                    150+{" "}
                  </h2>
                  <p className="text-sm md:text-base">
                    Team Members by our services
                  </p>
                </div>
                <div className="border-r-3 border-r-bg3">
                  <h2 className="text-center font-heading text-3xl font-bold text-greenColor">
                    2,300+{" "}
                  </h2>
                  <p className="text-sm md:text-base">
                    Project Completed by our services
                  </p>
                </div>
                <div>
                  <h2 className="text-center font-heading text-3xl font-bold text-greenColor">
                    24+{" "}
                  </h2>
                  <p className="text-sm md:text-base">
                    Years experience by our services
                  </p>
                </div>
              </div>
            </div>
            {/* slider right  */}
            <div className="flex-1 flex gap-2 items-center">
              <div>
                <div className="flex">
                  <img src={per1} alt="" className=" size-12 rounded-full " />
                  <img
                    src={per2}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                  <img
                    src={per3}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                  <img
                    src={per4}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                  <img
                    src={per5}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                </div>
                <div className="my-3">
                  <p className="text-sm md:text-base">
                    <span className=" font-heading text-xl md:text-3xl font-bold text-greenColor">
                      20K
                    </span>{" "}
                    Total Happy Customers
                  </p>
                </div>
                <div className="mb-8">
                  <img
                    src={ele1}
                    alt=""
                    className="w-80 rounded-md shadow-md"
                  />
                </div>
                <div className="flex items-center gap-5 bg-bg3 rounded-md p-5">
                  <SiOpenbadges size={50} className="text-yellowColor" />
                  <div>
                    <h2 className=" font-heading text-xl md:text-3xl font-bold text-greenColor">
                      100%
                    </h2>
                    <p>Satisfaction Gurantee</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <img
                    src={ele2}
                    alt=""
                    className="w-full h-[250px] rounded-md mb-3 shadow-md border-2 border-greenColor"
                  />
                </div>
                <div>
                  <img
                    src={ele3}
                    alt=""
                    className="w-full h-[200px] rounded-md mb-3 border-2 border-greenColor object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 4  */}
        <SwiperSlide>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 py-20">
            {/* slider left  */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold mb-5">
                Trusted{" "}
                <span className="text-yellowColor ">Carpentry Service</span> at
                your haven
              </h1>
              <p className="max-w-md mb-5">
                we provide professional, realiable and efficient services to
                meet all your needs. Just touch at me one time we will always
                with you.
              </p>
              <button className="bg-greenColor text-yellowColor px-6 py-3 capitalize tracking-wider rounded-md flex items-center mb-5 cursor-pointer transition-all duration-500 hover:bg-yellowColor hover:text-greenColor">
                see all services{" "}
                <IoIosArrowRoundForward className="ml-2 text-xl" />
              </button>
              <div className="flex items-center gap-5 mt-10">
                <div className="border-r-3 border-r-bg3">
                  <h2 className="text-center font-heading text-3xl font-bold text-greenColor">
                    150+{" "}
                  </h2>
                  <p className="text-sm md:text-base">
                    Team Members by our services
                  </p>
                </div>
                <div className="border-r-3 border-r-bg3">
                  <h2 className="text-center font-heading text-3xl font-bold text-greenColor">
                    2,300+{" "}
                  </h2>
                  <p className="text-sm md:text-base">
                    Project Completed by our services
                  </p>
                </div>
                <div>
                  <h2 className="text-center font-heading text-3xl font-bold text-greenColor">
                    24+{" "}
                  </h2>
                  <p className="text-sm md:text-base">
                    Years experience by our services
                  </p>
                </div>
              </div>
            </div>
            {/* slider right  */}
            <div className="flex-1 flex gap-2 items-center">
              <div>
                <div className="flex">
                  <img src={per1} alt="" className=" size-12 rounded-full " />
                  <img
                    src={per2}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                  <img
                    src={per3}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                  <img
                    src={per4}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                  <img
                    src={per5}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                </div>
                <div className="my-3">
                  <p className="text-sm md:text-base">
                    <span className=" font-heading text-xl md:text-3xl font-bold text-greenColor">
                      20K
                    </span>{" "}
                    Total Happy Customers
                  </p>
                </div>
                <div className="mb-8">
                  <img
                    src={car1}
                    alt=""
                    className="w-80 rounded-md shadow-md"
                  />
                </div>
                <div className="flex items-center gap-5 bg-bg3 rounded-md p-5">
                  <SiOpenbadges size={50} className="text-yellowColor" />
                  <div>
                    <h2 className=" font-heading text-xl md:text-3xl font-bold text-greenColor">
                      100%
                    </h2>
                    <p>Satisfaction Gurantee</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <img
                    src={car2}
                    alt=""
                    className="w-full h-[250px] rounded-md mb-3 shadow-md border-2 border-greenColor"
                  />
                </div>
                <div>
                  <img
                    src={car3}
                    alt=""
                    className="w-full h-[200px] rounded-md mb-3 border-2 border-greenColor object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 5  */}
        <SwiperSlide>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 py-20">
            {/* slider left  */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold mb-5">
                Trusted{" "}
                <span className="text-yellowColor ">Awesome Service</span> at
                your haven
              </h1>
              <p className="max-w-md mb-5">
                we provide professional, realiable and efficient services to
                meet all your needs. Just touch at me one time we will always
                with you.
              </p>
              <button className="bg-greenColor text-yellowColor px-6 py-3 capitalize tracking-wider rounded-md flex items-center mb-5 cursor-pointer transition-all duration-500 hover:bg-yellowColor hover:text-greenColor">
                see all services{" "}
                <IoIosArrowRoundForward className="ml-2 text-xl" />
              </button>
              <div className="flex items-center gap-5 mt-10">
                <div className="border-r-3 border-r-bg3">
                  <h2 className="text-center font-heading text-3xl font-bold text-greenColor">
                    150+{" "}
                  </h2>
                  <p className="text-sm md:text-base">
                    Team Members by our services
                  </p>
                </div>
                <div className="border-r-3 border-r-bg3">
                  <h2 className="text-center font-heading text-3xl font-bold text-greenColor">
                    2,300+{" "}
                  </h2>
                  <p className="text-sm md:text-base">
                    Project Completed by our services
                  </p>
                </div>
                <div>
                  <h2 className="text-center font-heading text-3xl font-bold text-greenColor">
                    24+{" "}
                  </h2>
                  <p className="text-sm md:text-base">
                    Years experience by our services
                  </p>
                </div>
              </div>
            </div>
            {/* slider right  */}
            <div className="flex-1 flex gap-2 items-center">
              <div>
                <div className="flex">
                  <img src={per1} alt="" className=" size-12 rounded-full " />
                  <img
                    src={per2}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                  <img
                    src={per3}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                  <img
                    src={per4}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                  <img
                    src={per5}
                    alt=""
                    className=" size-12 rounded-full -ml-2"
                  />
                </div>
                <div className="my-3">
                  <p className="text-sm md:text-base">
                    <span className=" font-heading text-xl md:text-3xl font-bold text-greenColor">
                      20K
                    </span>{" "}
                    Total Happy Customers
                  </p>
                </div>
                <div className="mb-8">
                  <img
                    src={pan1}
                    alt=""
                    className="w-80 rounded-md shadow-md"
                  />
                </div>
                <div className="flex items-center gap-5 bg-bg3 rounded-md p-5">
                  <SiOpenbadges size={50} className="text-yellowColor" />
                  <div>
                    <h2 className=" font-heading text-xl md:text-3xl font-bold text-greenColor">
                      100%
                    </h2>
                    <p>Satisfaction Gurantee</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <img
                    src={pan2}
                    alt=""
                    className="w-full h-[250px] rounded-md mb-3 shadow-md border-2 border-greenColor"
                  />
                </div>
                <div>
                  <img
                    src={pan3}
                    alt=""
                    className="w-full h-[200px] rounded-md mb-3 border-2 border-greenColor object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;

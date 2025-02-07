import Title from "./Title";
import Paragraph from "./Paragraph";
import ServicesCard from "./ServicesCard";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const services = [
  {
    serviceTitle: "UX/UI",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",

    icon: "/images/UXUI.svg",
  },
  {
    serviceTitle: "Web Design",
    description:
      " Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: "/images/webDesign.svg",
  },
  {
    serviceTitle: "App Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: "/images/appDesign.svg",
  },
  ,
  {
    serviceTitle: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: "/images/graphicDesign.svg",
  },
];
export default function Services() {
  return (
    <section className="p-4 max-w-md mx-auto text-center sm:max-w-xl md:max-w-2xl">
      <Title>Services</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </Paragraph>

      <section className="p-4"></section>

      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {services.map((service, index) => {
          return (
            <SwiperSlide key={index}>
              <ServicesCard
                serviceTitle={service.serviceTitle}
                description={service.description}
                icon={service.icon}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

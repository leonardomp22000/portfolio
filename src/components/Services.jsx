import Title from "./Title";
import Paragraph from "./Paragraph";
import ServicesCard from "./ServicesCard";
import { useState } from "react";
import Button from "./Button";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import clsx from "clsx";

const services = [
  {
    serviceTitle: "Mechatronic Projects",
    description:
      "Design and projection of mechatronic projects, for the commercial or industrial sector",

    icon: "/images/UXUI.svg",
  },
  {
    serviceTitle: "Web Design",
    description:
      "Web design for small and medium-sized businesses that wish to expand their customer acquisition range. Landing Pages and information pages design, as well as custom-made software.",
    icon: "/images/webDesign.svg",
  },
  {
    serviceTitle: "App Design",
    description:
      "Application architecture design for a correct and optimal implementation. Web app developed with the latest technologies",
    icon: "/images/appDesign.svg",
  },
  // {
  //   serviceTitle: "Mechatronic Projects",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  //   icon: "/images/graphicDesign.svg",
  // },
  ,
];
export default function Services() {
  const [showText, setShowText] = useState(false);
  return (
    <section
      id="services"
      className="p-4 max-w-md mx-auto text-center sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl"
    >
      <div className="flex flex-col gap-4">
        <Title>Services</Title>

        <Paragraph
          className={clsx(
            "text-start",
            showText ? "line-clamp-none" : "line-clamp-4"
          )}
        >
          I offer a wide range of specialized services, including the design and
          development of high-quality websites, such as landing pages and
          informational sites, as well as advanced programming and comprehensive
          project implementation. I work with the most advanced and up-to-date
          technologies in the market, ensuring full optimization in terms of
          performance, accessibility, and search engine visibility, which leads
          to a significant improvement in SEO. Furthermore, I am committed to
          excellence in the design and optimization of both software and
          mechatronic systems, providing personalized and effective solutions.
          My approach focuses on delivering a comprehensive service that covers
          all project stages, from initial conceptualization to deployment, with
          the goal of maximizing operational efficiency and ensuring the
          long-term success of the company. I am open to collaborating with
          businesses in creating, optimizing, and modernizing their
          technological systems, ensuring results that exceed expectations and
          contribute to the continuous growth of the organization.
        </Paragraph>
        <Button
          handleFunction={() => {
            setShowText(!showText);
          }}
          variant="text"
          className="text-primary-main"
        >
          {showText ? "Ver menos" : "Ver mas"}
        </Button>

        <div className="lg:hidden">
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
        </div>

        <div className=" lg:flex lg:flex-wrap hidden">
          {services.map((service, index) => {
            return (
              <ServicesCard
                serviceTitle={service.serviceTitle}
                description={service.description}
                icon={service.icon}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

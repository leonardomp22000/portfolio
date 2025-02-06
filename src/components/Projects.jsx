import Title from "./Title";
import Paragraph from "./Paragraph";
import Button from "./Button";
import ProjectCard from "./ProjectCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";

const buttons = [
  { text: "All" },
  { text: "UI/UX" },
  { text: "WebDesign" },
  { text: "App Design" },
  { text: "Graphic Design" },
];

const projects = [
  {
    type: "Web Design",
    title: "AirCalling Landing Page Design",
    src: "/images/project1.webp",
  },
  {
    type: "Web Design",
    title: "Business Landing Page Design",
    src: "/images/project2.webp",
  },
  {
    type: "Web Design",
    title: "Ecom Web Page Design",
    src: "/images/project3.webp",
  },
];
export default function Projects() {
  return (
    <>
      <section className=" max-w-md mx-auto p-4  text-center sm:max-w-xl">
        <Title>My Projects</Title>;
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus
        </Paragraph>
        <div className="p-4  overflow-x-auto whitespace-nowrap space-x-3">
          {buttons.map((button, index) => {
            return (
              <Button
                key={index}
                variant="secondary"
              >
                {button.text}
              </Button>
            );
          })}
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {projects.map((project, index) => {
            return (
              <SwiperSlide key={index}>
                <ProjectCard
                  type={project.type}
                  title={project.title}
                  image={project.src}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}

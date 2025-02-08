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
  { text: "Mechatronic" },
  { text: "Software" },
  // { text: "App Design" },
  // { text: "Graphic Design" },
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
    <section
      id="projects"
      className=" max-w-md mx-auto p-4  text-center sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl"
    >
      <Title>My Projects</Title>;
      <Paragraph>
        Here you will find the Mechatronic and Software projects that I have
        designed and implemented. Feel free to contact me if you would like to
        review any of them in more detail.
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
      <div className="lg:hidden">
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
      </div>
      <div className="lg:flex hidden">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              type={project.type}
              title={project.title}
              image={project.src}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
}

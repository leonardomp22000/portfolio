import Title from "./Title";
import Paragraph from "./Paragraph";
import Button from "./Button";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Pagination } from "swiper/modules";

const buttons = [
  // { text: "All" },
  // { text: "Mechatronic" },
  { text: "Software" },
  // { text: "App Design" },
  // { text: "Graphic Design" },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://portfolioapi-0gt9.onrender.com/projects/")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects", err));
  }, []);
  return (
    <section
      id="projects"
      className="mx-auto max-w-md p-4 text-center sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl"
    >
      <Title>My Projects</Title>;
      <Paragraph>
        Here you will find the Mechatronic and Software projects that I have
        designed and implemented. Feel free to contact me if you would like to
        review any of them in more detail.
      </Paragraph>
      <div className="space-x-3 overflow-x-auto whitespace-nowrap p-4">
        {buttons.map((button, index) => {
          return (
            <Button key={index} variant="secondary">
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
                <Link href={`/projects/${project.slug}`} passHref>
                  <ProjectCard
                    type={project.type}
                    title={project.title}
                    image={project.src}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="hidden lg:flex">
        {projects.map((project, index) => {
          return (
            <Link key={index} href={`/projects/${project.slug}`} passHref>
              <ProjectCard
                type={project.type}
                title={project.title}
                image={project.src}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

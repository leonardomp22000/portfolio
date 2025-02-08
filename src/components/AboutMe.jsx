import Title from "./Title";
import Paragraph from "./Paragraph";
import Image from "next/image";
import Skill from "./Skill";
import { useState } from "react";
import clsx from "clsx";
import Button from "./Button";

const skills = [
  { name: "React", level: 90 },
  { name: "Tailwind", level: 95 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 90 },
  { name: "MongoDB", level: 80 },
  { name: "Python", level: 85 },
  { name: "C++", level: 85 },
  { name: "SolidWorks", level: 80 },
  { name: "Proteus", level: 90 },
];

export default function AboutMe() {
  const [showFullText, setShowFullText] = useState(false);
  return (
    <section
      id="aboutMe"
      className="p-4 max-w-md mx-auto text-center sm:max-w-xl md:max-w-2xl lg:max-w-5xl lg:flex lg:flex-row-reverse  lg:justify-between lg:items-center lg:my-7 xl:max-w-6xl"
    >
      <div className="lg:max-w-2xl lg:text-center  flex flex-col gap-4 text-center">
        <Title> About Me </Title>

        <Paragraph
          className={clsx(
            "text-start",
            showFullText ? "line-clamp-4" : "line-clamp-none"
          )}
        >
          I began my studies in Mechatronics Engineering at the Faculty of
          Engineering in the city of Guadalajara, Jalisco, at the Center for
          Technical Industrial Education. During my academic journey, I gained
          knowledge in various industrial technologies and skills such as PLC
          programming, CAD mechanical design, electronic design, and programming
          languages like JAVA, C, C++, and Python. Later, as part of my academic
          training, I completed an internship at Jabil, a leading electronics
          manufacturing company, where I had the opportunity to work with
          advanced technologies, including computer vision, industrial robots,
          sensors, and actuators, in addition to working with other programming
          languages like C#. In pursuit of expanding my skillset, I decided to
          join a Full Stack Web Development bootcamp with JavaScript, where I
          delved into technologies such as React, Next.js, Tailwind CSS,
          Node.js, and MongoDB, among others. As a Mechatronics Engineer, I find
          the world of technology fascinating and ever-evolving, offering
          constant opportunities to learn new things. During the bootcamp, I
          reflected on how different technologies can be integrated and unified
          through innovative tools I learned during the process. I consider
          myself someone passionate about challenges with a strong self-taught
          drive. On a personal note, I have a deep love for music and playing
          instruments. During high school, I learned to play the guitar, and now
          I am focusing on learning the piano, a hobby I thoroughly enjoy, in
          addition to reading and watching series.
        </Paragraph>
        <Button
          handleFunction={() => {
            setShowFullText(!showFullText);
          }}
          className="text-orange-600"
          variant="text"
        >
          {showFullText ? "Ver mas" : "Ver menos"}
        </Button>

        <Image
          src={"/images/AboutMe.webp"}
          alt="AboutMeImage"
          width={300}
          height={300}
          className="mx-auto p-4 sm:w-80 lg:hidden"
        />

        <div>
          <div className="max-w-sm md:max-w-lg mx-auto lg:mx-0 lg:max-w-full ">
            {skills.map((skill, index) => {
              return (
                <Skill
                  skillLevel={skill.level}
                  key={index}
                >
                  {skill.name}
                </Skill>
              );
            })}
          </div>
        </div>
      </div>

      <Image
        src={"/images/AboutMe.webp"}
        alt="AboutMeImage"
        width={300}
        height={300}
        className=" sm:w-80 shrink-0 lg:w-[400px] hidden lg:block "
      />
    </section>
  );
}

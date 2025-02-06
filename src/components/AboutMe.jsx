import Title from "./Title";
import Paragraph from "./Paragraph";
import Image from "next/image";
import Skill from "./Skill";

const skills = [
  { name: "UX", level: 90 },
  { name: "Website Design", level: 95 },
  { name: "App Design", level: 85 },
  { name: "Graphic Design", level: 90 },
];
export default function AboutMe() {
  return (
    <>
      <section className="p-4 max-w-md mx-auto text-center sm:max-w-xl">
        <Title> About Me </Title>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </Paragraph>
        <Image
          src={"/images/AboutMe.webp"}
          alt="AboutMeImage"
          width={300}
          height={300}
          className="mx-auto p-4 sm:w-80"
        />
        <div className="max-w-sm mx-auto">
          {skills.map((skill, index) => {
            return (
              <Skill
                skillLevel={skill.level}
                key={index}
              >
                {" "}
                {skill.name}
              </Skill>
            );
          })}
        </div>
      </section>
    </>
  );
}

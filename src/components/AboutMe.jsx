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
    <section className="p-4 max-w-md mx-auto text-center sm:max-w-xl md:max-w-2xl lg:max-w-5xl lg:flex lg:flex-row-reverse lg:gap-5">
      <div className="lg:max-w-xl lg:text-start  flex flex-col gap-4 text-center">
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

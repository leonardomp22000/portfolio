import Image from "next/image";
import Button from "./Button";
import Paragraph from "./Paragraph";
import { Typewriter } from "react-simple-typewriter";
export default function HeroSection() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-md gap-5 p-4 sm:max-w-xl md:max-w-2xl lg:max-w-5xl lg:items-center xl:max-w-6xl"
    >
      <div>
        <h6 className="font-poppins text-base font-semibold tracking-wide text-black sm:text-lg md:text-xl">
          Hi I am
        </h6>
        <h3 className="font-poppins text-xl font-semibold tracking-wide text-primary-main sm:text-2xl md:text-2xl">
          Leonardo Meza
        </h3>

        <div className="max-w-[360px] sm:max-w-none lg:mb-10 lg:h-[160px]">
          <h1 className="h-[90px] font-poppins text-[42px] font-bold leading-[50px] tracking-wider text-black sm:text-6xl md:h-[140px] md:text-[68px] lg:text-[74px] xl:text-[88px]">
            <span className="text-black">
              <Typewriter
                words={["Mechatronic Engineer", "FullStack Developer"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          {/* <h2 className="text-black text-[42px] font-bold font-poppins leading-[57px] tracking-wider px-4 text-end sm:text-6xl md:text-[68px] lg:text-[78px] xl:text-[88px]">
            Engineer
          </h2>  ProfilePicture.webp*/}
        </div>

        <Image
          src={"/images/HandCoding.png"}
          alt="Profile picture"
          width={220}
          height={250}
          priority
          className="mx-auto p-5 sm:w-80 lg:hidden"
        />

        <Paragraph>
          Hi! I am Leonardo, Mechatronic engineer & FullStack JS developer Jr.
          If you want to know more, I'll explain a little{" "}
          <a
            className="text-primary-main hover:text-primary-hover hover:underline active:text-primary-active"
            href="#aboutMe"
          >
            {" "}
            about myself{" "}
          </a>
          {"aboutMe"}, you can also take a look at the
          <a
            className="text-primary-main hover:text-primary-hover hover:underline active:text-primary-active"
            href="#services"
          >
            {" "}
            services
          </a>{" "}
          I offer and find out how they can help you, or if you prefer, take a
          look at my{" "}
          <a
            className="text-primary-main hover:text-primary-hover hover:underline active:text-primary-active"
            href={"#projects"}
          >
            portfolio
          </a>{" "}
          where you can see the projects I have done so far in an academic way.
        </Paragraph>

        <div className="p-4 text-center">
          <a href="#contact">
            {" "}
            <Button handleFunction={() => console.log("Hola")}>Hire Me</Button>
          </a>
        </div>
      </div>

      <Image
        src={"/images/HandCoding.png"}
        alt="Profile picture"
        width={220}
        height={250}
        priority
        className="mx-auto hidden shrink-0 px-5 sm:w-80 lg:block lg:w-96"
      />
    </section>
  );
}

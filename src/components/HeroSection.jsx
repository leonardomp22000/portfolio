import Image from "next/image";
import Button from "./Button";
import Paragraph from "./Paragraph";
export default function HeroSection() {
  return (
    <section className=" max-w-md sm:max-w-xl mx-auto p-4 md:max-w-2xl">
      <h6 className="text-black text-base font-semibold font-poppins tracking-wide px-4 sm:text-lg md:text-xl">
        Hi I am
      </h6>
      <h3 className="text-[#fd6f00] text-xl font-semibold font-poppins tracking-wide px-4 sm:text-2xl md:text-2xl">
        Leonardo Meza
      </h3>

      <div className="max-w-[360px] sm:max-w-none">
        <h1 className="text-black text-[42px] font-bold font-poppins leading-[30px] tracking-wider px-4 sm:text-6xl md:text-[68px]">
          Mechatronic
        </h1>
        <h2 className="text-black text-[42px] font-bold font-poppins leading-[57px] tracking-wider px-4 text-end sm:text-6xl md:text-[68px]">
          Engineer
        </h2>
      </div>

      <Image
        src={"/images/ProfilePicture.webp"}
        alt="Profile picture"
        width={220}
        height={250}
        priority
        className="mx-auto p-5 sm:w-80"
      />

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
        pharetra
      </Paragraph>

      <div className="text-center p-4">
        <Button handleFunction={() => console.log("Hola")}>Hire Me</Button>
      </div>
    </section>
  );
}

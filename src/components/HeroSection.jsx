import Image from "next/image";
import Button from "./Button";
export default function HeroSection() {
  return (
    <>
      <section className=" max-w-sm mx-auto">
        <h6 className="text-black text-base font-semibold font-poppins tracking-wide px-4">
          Hi I am
        </h6>
        <h3 className="text-[#fd6f00] text-xl font-semibold font-poppins tracking-wide px-4">
          Leonardo Meza
        </h3>
        <h1 className="text-black text-5xl font-bold font-poppins leading-[57px] tracking-wider px-4">
          Mechatronic
        </h1>
        <h2 className="text-black text-5xl font-bold font-poppins leading-[57px] tracking-wider px-4 text-end">
          Engineer
        </h2>
      </section>

      <section>
        <Image
          src={"/images/ProfilePicture.webp"}
          alt="Profile picture"
          width={220}
          height={250}
          priority
          className="mx-auto p-5"
        />
      </section>

      <section className="text-base font-poppins p-4 mx-auto text-center max-w-sm">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
        pharetra
      </section>

      <div className=" mx-auto text-center max-w-sm">
        <Button handleFunction={() => console.log("Hola")}>Hire Me</Button>
      </div>
    </>
  );
}

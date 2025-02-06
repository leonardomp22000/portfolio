import Image from "next/image";

export default function ProjectCard({ image, type, title }) {
  return (
    <>
      <section className=" p-5">
        <Image
          src={image}
          alt="Project1"
          width={300}
          height={330}
          className="mx-auto"
        />
        <div className=" flex flex-col gap-2 py-4">
          <h5 className="text-[#fd6f00] text-xs font-normal font-poppins tracking-tight sm:text-sm">
            {type}
          </h5>
          <h6 className="text-black text-base font-bold font-poppins tracking-wide sm:text-lg">
            {title}
          </h6>
        </div>
      </section>
    </>
  );
}

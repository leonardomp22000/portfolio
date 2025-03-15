import Image from "next/image";

export default function ProjectCard({ image, type, title }) {
  return (
    <>
      <section className="p-5">
        <Image
          src={image}
          alt="Project1"
          width={300}
          height={330}
          className="mx-auto"
        />
        <div className="flex flex-col gap-2 py-4">
          <h5 className="font-poppins text-xs font-normal tracking-tight text-[#fd6f00] sm:text-sm md:text-base">
            {type}
          </h5>
          <h6 className="font-poppins text-base font-bold tracking-wide text-black sm:text-lg md:text-xl">
            {title}
          </h6>
        </div>
      </section>
    </>
  );
}

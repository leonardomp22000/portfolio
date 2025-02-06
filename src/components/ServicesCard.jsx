import Image from "next/image";
export default function ServicesCard({ serviceTitle, icon, description }) {
  return (
    <>
      <div className="w-[267px] h-fit bg-[#f7f7f7] rounded-2xl mx-auto sm:w-[300px]">
        <div className="px-4 py-12 h-full flex flex-col gap-6">
          <Image
            src={icon}
            width={65}
            height={80}
          />

          <h3 className="text-black text-xl font-semibold font-poppins tracking-wide text-start sm:text-2xl">
            {serviceTitle}
          </h3>
          <p className="text-xs text-black font-normal font-poppins tracking-tight text-start sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
export default function ServicesCard({ serviceTitle, icon, description }) {
  return (
    <>
      <div className="mx-auto h-fit w-[267px] rounded-2xl bg-[#f7f7f7] sm:w-[300px]">
        <div className="flex h-full flex-col gap-6 px-4 py-12">
          <Image src={icon} width={65} height={80} />

          <h3 className="text-start font-poppins text-xl font-semibold tracking-wide text-black sm:text-2xl">
            {serviceTitle}
          </h3>
          <p className="text-start font-poppins text-xs font-normal tracking-tight text-black sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

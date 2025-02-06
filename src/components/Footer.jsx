import Button from "./Button";
import Image from "next/image";

const services = ["Home", "About Me", "Services", "Projects", "Contact"];
const socialNetwork = [
  { image: "images/LinkedIn.svg", ref: "#" },
  { image: "images/Instagram.svg", ref: "#" },
  { image: "/images/Github.svg", ref: "#" },
];

export default function Footer() {
  return (
    <>
      <section className="bg-[#e2e2e2] py-10">
        <div className="mx-auto max-w-sm text-center">
          {services.map((service, index) => {
            return (
              <Button
                key={index}
                variant="text"
              >
                {service}
              </Button>
            );
          })}
        </div>

        <div className="my-4">
          <div className="flex gap-9 justify-center">
            {socialNetwork.map((network, index) => {
              return (
                <a
                  key={index}
                  href={network.ref}
                >
                  <Image
                    src={network.image}
                    alt="Image"
                    width={30}
                    height={30}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#545454] text-center">
        <p className="p-4 text-white text-base font-normal font-poppins tracking-wide">
          © 2023
          <span className="text-[#e86c0a] font-bold font-poppins text-base">
            FawziUiUx
          </span>
          All Rights Reserved , Inc.
        </p>
      </section>
    </>
  );
}

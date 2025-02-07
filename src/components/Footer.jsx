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
    <footer>
      <section className="bg-[#e2e2e2] py-10">
        <div className="mx-auto max-w-md text-center sm:max-w-xl md:max-w-2xl">
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
                    className="sm:w-9"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#545454] text-center text-base md:text-lg">
        <p className="p-4 text-white  font-normal font-poppins tracking-wide">
          © 2023
          <span className="text-[#e86c0a] font-bold font-poppins ">
            FawziUiUx
          </span>
          All Rights Reserved , Inc.
        </p>
      </section>
    </footer>
  );
}

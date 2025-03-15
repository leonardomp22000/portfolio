import Button from "./Button";
import Image from "next/image";

const services = [
  { text: "Home", href: "#home" },
  { text: "About Me", href: "#aboutMe" },
  { text: "Services", href: "#services" },
  { text: "Projects", href: "#projects" },
  { text: "Contact", href: "#contact" },
];
const socialNetwork = [
  {
    image: "images/LinkedIn.svg",
    ref: "linkedin.com/in/leonardo-josbad-meza-pantoja-336156252",
  },
  {
    image: "images/Instagram.svg",
    ref: "https://www.instagram.com/leonardo_meza2200/",
  },
  { image: "/images/Github.svg", ref: "https://github.com/leonardomp22000" },
];

export default function Footer() {
  return (
    <footer>
      <section className="bg-[#e2e2e2] py-10">
        <div className="mx-auto max-w-md text-center sm:max-w-xl md:max-w-2xl">
          {services.map((service, index) => {
            return (
              <a key={index} href={service.href}>
                {" "}
                <Button variant="text">{service.text}</Button>
              </a>
            );
          })}
        </div>

        <div className="my-4">
          <div className="flex justify-center gap-9">
            {socialNetwork.map((network, index) => {
              return (
                <a key={index} href={network.ref}>
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
        <p className="p-4 font-poppins font-normal tracking-wide text-white">
          © 2023{" "}
          <span className="font-poppins font-bold text-primary-main">
            Leonardo Meza
          </span>{" "}
          All Rights Reserved, Inc.
        </p>
      </section>
    </footer>
  );
}

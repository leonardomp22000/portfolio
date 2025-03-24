import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const services = [
  { text: "Home", href: "/#home" },
  { text: "About Me", href: "/#aboutMe" },
  { text: "Services", href: "/#services" },
  { text: "Projects", href: "/#projects" },
  { text: "Contact", href: "/#contact" },
];
const socialNetwork = [
  {
    image: "/images/LinkedIn.svg",
    ref: "https://www.linkedin.com/in/leonardo-josbad-meza-pantoja-336156252?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPcanUmG1S%2B2vuhKKTGOY1g%3D%3D",
  },
  {
    image: "/images/Instagram.svg",
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
              <Link key={index} href={service.href} scroll={false}>
                <Button variant="text">{service.text}</Button>
              </Link>
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
          © 2023
          <span className="font-poppins font-bold text-primary-main">
            Leonardo Meza
          </span>
          All Rights Reserved, Inc.
        </p>
      </section>
    </footer>
  );
}

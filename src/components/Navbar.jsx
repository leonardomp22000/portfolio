import Button from "@/components/Button";
import Menu from "@/components/Menu";
function download() {
  const link = document.createElement("a"); // Crea un elemento a
  link.href = "/CVLeonardoMeza.pdf"; // Usa la ruta correcta Epecifica la ruta donde esta el archivo de descarga
  link.download = "CVLeonardoMeza.pdf"; //Indica que se trata de una descarga
  document.body.appendChild(link); // Inserta el enlace en el body del documento
  link.click(); // Simula un click por el usuario para iniciar la descarga
  document.body.removeChild(link); // Elimina el enlace del DOM limpiar la memoria y evitar elementos innecesarios
}
import {
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  CheckBadgeIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

const links = [
  {
    link: "Home",
    icon: (
      <HomeIcon
        width={24}
        height={24}
      />
    ),
  },
  {
    link: "About me",
    icon: (
      <InformationCircleIcon
        width={24}
        height={24}
      />
    ),
  },
  {
    link: "Services",
    icon: (
      <BriefcaseIcon
        width={24}
        height={24}
      />
    ),
  },
  {
    link: "Projects",
    icon: (
      <BuildingOfficeIcon
        width={24}
        height={24}
      />
    ),
  },
  {
    link: "Testimonials",
    icon: (
      <CheckBadgeIcon
        width={24}
        height={24}
      />
    ),
  },
  {
    link: "Contact",
    icon: (
      <ChatBubbleLeftRightIcon
        width={24}
        height={24}
      />
    ),
  },
];

export default function Navbar() {
  return (
    <nav className=" p-4 max-w-md flex justify-end gap-4 mx-auto items-end sm:max-w-xl md:max-w-2xl lg:max-w-5xl lg:py-7">
      <Button
        className="lg:hidden "
        handleFunction={download}
      >
        Download CV
      </Button>
      <Menu
        className="lg:hidden"
        links={links}
      />
      <ul className="lg:flex hidden ">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Button variant="text">{link.link}</Button>
            </li>
          );
        })}
      </ul>
      <Button
        className="hidden lg:block"
        handleFunction={download}
      >
        Download CV
      </Button>
    </nav>
  );
}

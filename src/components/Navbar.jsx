import Button from "@/components/Button";
import Menu from "@/components/Menu";
import Link from "next/link";
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
    href: "/#home",
    text: "Home",
    icon: <HomeIcon width={24} height={24} />,
  },
  {
    href: "/#aboutMe",
    text: "About me",
    icon: <InformationCircleIcon width={24} height={24} />,
  },
  {
    href: "/#services",
    text: "Services",
    icon: <BriefcaseIcon width={24} height={24} />,
  },
  {
    href: "/#projects",
    text: "Projects",
    icon: <BuildingOfficeIcon width={24} height={24} />,
  },

  {
    href: "/#contact",
    text: "Contact",
    icon: <ChatBubbleLeftRightIcon width={24} height={24} />,
  },
];

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-md items-end justify-end gap-4 p-4 sm:max-w-xl md:max-w-2xl lg:max-w-5xl lg:py-4 xl:max-w-6xl">
      <Button className="lg:hidden" handleFunction={download}>
        Download CV
      </Button>
      <Menu className="lg:hidden" links={links} />
      <ul className="hidden lg:flex">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.href} scroll={false}>
                <Button variant="text">{link.text}</Button>
              </Link>
            </li>
          );
        })}
      </ul>
      <Button className="hidden lg:block" handleFunction={download}>
        Download CV
      </Button>
    </nav>
  );
}

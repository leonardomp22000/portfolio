import { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

export default function OffCanvas({ links, className = "" }) {
  const [isOpen, setIsOpen] = useState(false); // useState cambia el estado de un componente renderizado

  const toggleDrawer = () => setIsOpen(!isOpen); // Disparador, funcion de cerrar y abrir el offCanvas

  return (
    <div className={` ${className}`}>
      {/**Para la super posicion de elementos se usa relative */}
      {/* Botón que abre el drawer */}
      <button onClick={toggleDrawer}>
        {" "}
        {/** Se llama a la funcion que hace cambiar el estado. Dicha funcion tiene un setIsOpen en su interior */}
        <Bars3Icon width={30} height={30} />
      </button>
      {/* Drawer (OffCanvas) */}
      {/**
       * 
      ✅ fixed top-0 right-0 → Lo fija en el lado derecho de la pantalla.
      ✅ h-screen w-80 → Ocupa toda la altura y tiene ancho de 80px.
      ✅ transition-transform duration-300 → Agrega animación al abrir/cerrar.
      ✅ translate-x-0 → Muestra el drawer cuando isOpen es true.
      ✅ translate-x-full → Oculta el drawer cuando isOpen es false.
      width original 80 
       * 
       */}
      <div
        className={`fixed right-0 top-0 z-40 h-screen w-60 transform bg-white p-4 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Encabezado */}
        <div className="mb-4 flex items-center justify-between">
          <h5 className="flex items-center font-poppins text-lg text-black">
            Menu
          </h5>

          {/* Botón para cerrar */}
          <button
            onClick={toggleDrawer}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-200 hover:text-gray-900"
          >
            <XMarkIcon className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        {/* Contenido */}

        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.href}>
                  <div className="flex cursor-pointer items-center gap-2 rounded-md p-2 text-black/80 transition-colors hover:bg-primary-main hover:text-white">
                    {link.icon} {link.text}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

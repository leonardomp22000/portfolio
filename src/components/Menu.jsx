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
        <Bars3Icon
          width={30}
          height={30}
        />
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
        className={`fixed top-0 right-0 z-40 h-screen p-4 w-60 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Encabezado */}
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-lg font-poppins  text-black flex items-center">
            Menu
          </h5>

          {/* Botón para cerrar */}
          <button
            onClick={toggleDrawer}
            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex items-center justify-center"
          >
            <XMarkIcon className="w-5 h-5" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        {/* Contenido */}

        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.href}>
                  <div className="flex items-center gap-2 p-2 rounded-md hover:bg-primary-main hover:text-white transition-colors cursor-pointer text-black/80">
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

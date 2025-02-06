export default function Skill({ children, skillLevel }) {
  return (
    <div className="w-full h-10 relative">
      {/* Título de la habilidad */}
      <div className="h-[23.80px] left-0 top-[-4px] absolute text-black text-base font-semibold font-['Poppins'] tracking-wide sm:text-base">
        {children}
      </div>

      {/* Contenedor de la barra de progreso */}
      <div className="w-full h-[13.94px] left-0 top-5 absolute">
        {/* Barra de fondo */}
        <div className="w-full h-[5.23px] absolute bg-[#ecebeb] rounded-md"></div>

        {/* Barra de progreso con width dinámico */}
        <div
          className="h-[5.23px] absolute bg-[#fd6f00] rounded-md transition-all duration-500"
          style={{ width: `${skillLevel}%` }} // ✅ Se ajusta el ancho según la prop
        ></div>

        {/* Indicador (Punto al final) */}
        <div
          className="h-[13.94px] w-[13.94px] top-[-3px] absolute bg-[#ecebeb] rounded-full shadow-[0px_4px_7px_0px_rgba(0,0,0,0.20)] border-2 border-[#fd6f00] transition-all duration-500"
          style={{ left: `calc(${skillLevel}% - 7px)` }} // ✅ Se mueve según el nivel
        ></div>
      </div>
    </div>
  );
}

export default function Skill({ children, skillLevel }) {
  return (
    <div className="relative h-10 w-full">
      {/* Título de la habilidad */}
      <div className="absolute left-0 top-[-4px] h-[23.80px] font-['Poppins'] text-base font-semibold tracking-wide text-black sm:text-base md:top-[-8px] md:text-lg">
        {children}
      </div>

      {/* Contenedor de la barra de progreso */}
      <div className="absolute left-0 top-5 h-[13.94px] w-full">
        {/* Barra de fondo */}
        <div className="absolute h-[5.23px] w-full rounded-md bg-[#ecebeb]"></div>

        {/* Barra de progreso con width dinámico */}
        <div
          className="absolute h-[5.23px] rounded-md bg-primary-main transition-all duration-500"
          style={{ width: `${skillLevel}%` }} // ✅ Se ajusta el ancho según la prop
        ></div>

        {/* Indicador (Punto al final) */}
        <div
          className="absolute top-[-3px] h-[13.94px] w-[13.94px] rounded-full border-2 border-primary-main bg-[#ecebeb] shadow-[0px_4px_7px_0px_rgba(0,0,0,0.20)] transition-all duration-500"
          style={{ left: `calc(${skillLevel}% - 7px)` }} // ✅ Se mueve según el nivel
        ></div>
      </div>
    </div>
  );
}

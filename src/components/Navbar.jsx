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
export default function Navbar() {
  return (
    <nav className=" p-3 max-w-md flex justify-end gap-4 mx-auto items-end sm:max-w-xl">
      <Button handleFunction={download}>Download CV</Button>
      <Menu />
    </nav>
  );
}

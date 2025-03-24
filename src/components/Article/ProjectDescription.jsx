export default function ProjectDescription({
  titleSection = "",
  projectDescription = "",
  children,
}) {
  return (
    <>
      <h4 className="font-poppins text-xl font-semibold">{titleSection}</h4>
      <p className="text-justify font-poppins">{projectDescription}</p>

      {children}
    </>
  );
}

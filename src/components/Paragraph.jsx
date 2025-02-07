export default function Paragraph({ children }) {
  return (
    <>
      <p className="text-base font-poppins  mx-auto text-center  sm:text-lg md:text-lg">
        {children}
      </p>
    </>
  );
}

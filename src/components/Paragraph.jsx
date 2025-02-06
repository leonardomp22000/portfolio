export default function Paragraph({ children }) {
  return (
    <>
      <p className="text-base font-poppins  mx-auto text-center max-w-sm sm:text-lg">
        {children}
      </p>
    </>
  );
}

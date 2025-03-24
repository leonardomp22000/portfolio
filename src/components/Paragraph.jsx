export default function Paragraph({ children, className = " " }) {
  return (
    <>
      <p
        className={`mx-auto font-poppins text-base sm:text-lg md:text-lg ${className}`}
      >
        {children}
      </p>
    </>
  );
}

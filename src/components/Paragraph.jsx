export default function Paragraph({ children, className = " " }) {
  return (
    <>
      <p
        className={`text-base font-poppins  mx-auto  sm:text-lg md:text-lg ${className}`}
      >
        {children}
      </p>
    </>
  );
}

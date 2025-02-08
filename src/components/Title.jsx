export default function Title({ children }) {
  return (
    <>
      <h2 className="text-black text-[42px] font-semibold font-poppins tracking-wider sm:text-5xl md:text-5xl lg:text-[54px]">
        {children}
      </h2>
    </>
  );
}

interface Type {
  label: string;
}
export const NavButton: React.FC<Type> = ({ label }) => {
  const scrollToSection = (label: string) => {
    if (label === "White Paper") {
      window.open("/white-paper.pdf");
      return
    }
    const element = document.getElementById(label);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <button
        className={`font-[Thomas,cursive] text-[1.6vw] font-semibold hover:text-lime-500`}
        onClick={() => scrollToSection(label)}
      >
        {label}
      </button>
    </>
  );
};

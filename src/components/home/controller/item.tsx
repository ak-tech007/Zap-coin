import { useState } from "react";

export const Item = ({ label }: { label: string }) => {
  const [show, setShow] = useState<string>("");
  const scrollToSection = (t: string) => {
    const element = document.getElementById(t);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <button onClick={() => scrollToSection(label)}>
        <div
          onMouseEnter={() => setShow(label)}
          onMouseLeave={() => setShow("")}
          className="rounded-full w-[0.4vw] h-[0.4vw] bg-indigo-900 relative m-[0.6vw]"
        >
          <div
            className={`${
              show === label
                ? "px-[0.8vw] py-[0.1vw] rounded-[0.5vw] bg-indigo-600 "
                : "w-0"
            } overflow-hidden duration-100 absolute right-[0.5vw] -top-[0.6vw] h-[1.5vw] text-white font-semibold text-right `}
          >
            {label}
          </div>
        </div>
      </button>
    </>
  );
};

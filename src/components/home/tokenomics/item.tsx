export const Item = ({
  title,
  content,
  className,
}: {
  title: string;
  content: string;
  className: string;
}) => {
  return (
    <>
      <div className={`${className} absolute w-[23%] text-[#602B0D]`}>
        <h1 className="text-[1.3vw] font-semibold">{title}</h1>
        <p className="text-[1.1vw]">{content}</p>
      </div>
    </>
  );
};

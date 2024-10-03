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
        <h1 className="text-[23px] font-semibold">{title}</h1>
        <p className="text-[20px]">{content}</p>
      </div>
    </>
  );
};

import { useRouter } from "next/navigation";

export const LinkIcon = () => {
  const router = useRouter();
  return (
    <>
    <div className="flex gap-5 justify-between ">
    <img
        src="/button/telegram.png"
        className="w-[50px] h-[50px] cursor-pointer hover:scale-105 bg-[#e8aa25] rounded-lg button-shadow"
        onClick={() => router.push("https://web.telegram.org")}
      />
    <img
      src="/button/twitter.png"
      className="w-[50px] h-[50px] cursor-pointer hover:scale-105  bg-[#e8aa25] rounded-lg button-shadow"
      onClick={() => router.push("https://web.telegram.org")}
    />
    </div>
      
    </>
  );
};

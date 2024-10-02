import { useRouter } from "next/navigation";

export const LinkIcon = () => {
  const router = useRouter();
  return (
    <>
      <img
        src="/icon/TIcon.png"
        className="w-[50px] h-[50px] cursor-pointer hover:scale-105"
        onClick={() => router.push("https://web.telegram.org")}
      />
      <img
        src="/icon/XIcon.png"
        className="w-[50px] h-[50px] cursor-pointer hover:scale-105"
        onClick={() => router.push("https://web.telegram.org")}
      />
    </>
  );
};

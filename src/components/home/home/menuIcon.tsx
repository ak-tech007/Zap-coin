import { navHiddenAtom } from "@/store";
import { useAtom } from "jotai";

export const MenuIcon = () => {
  const [, setShow] = useAtom<boolean>(navHiddenAtom);
  return (
    <><div className="min-[1380px]:hidden pr-16">
        <img
        src="/icon/menu.png"
        className="w-16 h-auto cursor-pointer"
        onClick={() => setShow(true)}
      />
    </div>
    </>
  );
};

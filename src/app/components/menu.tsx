import Image from "next/image";
import logoNav from "../assets/images/imagem-nav.webp";
import style from "./menu.module.css";

// Tipagem das props
interface MenuProps {
  option01: string;
  option02: string;
}

export const Menu = ({ option01, option02 }: MenuProps) => {
  return (
    <nav className="bg-white fixed w-full h-[60px] flex justify-between z-[998] rounded-[4px] text-[rgb(97,97,97)] top-0">
      <Image src={logoNav} alt="logoNav" className="w-[60px] h-[60px] ml-[20px]" />
      <ul className="flex list-none pl-[24px] items-center">
        <li className={style["nav-link"]}>
          <a href="#">{option01}</a>
        </li>
        <li className={style["nav-link"]}>
          <a href="#">{option02}</a>
        </li>
      </ul>
    </nav>
  );
};

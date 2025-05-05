import Image from "next/image";
import Link from "next/link";

interface MenuProps {
  op1: String;
  op2: String;
  op3?: String;
  op4?: String;
}

export const Menu = ({op1, op2, op3, op4} : MenuProps) => {
  return(
    <header >
      <nav className="flex p-[0.5rem] gap-[1rem]">
        <Link className="font-black " href={"/"}>{op1}</Link>
        <Link className="font-black" href={"/hookPage"}>{op2}</Link>
      </nav>
    </header>

  )
}
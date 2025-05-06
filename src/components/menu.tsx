import Image from "next/image";
import Link from "next/link";

interface MenuProps {
  op1: string;
  op2: string;
  op3: string;
  op4: string;
}

export const Menu = ({op1, op2, op3, op4} : MenuProps) => {
  return(
    <header >
      <nav className="fixed flex justify-center p-[0.5rem] gap-[1rem] z-999 w-[100vw] bg-[white]">
        <Link className="font-black opacity-[0.6] hover:opacity-[1.0]" href={"/"}>{op1}</Link>
        <Link className="font-black opacity-[0.6] hover:opacity-[1.0]" href={"/hookPage"}>{op2}</Link>
        <Link className="font-black opacity-[0.6] hover:opacity-[1.0]" href={"/axiosPage"}>{op3}</Link>
        <Link className="font-black opacity-[0.6] hover:opacity-[1.0]" href={"/serverSide"}>{op4}</Link>
      </nav>
    </header>
  )
}
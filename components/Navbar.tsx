import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/" className="hover:scale-105 transition ease-in-out">
            <Image src="/ferrimundo-logo.svg" alt="Ferrimundo logo" width={90} height={29}/>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex"> 
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))}
        </ul>

       <Image 
         src="/menu.svg"
         alt="Menu logo"
         width={32}
         height={32}
         className="inline-block cursor-pointer lg:hidden"
       />
    </nav>
  )
}

export default Navbar
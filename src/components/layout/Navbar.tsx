
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="absolute max-w-7xl mx-auto top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-bold text-xl tracking-tight"
        >
          <Image
            src="/logo.svg"
            alt="Headphonic Logo"
            width={60}
            height={58}
            className="h-8 w-auto"
          />
          Headphonic
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {["Home", "About Us", "Products", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href="#"
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <Link
          href="#"
          className="hidden md:flex items-center px-5 py-2 rounded-lg border border-white/60 text-white text-sm font-medium hover:bg-white hover:text-neutral transition-all duration-200"
        >
          Login
        </Link>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 cursor-pointer">
          <span className="w-6 h-0.5 bg-white block" />
          <span className="w-6 h-0.5 bg-white block" />
          <span className="w-6 h-0.5 bg-white block" />
        </button> 
      </nav>
    </header>
  );
}
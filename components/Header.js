import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

function Header({ setModalIsOpen }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-100">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://w7.pngwing.com/pngs/993/679/png-transparent-iphone-4s-ios-7-computer-icons-weather-weather-logo-thumbnail.png" class="h-8" alt="Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Weather Info</span>
      </a>
      <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " onClick={() => setModalIsOpen(true)}>Select New City</button>

      <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
        <Link href="/" className="hover:text-gray-500">

          Home

        </Link>
        <Link href="/about" className="hover:text-gray-500">

          About

        </Link>
        <Link href="/services" className="hover:text-gray-500">

          Services

        </Link>
        <Link href="/contact" className="hover:text-gray-500">

          Contact

        </Link>

      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-gray-500"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <>
            <Link href="/" className="hover:text-gray-500">

              Home

            </Link>
            <Link href="/about" className="hover:text-gray-500">

              About

            </Link>
            <Link href="/services" className="hover:text-gray-500">

              Services

            </Link>
            <Link href="/contact" className="hover:text-gray-500">

              Contact

            </Link>

          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
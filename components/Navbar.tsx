"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Logo from "../public/assets/logo.png";
import mobileLogo from "../public/assets/logo.svg";
import Button from "./Button";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMebuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const initialScrollY = window.scrollY;
    setIsAtTop(initialScrollY < 10);

    if (initialScrollY > 100) {
      setIsVisible(false);
    }

    setIsInitialized(true);

    let lastScrollY = initialScrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY < 10);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  const getBackgroundClass = () => {
    if (isAtTop) return "bg-transparent";
    if (!isAtTop) return "bg-dark/30 backdrop-blur-xl";
    return "bg-transparent";
  };

  const navLink = [
    {
      id: 1,
      href: "#за-играта",
      label: "За Играта",
    },
    {
      id: 2,
      href: "#карактери",
      label: "Карактери",
    },
    {
      id: 3,
      href: "#како-се-игра",
      label: "Како се Игра",
    },
    {
      id: 4,
      href: "#цена-и-достава",
      label: "Цена и Достава",
    },
    {
      id: 5,
      href: "#контакт",
      label: "Контакт",
    },
  ];

  if (!isInitialized) {
    return null;
  }

  return (
    <>
      <nav
        className={`fixed w-full transition-all duration-300 ease-in-out z-[999] ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } ${getBackgroundClass()}`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between py-8">
            <div className="lg:hidden relative w-6 h-5 flex items-center justify-center">
              <button
                type="button"
                className="relative z-10 overflow-hidden size-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMebuOpen)}
              >
                <div
                  className={`absolute w-full h-0.5 rounded-lg bg-white right-0 ${
                    isMobileMebuOpen
                      ? "top-1/2 -translate-y-1/2 rotate-45"
                      : "top-0 rotate-0"
                  } transition-all duration-300 ease-in-out`}
                ></div>
                <div
                  className={`absolute h-0.5 rounded-lg bg-white top-1/2 -translate-y-1/2 right-0 ${
                    isMobileMebuOpen ? "w-0" : "w-full"
                  } transition-all duration-300 ease-in-out`}
                ></div>
                <div
                  className={`absolute w-full h-0.5 rounded-lg bg-white right-0 ${
                    isMobileMebuOpen
                      ? "bottom-1/2 translate-y-1/2 -rotate-45"
                      : "bottom-0 rotate-0"
                  } transition-all duration-300 ease-in-out`}
                ></div>
              </button>
            </div>
            <Link href="/">
              <Image
                src={Logo}
                alt="company logo"
                className="max-xl:max-w-[200px] max-lg:hidden"
              />
              <Image
                src={mobileLogo}
                alt="logo"
                className="max-w-[100px] lg:hidden"
              />
            </Link>
            <Link
              href="#контакт"
              className="size-10 rounded-sm flex items-center justify-center bg-dark lg:hidden"
            >
              <FaShoppingCart className="text-white pr-0.5" />
            </Link>

            <div className="flex items-center gap-6 xl:gap-12 max-lg:hidden">
              {navLink.map((link) => (
                <div key={link.id}>
                  <Link
                    href={link.href}
                    className={`text-white/90 hover:text-white text-base xl:text-lg transition-colors duration-300 ease-in-out ${
                      pathname === link.href ? "text-white font-semibold" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
              <div className="w-fit">
                <Button text="Нарачај Сега!" link="контакт" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`h-screen bg-dark fixed top-0 left-0 lg:hidden transition-all duration-300 ease-in-out z-[99999] ${
          isMobileMebuOpen
            ? "w-[90%] sm:w-[70%] md:w-1/2 translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        } overflow-hidden`}
      >
        <div className="flex gap-10 px-6 py-10 items-center justify-between">
          <Image src={Logo} alt="company logo" />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMebuOpen)}
          >
            <IoClose className="text-white text-2xl" />
          </button>
        </div>
        <div className="px-6 flex flex-col gap-2 overflow-y-auto">
          {navLink.map((link) => (
            <div key={link.id}>
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white font-medium text-xl block py-2"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`absolute pointer-events-none left-0 top-0 w-full h-full bg-white/10 backdrop-blur-xl z-[9999] ${
          isMobileMebuOpen ? "opacity-100" : "opacity-0"
        } transition-all duration-300 ease-in-out`}
      ></div>
    </>
  );
};

export default Navbar;

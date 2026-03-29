import { useState } from "react";
import { assets } from "../assets/assets";
import { useEffect } from "react";
import LanguageSwitcher from "./helper/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { t } = useTranslation();

  function handleShowMobilMenu() {
    setShowMobileMenu(!showMobileMenu);
  }

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black/70 to-transparent">
    {/* <div className="absolute top-0 left-0 w-full z-10"> */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <div className="flex items-center">
          <img className="w-32" src={assets.penzion_logo} alt="Logo" />
        </div>
        <div className="hidden md:flex gap-7 text-white">
          <Link to="/#header" className="cursor-pointer hover:text-gray-400">
            {t("Navbar.Home")}
          </Link>
          <Link to="/#about" className="cursor-pointer hover:text-gray-400">
            {t("Navbar.About")}
          </Link>
          <Link
            to="/#accommodation"
            className="cursor-pointer hover:text-gray-400"
          >
            {t("Navbar.Accommodation")}
          </Link>
          <Link
            to="/#testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            {t("Navbar.Testimonials")}
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <button className="bg-white px-8 py-2 rounded-full">
            {t("Navbar.Sign Up")}
          </button>
        </div>
        <img
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu Icon"
          onClick={handleShowMobilMenu}
        />
      </div>
      {/* ---- mobile menu ---- */}
      <div
        className={`md:hidden ${showMobileMenu ? "fixed w-full" : "h-0 w-0"} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src={assets.cross_icon}
            className="w-6"
            alt="Cross Icon"
            onClick={handleShowMobilMenu}
          />
        </div>
        <div className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <Link
            to="/#header"
            className="px-4 py-2 rounded-full inline-block"
            onClick={handleShowMobilMenu}
          >
            {t("Navbar.Home")}
          </Link>
          <Link
            to="/#about"
            className="px-4 py-2 rounded-full inline-block"
            onClick={handleShowMobilMenu}
          >
            {t("Navbar.About")}
          </Link>
          <Link
            to="/#accommodation"
            className="px-4 py-2 rounded-full inline-block"
            onClick={handleShowMobilMenu}
          >
            {t("Navbar.Accommodation")}
          </Link>
          <Link
            to="/#testimonials"
            className="px-4 py-2 rounded-full inline-block"
            onClick={handleShowMobilMenu}
          >
            {t("Navbar.Testimonials")}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

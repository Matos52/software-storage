import { useState } from "react";
import { assets } from "../../assets/assets";
import { useEffect } from "react";
import LanguageSwitcher from "../helper/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import NavbarItem from "../ui/NavbarItem";

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
    <div className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black/80 to-transparent">
      {/* <div className="absolute top-0 left-0 w-full z-10"> */}
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 md:px-8 lg:px-10 bg-transparent">
        <Link to="/#header" className="flex items-center">
          <img className="w-32 md:w-40" src={assets.penzion_logo} alt="Logo" />
        </Link>
        <div className="hidden md:flex gap-7 text-white font-semibold">
          <NavbarItem to={"/#header"} title={t("Navbar.Home")} />
          <NavbarItem to={"/#about"} title={t("Navbar.About")} />
          <NavbarItem to={"/#accommodation"} title={t("Navbar.Accommodation")} />
          <NavbarItem to={"/#testimonials"} title={t("Navbar.Testimonials")} />
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
        className={`md:hidden ${
          showMobileMenu ? "fixed inset-0" : "hidden"
        } bg-white transition-all`}
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

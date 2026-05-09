import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import LanguageSwitcher from "../helper/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import NavbarItem from "../ui/NavbarItem";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const isHome = location.pathname === "/";
  const darkNavbar = !isHome || scrolled;

  function handleShowMobileMenu() {
    setShowMobileMenu((prev) => !prev);
  }

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const desktopNavbarClasses = darkNavbar
    ? "md:fixed md:bg-white/95 md:backdrop-blur-md md:shadow-sm"
    : "md:absolute md:bg-gradient-to-b from-black/30 to-transparent";

  return (
    <header
      className={`absolute top-0 left-0 z-50 w-full transition-all duration-300 ${desktopNavbarClasses}`}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4 sm:px-6 md:px-8 lg:px-10">
        <Link to="/#header" className="flex items-center">
          <img
            className="w-32 transition-all duration-300 md:w-40"
            src={darkNavbar ? assets.logo_black : assets.logo_white}
            alt="logo"
          />
        </Link>

        <nav
          className={`hidden items-center gap-7 text-base transition-colors duration-300 md:flex ${
            darkNavbar ? "text-gray-800" : "text-white"
          }`}
        >
          <NavbarItem
            to="/#header"
            title={t("Navbar.Home")}
            darkNavbar={darkNavbar}
          />
          <NavbarItem
            to="/#about"
            title={t("Navbar.About")}
            darkNavbar={darkNavbar}
          />
          <NavbarItem
            to="/#accommodation"
            title={t("Navbar.Accommodation")}
            darkNavbar={darkNavbar}
          />
          <NavbarItem
            to="/#gallery"
            title={t("Navbar.Gallery")}
            darkNavbar={darkNavbar}
          />
          <NavbarItem
            to="/#testimonials"
            title={t("Navbar.Testimonials")}
            darkNavbar={darkNavbar}
          />
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher darkNavbar={darkNavbar} />
          {/* <button
            className={`rounded-lg px-8 py-2 transition ${
              darkNavbar
                ? "bg-lime-700 text-white hover:bg-lime-800"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {t("Navbar.Sign Up")}
          </button> */}
        </div>

        <button
          type="button"
          onClick={handleShowMobileMenu}
          className="md:hidden"
          aria-label="Open menu"
        >
          <img
            src={darkNavbar ? assets.menu_icon_gray : assets.menu_icon_white}
            className="w-7 cursor-pointer"
            alt="Menu Icon"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-white transition-transform duration-300 md:hidden ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6">
          <img className="w-32" src={assets.logo_black} alt="logo" />
          <button
            type="button"
            onClick={handleShowMobileMenu}
            aria-label="Close menu"
          >
            <img src={assets.cross_icon} className="w-6" alt="Cross Icon" />
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 px-5 text-lg font-medium text-gray-900">
          <Link
            to="/#header"
            className="px-4 py-2"
            onClick={handleShowMobileMenu}
          >
            {t("Navbar.Home")}
          </Link>
          <Link
            to="/#about"
            className="px-4 py-2"
            onClick={handleShowMobileMenu}
          >
            {t("Navbar.About")}
          </Link>
          <Link
            to="/#accommodation"
            className="px-4 py-2"
            onClick={handleShowMobileMenu}
          >
            {t("Navbar.Accommodation")}
          </Link>
          <Link
            to="/#gallery"
            className="px-4 py-2"
            onClick={handleShowMobileMenu}
          >
            {t("Navbar.Gallery")}
          </Link>
          <Link
            to="/#testimonials"
            className="px-4 py-2"
            onClick={handleShowMobileMenu}
          >
            {t("Navbar.Testimonials")}
          </Link>

          <div className="mt-4">
            <LanguageSwitcher darkNavbar={true} />
          </div>
        </div>
      </div>
    </header>
  );
}

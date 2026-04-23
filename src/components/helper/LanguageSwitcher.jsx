import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
  localStorage.setItem("lang", lang);
};

export default function LanguageSwitcher({ darkNavbar }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("sk") ? "SK" : "EN";

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm
  ${
    darkNavbar
      ? "border border-gray-200 bg-white text-gray-800 hover:bg-gray-100"
      : "border border-white/30 bg-white/10 text-white hover:bg-white/20"
  }`}
      >
        <span>{currentLang}</span>
        <ChevronDownIcon className="h-4 w-4" />
      </MenuButton>

      <MenuItems
        modal={false}
        className="absolute right-0 mt-2 w-36 rounded-2xl border border-gray-100 bg-white p-2 shadow-lg focus:outline-none"
      >
        <MenuItem>
          <button
            onClick={() => changeLanguage("sk")}
            className="block w-full rounded-xl px-3 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            Slovenčina
          </button>
        </MenuItem>

        <MenuItem>
          <button
            onClick={() => changeLanguage("en")}
            className="block w-full rounded-xl px-3 py-2 text-left text-gray-700 hover:bg-gray-100"
          >
            English
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}

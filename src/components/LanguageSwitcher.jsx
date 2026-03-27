import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import i18n from "i18next";

const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
  localStorage.setItem("lang", lang);
};

export default function LanguageSwitcher() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex items-center gap-1 rounded-lg px-2 py-1 bg-gray-600 hover:bg-gray-500 text-white">
        <span>🌍</span>
        <ChevronDownIcon className="h-4 w-4" />
      </MenuButton>

      <MenuItems
        modal={false}
        className="absolute right-0 mt-2 w-24 rounded-lg border bg-white shadow-lg focus:outline-none"
      >
        <MenuItem>
          <button
            onClick={() => changeLanguage("sk")}
            className="block w-full px-4 py-2 text-left data-focus:bg-gray-100 hover:text-gray-600"
          >
            SK
          </button>
        </MenuItem>

        <MenuItem>
          <button
            onClick={() => changeLanguage("en")}
            className="block w-full px-4 py-2 text-left data-focus:bg-gray-100 hover:text-gray-600"
          >
            EN
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
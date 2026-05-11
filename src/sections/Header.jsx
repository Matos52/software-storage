import Navbar from "../components/navigation/Navbar";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Button from "../components/ui/Button";

export default function Header() {
  const { t } = useTranslation();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/pieniny3.png')" }}
      id="Header"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <h2 className="text-5xl sm:text-6xl md:text-6xl xxl:text-7xl inline-block max-w-3xl font-semibold pt-20">
          {t("Header.Main Text")}
        </h2>
        <div className="space-x-6 mt-16">
          <a
            href="#accommodation"
            className="border border-white text-white px-7 py-3 rounded-md hover:bg-white hover:text-gray-900 transition duration-300"
          >
            {t("Header.Accommodation")}
          </a>
          <Button title={t("Header.Contact")} href="#contact" />
        </div>
      </motion.div>
    </div>
  );
}

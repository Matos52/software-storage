import { useTranslation } from "react-i18next";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";

export default function About() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      <SectionTitle
        title1={t("About.Title1")}
        title2={t("About.Title2")}
        slogan={t("About.Slogan")}
      />
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img src={assets.brand_img} alt="Brand Image" className="w-full sm:w-1/2 max-w-lg" />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">2</p>
              <p>{t("About.Guesthouses")}</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">2</p>
              <p>{t("About.Apartments")}</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>{t("About.Beds")}</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>{t("About.Years")}</p>
            </div>
          </div>
          <p className="my-10 max-w-lg text-justify">{t("About.Description")}</p>
          <a href="#accommodation" className="bg-lime-700 hover:bg-lime-800 text-white px-6 py-2 rounded-md transition">
            {t("About.Learn more")}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

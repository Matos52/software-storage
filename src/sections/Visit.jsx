import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/ui/SectionTitle";

const Visit = () => {

const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-12 md:p-14 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      <SectionTitle
        title1={t("Visit.Title1")}
        title2={t("Visit.Title2")}
        slogan={t("Visit.Slogan")}
      />
    </motion.div>
  );
};

export default Visit;

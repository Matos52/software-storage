import { accommodations } from "../assets/assets";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/ui/SectionTitle";
import AccommodationCard from "../components/ui/AccommodationCard";

export default function Accommodation() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-12 md:p-14 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      <SectionTitle
        title1={t("Accommodation.Title1")}
        title2={t("Accommodation.Title2")}
        slogan={t("Accommodation.Slogan")}
      />

      {/* accommodations container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {accommodations.map((item) => (
          <AccommodationCard
            key={item.slug}
            image={item.images[0]}
            title={t(`${item.translationKey}.Title`)}
            rooms={t(`${item.translationKey}.Rooms`)}
            beds={t(`${item.translationKey}.Beds`)}
            extraBeds={t(`${item.translationKey}.Extra Beds`)}
            slug={item.slug}
          />
        ))}
      </div>
    </motion.div>
  );
}

import { useEffect, useState } from "react";
import { accommodations, assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/ui/SectionTitle";
import AccommodationCard from "../components/ui/AccommodationCard";

export default function Accommodation() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    function updateCardsToShow() {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    }

    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  function nextProject() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  }

  function prevProject() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1,
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      <SectionTitle
        title1={t("Accommodation.Title1")}
        title2={t("Accommodation.Title2")}
        slogan={t("Accommodation.Slogan")}
      />

      {/* slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
          onClick={prevProject}
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Project"
          onClick={nextProject}
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* project slider container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

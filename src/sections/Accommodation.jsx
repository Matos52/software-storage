import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import project_img_1 from "../assets/project_img_1.jpg";
import project_img_2 from "../assets/project_img_2.jpg";
import project_img_3 from "../assets/project_img_3.jpg";
import project_img_4 from "../assets/project_img_4.jpg";
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
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <AccommodationCard
          image={project_img_1}
          title={t("Accommodation.Penzion1.Title")}
          rooms={t("Accommodation.Penzion1.Rooms")}
          beds={t("Accommodation.Penzion1.Beds")}
          extraBeds={t("Accommodation.Penzion1.Extra Beds")}
          slug="guesthouse"
        />

        <AccommodationCard
          image={project_img_2}
          title={t("Accommodation.Penzion2.Title")}
          rooms={t("Accommodation.Penzion2.Rooms")}
          beds={t("Accommodation.Penzion2.Beds")}
          extraBeds={t("Accommodation.Penzion2.Extra Beds")}
          slug="cottage"
        />

        <AccommodationCard
          image={project_img_3}
          title={t("Accommodation.Apartment1.Title")}
          rooms={t("Accommodation.Apartment1.Rooms")}
          beds={t("Accommodation.Apartment1.Beds")}
          extraBeds={t("Accommodation.Apartment1.Extra Beds")}
          slug="apartment1"
        />

        <AccommodationCard
          image={project_img_4}
          title={t("Accommodation.Apartment2.Title")}
          rooms={t("Accommodation.Apartment2.Rooms")}
          beds={t("Accommodation.Apartment2.Beds")}
          extraBeds={t("Accommodation.Apartment2.Extra Beds")}
          slug="apartment2"
        />
      </div>
    </motion.div>
  );
}

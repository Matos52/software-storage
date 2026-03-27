import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import project_img_1 from "../assets/project_img_1.jpg";
import project_img_2 from "../assets/project_img_2.jpg";
import project_img_3 from "../assets/project_img_3.jpg";
import project_img_4 from "../assets/project_img_4.jpg";

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
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Accommodation"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        {t("Accommodation.Title1")}{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">{t("Accommodation.Title2")}</span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">{t("Accommodation.Slogan")}</p>

      {/* slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button className="p-3 bg-gray-200 rounded mr-2" aria-label="Previous Project" onClick={prevProject}>
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button className="p-3 bg-gray-200 rounded mr-2" aria-label="Next Project" onClick={nextProject}>
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* project slider container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="relative">
          <img
            src={project_img_1}
            alt={t("Accommodation.Penzion1.Title")}
            className="w-full h-auto object-cover mb-14"
          />

          <div className="absolute left-0 right-0 bottom-5 flex justify-center">
            <div className="bg-white w-3/4 px-4 py-3 shadow-md">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">{t("Accommodation.Penzion1.Title")}</h2>
              <p className="text-gray-500 text-sm">{t("Accommodation.Penzion1.Rooms")}</p>
              <p className="text-gray-500 text-sm">
                {t("Accommodation.Penzion1.Beds")} <span className="px-1">+</span>{" "}
                {t("Accommodation.Penzion1.Extra Beds")}
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src={project_img_2}
            alt={t("Accommodation.Penzion2.Title")}
            className="w-full h-auto object-cover mb-14"
          />

          <div className="absolute left-0 right-0 bottom-5 flex justify-center">
            <div className="bg-white w-3/4 px-4 py-3 shadow-md">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">{t("Accommodation.Penzion2.Title")}</h2>
              <p className="text-gray-500 text-sm">{t("Accommodation.Penzion2.Rooms")}</p>
              <p className="text-gray-500 text-sm">
                {t("Accommodation.Penzion2.Beds")} <span className="px-1">+</span>{" "}
                {t("Accommodation.Penzion2.Extra Beds")}
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src={project_img_3}
            alt={t("Accommodation.Apartment1.Title")}
            className="w-full h-auto object-cover mb-14"
          />

          <div className="absolute left-0 right-0 bottom-5 flex justify-center">
            <div className="bg-white w-3/4 px-4 py-3 shadow-md">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">{t("Accommodation.Apartment1.Title")}</h2>
              <p className="text-gray-500 text-sm">{t("Accommodation.Apartment1.Rooms")}</p>
              <p className="text-gray-500 text-sm">
                {t("Accommodation.Apartment1.Beds")} <span className="px-1">+</span>{" "}
                {t("Accommodation.Apartment1.Extra Beds")}
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src={project_img_4}
            alt={t("Accommodation.Apartment2.Title")}
            className="w-full h-auto object-cover mb-14"
          />

          <div className="absolute left-0 right-0 bottom-5 flex justify-center">
            <div className="bg-white w-3/4 px-4 py-3 shadow-md">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">{t("Accommodation.Apartment2.Title")}</h2>
              <p className="text-gray-500 text-sm">{t("Accommodation.Apartment2.Rooms")}</p>
              <p className="text-gray-500 text-sm">
                {t("Accommodation.Apartment2.Beds")} <span className="px-1">+</span>{" "}
                {t("Accommodation.Apartment2.Extra Beds")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

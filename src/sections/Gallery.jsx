import { useTranslation } from "react-i18next";
import { allImages } from "../assets/assets";
import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";

export default function Gallery() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("guesthouse");

  const categories = [
    { key: "guesthouse", label: t("Gallery.Guesthouse") },
    { key: "cottage", label: t("Gallery.Cottage") },
    { key: "apartment1", label: t("Gallery.Apartment1") },
    { key: "apartment2", label: t("Gallery.Apartment2") },
    { key: "exterior", label: t("Gallery.Exterior") },
  ];

  const activeImages = allImages[activeCategory] || [];

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-12 md:p-14 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      <SectionTitle
        title1={t("Gallery.Title1")}
        title2={t("Gallery.Title2")}
        slogan={t("Gallery.Slogan")}
      />

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`rounded-lg px-4 py-2 text-sm transition ${
              activeCategory === category.key
                ? "bg-lime-700 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <PhotoProvider>
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3">
          {activeImages.map((img, index) => (
            <PhotoView key={`${activeCategory}-${index}`} src={img}>
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="h-28 w-full cursor-pointer rounded-xl object-cover transition hover:opacity-90 sm:h-40 md:h-44"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </motion.div>
  );
}

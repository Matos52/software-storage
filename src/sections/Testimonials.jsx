import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto p-12 md:p-14 lg:px-32 w-full overflow-hidden"
    >
      <SectionTitle
        title1={t("Testimonials.Title1")}
        title2={t("Testimonials.Title2")}
        slogan={t("Testimonials.Slogan")}
      />

      <div className="flex flex-wrap justify-center gap-6">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] border shadow-lg rounded-lg px-6 py-8 text-center"
          >
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="Star Icon" />
              ))}
            </div>
            <p className="text-gray-700">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

import { useParams } from "react-router-dom";
import { accommodations } from "../assets/assets";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/ui/SectionTitle";
import location_img from "../assets/icons/map-pin.svg";

const AccommodationDetailPage = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  const accommodation = accommodations.find(
    (item) => item.slug === slug
  );

  if (!accommodation) return <div>Not found</div>;

  return (
    <section className="pt-44 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Title */}
        <SectionTitle
          title1={t(`${accommodation.translationKey}.Title1`)}
          title2={t(`${accommodation.translationKey}.Title2`)}
        />

        {/* Info row */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-gray-500 mt-4 text-sm md:text-base">
          
          <div className="flex items-center gap-2">
            <img src={location_img} alt="location" className="w-5 h-5" />
            <span>{t("Accommodation.Location")}</span>
          </div>

          <span className="hidden md:inline">|</span>

          <span>
            {t(`${accommodation.translationKey}.Rooms`)}
          </span>

          <span className="hidden md:inline">|</span>

          <span>
            {t(`${accommodation.translationKey}.Beds`)} + {" "}
            {t(`${accommodation.translationKey}.Extra Beds`)}
          </span>
        </div>

        {/* Hero image */}
        <div className="mt-10">
          <img
            src={accommodation.images[0]}
            alt="Accommodation"
            className="w-full h-[420px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Description */}
        <div className="mt-10 max-w-3xl mx-auto text-gray-600 leading-relaxed text-center">
          <p>{t(accommodation.description)}</p>
        </div>

      </div>
    </section>
  );
};

export default AccommodationDetailPage;
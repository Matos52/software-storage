import { useParams } from "react-router-dom";
import { accommodations, assets } from "../assets/assets";
import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import PricingGuesthouse from "../components/ui/PricingGuesthouse";
import PricingApartment from "../components/ui/PricingApartment";
import AccommodationCompactCard from "../components/ui/AccommodationCompactCard";
import SectionTitle from "../components/ui/SectionTitle";

const AccommodationDetailPage = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  const accommodation = accommodations.find((item) => item.slug === slug);

  if (!accommodation) {
    return <div className="pt-32 text-center">Not found</div>;
  }

  const galleryImages = accommodation.images;

  const features = [
    { icon: assets.bed_icon, alt: "bed", label: t("Accommodation.Tags.0") },
    { icon: assets.bath_icon, alt: "bath", label: t("Accommodation.Tags.1") },
    {
      icon: assets.kitchen_icon,
      alt: "kitchen",
      label: t("Accommodation.Tags.2"),
    },
    {
      icon: assets.fireplace_icon,
      alt: "fireplace",
      label: t("Accommodation.Tags.3"),
    },
    {
      icon: assets.television_icon,
      alt: "television",
      label: t("Accommodation.Tags.4"),
    },
    {
      icon: assets.outdoor_icon,
      alt: "outdoor",
      label: t("Accommodation.Tags.5"),
    },
    {
      icon: assets.garden_icon,
      alt: "garden",
      label: t("Accommodation.Tags.6"),
    },
    {
      icon: assets.parking_icon,
      alt: "parking",
      label: t("Accommodation.Tags.7"),
    },
    {
      icon: assets.bicycle_icon,
      alt: "bicycle",
      label: t("Accommodation.Tags.8"),
    },
    {
      icon: assets.location_icon,
      alt: "location",
      label: t("Accommodation.Tags.9"),
    },
  ];

  return (
    <section className="bg-gray-50 pt-32 pb-16 md:pt-48 md:pb-20">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-10">
        <PhotoProvider>
          <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            {t(`${accommodation.translationKey}.Title`)}
          </h1>

          {/* Hero gallery */}
          <div className="mt-6 grid grid-cols-1 gap-3 lg:grid-cols-8 lg:auto-rows-[180px]">
            {galleryImages[0] && (
              <PhotoView src={galleryImages[0]}>
                <img
                  src={galleryImages[0]}
                  alt="Main accommodation view"
                  className="h-[280px] w-full cursor-pointer rounded-2xl object-cover sm:h-[360px] lg:col-span-3 lg:row-span-2 lg:h-full"
                />
              </PhotoView>
            )}

            {galleryImages[1] && (
              <PhotoView src={galleryImages[1]}>
                <img
                  src={galleryImages[1]}
                  alt="Accommodation view 2"
                  className="hidden h-full w-full cursor-pointer rounded-2xl object-cover lg:col-span-3 lg:row-span-2 lg:block"
                />
              </PhotoView>
            )}

            {galleryImages[2] && (
              <PhotoView src={galleryImages[2]}>
                <img
                  src={galleryImages[2]}
                  alt="Accommodation view 3"
                  className="hidden h-full w-full cursor-pointer rounded-2xl object-cover lg:col-span-2 lg:block"
                />
              </PhotoView>
            )}

            {galleryImages[3] && (
              <PhotoView src={galleryImages[3]}>
                <img
                  src={galleryImages[3]}
                  alt="Accommodation view 4"
                  className="hidden h-full w-full cursor-pointer rounded-2xl object-cover lg:col-span-2 lg:block"
                />
              </PhotoView>
            )}
          </div>

          {/* Info row */}
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500 md:text-base">
            <div className="flex items-center gap-2">
              <img
                src={assets.location_icon}
                alt="location"
                className="h-4 w-4"
              />
              <span>{t("Accommodation.Location")}</span>
            </div>

            <span className="hidden text-gray-300 sm:inline">|</span>

            <span>{t(`${accommodation.translationKey}.Rooms`)}</span>

            <span className="hidden text-gray-300 sm:inline">|</span>

            <span>
              {t(`${accommodation.translationKey}.Beds`)} +{" "}
              {t(`${accommodation.translationKey}.Extra Beds`)}
            </span>

            <span className="hidden text-gray-300 md:inline">|</span>

            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>4.5</span>
            </div>
          </div>

          {/* Description, Features, Gallery + Pricing, Other Options */}
          <div className="mt-10 grid grid-cols-1 gap-8 items-start lg:grid-cols-3">
            {/* Left side */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <div>
                <h2 className="mb-4 text-xl font-semibold text-gray-900 md:text-2xl">
                  {t("Accommodation.Title3")}
                </h2>

                <div className="space-y-4 text-left leading-7 text-gray-700 md:text-justify">
                  <p>{t(`${accommodation.translationKey}.Desc1`)}</p>
                  <p>{t(`${accommodation.translationKey}.Desc2`)}</p>
                  <p>{t(`${accommodation.translationKey}.Desc3`)}</p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="mb-4 text-xl font-semibold text-gray-900 md:text-2xl">
                  {t("Accommodation.Title4")}
                </h2>

                <div className="grid grid-cols-4 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col text-sm md:text-base items-center justify-center gap-1 rounded-2xl border border-gray-100 bg-white p-2 md:p-4 text-center text-gray-700"
                    >
                      <img src={feature.icon} alt={feature.alt} />
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Gallery */}
              <div className="pb-2">
                <h2 className="mb-4 text-xl font-semibold text-gray-900 md:text-2xl">
                  {t("Accommodation.Title5")}
                </h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {galleryImages.map((img, index) => (
                    <PhotoView key={index} src={img}>
                      <img
                        src={img}
                        alt={`Gallery image ${index + 1}`}
                        className="h-36 sm:h-40 md:h-44 w-full cursor-pointer rounded-xl object-cover transition hover:opacity-90"
                      />
                    </PhotoView>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="lg:col-span-1">
              {/* Pricing */}
              <div className="space-y-6 lg:sticky lg:top-28">
                {(accommodation.slug === "guesthouse" ||
                  accommodation.slug === "cottage") && (
                  <PricingGuesthouse accommodation={accommodation} />
                )}
                {(accommodation.slug === "garden-view-apartment" ||
                  accommodation.slug === "mountain-view-apartment") && (
                  <PricingApartment accommodation={accommodation} />
                )}
                {/* Other options */}
                <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h2 className="mb-6 text-xl md:text-2xl font-semibold text-gray-900">
                    Other options
                  </h2>
                  {/* accommodations container */}
                  <div className="grid grid-cols-1 gap-4">
                    {accommodations
                      .filter((item) => item.slug !== accommodation.slug)
                      .map((item) => (
                        <AccommodationCompactCard
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
                </div>
              </div>
            </div>
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
};

export default AccommodationDetailPage;

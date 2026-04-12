import { useParams } from "react-router-dom";
import { accommodations, assets } from "../assets/assets";
import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";

const AccommodationDetailPage = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  const accommodation = accommodations.find((item) => item.slug === slug);

  if (!accommodation) return <div>Not found</div>;

  return (
    <section className="pt-32 md:pt-48 pb-16 md:pb-20 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          {t(`${accommodation.translationKey}.Title`)}
        </h1>

        {/* Info row */}
        <div className="mt-3 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3 text-sm md:text-base text-gray-500">
          <div className="flex items-center gap-2">
            <img
              src={assets.location_icon}
              alt="location"
              className="w-4 h-4"
            />
            <span>{t("Accommodation.Location")}</span>
          </div>

          <span className="hidden sm:inline text-gray-300">|</span>

          <span>{t(`${accommodation.translationKey}.Rooms`)}</span>

          <span className="hidden sm:inline text-gray-300">|</span>

          <span>
            {t(`${accommodation.translationKey}.Beds`)} +{" "}
            {t(`${accommodation.translationKey}.Extra Beds`)}
          </span>

          <span className="hidden md:inline text-gray-300">|</span>

          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>4.5</span>
          </div>
        </div>

        {/* Hero gallery */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-8 gap-3 lg:auto-rows-[180px]">
          <img
            src={accommodation.images[0]}
            alt="Main"
            className="w-full h-[280px] sm:h-[360px] lg:h-full lg:col-span-3 lg:row-span-2 object-cover rounded-2xl"
          />

          <img
            src={accommodation.images[1]}
            alt="Second"
            className="hidden lg:block lg:col-span-3 lg:row-span-2 w-full h-full object-cover rounded-2xl"
          />

          <img
            src={accommodation.images[2]}
            alt="Third"
            className="hidden lg:block lg:col-span-2 w-full h-full object-cover rounded-2xl"
          />

          <img
            src={accommodation.images[3]}
            alt="Fourth"
            className="hidden lg:block lg:col-span-2 w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Main content + side card */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left content */}
          <div className="lg:col-span-2">
            <div className="pb-8 border-b border-gray-200">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                About this space
              </h2>

              <div className="text-gray-600 leading-7 text-left md:text-justify space-y-4">
                <p>{t(`${accommodation.translationKey}.Desc1`)}</p>
                <p>{t(`${accommodation.translationKey}.Desc2`)}</p>
                <p>{t(`${accommodation.translationKey}.Desc3`)}</p>
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                The space
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 border border-gray-100">
                  <img src={assets.bed_icon} alt="bed" />
                  <span>Cozy rooms</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 border border-gray-100">
                  <img src={assets.bath_icon} alt="bath" />
                  <span>Private bathroom</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 border border-gray-100">
                  <img src={assets.kitchen_icon} alt="kitchen" />
                  <span>Equipped kitchen</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 border border-gray-100">
                  <img src={assets.fireplace_icon} alt="fireplace" />
                  <span>Fireplace</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 border border-gray-100">
                  <img src={assets.television_icon} alt="television" />
                  <span>Television</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 border border-gray-100">
                  <img src={assets.outdoor_icon} alt="outdoor" />
                  <span>Outdoor seating</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 border border-gray-100">
                  <img src={assets.garden_icon} alt="garden" />
                  <span>Garden</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 border border-gray-100">
                  <img src={assets.parking_icon} alt="parking" />
                  <span>Private parking</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 border border-gray-100">
                  <img src={assets.bicycle_icon} alt="bycicle" />
                  <span>Bicycle storage</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 border border-gray-100">
                  <img src={assets.location_icon} alt="location" />
                  <span>Great location</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right sticky card */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="mb-6">
                <p className="text-2xl font-semibold text-gray-900">
                  €80
                  <span className="text-base font-normal text-gray-500">
                    {" "}
                    / night
                  </span>
                </p>
              </div>

              <div className="space-y-3">
                <div className="border border-gray-200 rounded-2xl p-4">
                  Check-in
                </div>
                <div className="border border-gray-200 rounded-2xl p-4">
                  Check-out
                </div>
                <div className="border border-gray-200 rounded-2xl p-4">
                  Guests
                </div>
              </div>

              <button className="mt-5 w-full bg-[#6B8E23] hover:bg-[#5a7a1d] text-white py-3 rounded-2xl transition">
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationDetailPage;

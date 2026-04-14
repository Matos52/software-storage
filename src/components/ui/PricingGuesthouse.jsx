import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PricingGuesthouse = ({ accommodation }) => {
  const { t } = useTranslation();

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm lg:sticky lg:top-28">
      <h3 className="mb-6 text-2xl font-semibold text-gray-900">
        {t(`${accommodation.translationKey}.Pricing.0`)}
      </h3>

      <div className="mb-8 space-y-4 text-base text-gray-700">
        <div className="border-b border-gray-100 pb-4 space-y-3">
          <p className="mb-1 font-medium text-gray-900">
            {t(`${accommodation.translationKey}.Pricing.1`)}
          </p>

          <div className="flex justify-between">
            <span>{t(`${accommodation.translationKey}.Pricing.2`)}</span>
            <span className="text-gray-900">
              {t(`${accommodation.translationKey}.Pricing.3`)}
            </span>
          </div>

          <div className="flex justify-between">
            <span>{t(`${accommodation.translationKey}.Pricing.4`)}</span>
            <span className="text-gray-900">
              {t(`${accommodation.translationKey}.Pricing.5`)}
            </span>
          </div>

          <div className="flex justify-between">
            <span>{t(`${accommodation.translationKey}.Pricing.6`)}</span>
            <span className="text-gray-900">
              {t(`${accommodation.translationKey}.Pricing.7`)}
            </span>
          </div>
        </div>

        <div className="border-b border-gray-100 pb-4">
          <p className="mb-2 font-medium text-gray-900">
            {t(`${accommodation.translationKey}.Pricing.8`)}
          </p>
          <div className="flex justify-between">
            <span>{t(`${accommodation.translationKey}.Pricing.9`)}</span>
            <span className="text-gray-900">
              {t(`${accommodation.translationKey}.Pricing.10`)}
            </span>
          </div>
        </div>

        <div className="border-b border-gray-100 pb-4">
          <p className="mb-2 font-medium text-gray-900">
            {t(`${accommodation.translationKey}.Pricing.11`)}
          </p>
          <div className="flex justify-between">
            <span>{t(`${accommodation.translationKey}.Pricing.12`)}</span>
            <span className="text-gray-900">
              {t(`${accommodation.translationKey}.Pricing.13`)}
            </span>
          </div>
        </div>

        <div>
          <p className="mb-2 font-medium text-gray-900">
            {t(`${accommodation.translationKey}.Pricing.14`)}
          </p>
          <p>{t(`${accommodation.translationKey}.Pricing.15`)}</p>
        </div>
      </div>

      <p className="mb-5 text-sm text-gray-500">
        {t(`${accommodation.translationKey}.Pricing.16`)}
      </p>

      <Link
        to="/#contact"
        className="inline-block w-full rounded-2xl bg-lime-700 px-6 py-3 text-center text-white transition hover:bg-lime-800"
      >
        {t(`${accommodation.translationKey}.Pricing.17`)}
      </Link>
    </div>
  );
};

export default PricingGuesthouse;

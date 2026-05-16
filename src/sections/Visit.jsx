import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/ui/SectionTitle";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactDetails } from "../assets/assets";

const Visit = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-12 md:p-14 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      <SectionTitle
        title1={t("Visit.Title1")}
        title2={t("Visit.Title2")}
        slogan={t("Visit.Slogan")}
      />
      <div className="grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-[0.8fr_1.6fr]">
        {/* Left side */}
        <div>
          <p className="mb-2 text-sm lg:text-lg font-medium tracking-widest text-lime-700">
            {t("Visit.Contact")}
          </p>

          <h3 className="mb-8 text-xl lg:text-3xl font-semibold text-gray-900">
            {t("Visit.WeAreHere")}
          </h3>

          <div className="space-y-6">
            {/* Phone */}
            <a
              href={`tel:${contactDetails.phoneNumber}`}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <Phone className="mt-1 h-5 w-5 shrink-0 text-lime-600" />

              <div>
                <p className="text-sm text-gray-500">{t("Visit.Phone")}</p>

                <p className="font-medium text-gray-900">{contactDetails.phoneNumber}</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contactDetails.email}`}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <Mail className="mt-1 h-5 w-5 shrink-0 text-lime-600" />

              <div>
                <p className="text-sm text-gray-500">{t("Visit.Email")}</p>

                <p className="font-medium text-gray-900 break-words">
                  {contactDetails.email}
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-lime-600" />

              <div>
                <p className="text-sm text-gray-500">{t("Visit.Address")}</p>

                <p className="font-medium text-gray-900">
                  {contactDetails.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - map */}
        <div className="overflow-hidden rounded-3xl shadow-sm">
          <iframe
            src={contactDetails.googleLink}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="min-h-[350px] w-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Visit;

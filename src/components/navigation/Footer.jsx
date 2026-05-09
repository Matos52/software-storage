import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useTranslation } from "react-i18next";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { SiBookingdotcom } from "react-icons/si";

export default function Footer() {
  const { t } = useTranslation();

  const instagramLink = "https://www.instagram.com/chalupa_pod_troma_korunami/";
  const facebookLink =
    "https://www.facebook.com/people/Penzi%C3%B3n-pod-Troma-Korunami-Pieniny/100057196040800/#";
  const bookingLink =
    "https://www.booking.com/hotel/sk/penzion-pod-troma-korunami.sk.html?aid=318615&label=Slovak_SK_28510485265-RZO7UmCwJy5j6kmxWF9cOgS637942122695%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55816998252%3Atidsa-322194489551%3Alp9195436%3Ali%3Adec%3Adm%3Aag28510485265%3Acmp108543985&sid=463d0d610913987c865b89465dc5caa1&dest_id=-841335&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1778324331&srpvid=44224d3352330234&type=total&ucfs=1&";
  const phoneNumber = "+421 911 653 886";
  const email = "zuzumichlikova@gmail.com";
  const address = "Červený Kláštor 41, 059 06";

  const links = [
    { to: "/#header", label: t("Navbar.Home") },
    { to: "/#about", label: t("Navbar.About") },
    { to: "/#accommodation", label: t("Navbar.Accommodation") },
    { to: "/#testimonials", label: t("Navbar.Testimonials") },
    { to: "/#contact", label: t("Header.Contact Us") },
  ];

  return (
    <footer className="w-full overflow-hidden bg-zinc-900 px-4 pt-12 text-white sm:px-6 md:px-20 lg:px-32">
      <div className="container mx-auto">
        {/* Mobile */}
        <div className="md:hidden">
          {/* Logo */}
          <div className="mb-10">
            <Link to="/#header" className="inline-flex items-center">
              <img className="w-32" src={assets.logo_white} alt="logo" />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-stone-300">
              {t("Footer.Description")}
            </p>
          </div>

          {/* Discover + Contact */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4 text-lg font-semibold">
                {t("Footer.Discover")}
              </h3>

              <ul className="space-y-2 text-sm text-stone-300">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">
                {t("Footer.Contact")}
              </h3>

              <div className="mb-4 space-y-3 text-sm text-stone-300">
                <a
                  href="tel:+421911653886"
                  className="flex items-center gap-2 transition hover:text-lime-700"
                >
                  <Phone className="h-[18px] w-[18px] shrink-0 text-lime-600" />
                  <span>{phoneNumber}</span>
                </a>

                <a
                  href="mailto:zuzumichlikova@gmail.com"
                  className="flex items-center gap-2 transition hover:text-lime-700"
                >
                  <Mail className="h-[18px] w-[18px] shrink-0 text-lime-600" />
                  <span className="break-words">{email}</span>
                </a>

                <div className="flex items-start gap-2">
                  <MapPin className="mt-1 h-[18px] w-[18px] shrink-0 text-lime-600" />
                  <p>{address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 transition hover:text-lime-700"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 transition hover:text-lime-700"
                >
                  <FaFacebookF size={18} />
                </a>

                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 transition hover:text-lime-700"
                >
                  <SiBookingdotcom size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-10">
          {/* Logo */}
          <div>
            <Link to="/#header" className="inline-flex items-center">
              <img className="w-40" src={assets.logo_white} alt="logo" />
            </Link>

            <p className="mt-4 text-stone-300">{t("Footer.Description")}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {t("Footer.Contact")}
            </h3>

            <div className="space-y-3 text-stone-300 mb-4">
              <a
                href="tel:+421911653886"
                className="flex items-center gap-2 transition hover:text-lime-700"
              >
                <Phone className="h-[18px] w-[18px] text-lime-600" />
                <span>{phoneNumber}</span>
              </a>

              <a
                href="mailto:zuzumichlikova@gmail.com"
                className="flex items-center gap-2 break-words transition hover:text-lime-700"
              >
                <Mail className="h-[18px] w-[18px] text-lime-600" />
                <span>{email}</span>
              </a>

              <div className="flex items-start gap-2">
                <MapPin className="mt-1 h-[18px] w-[18px] shrink-0 text-lime-600" />
                <p>{address}</p>
              </div>
            </div>
            {/* Social media */}
            <div className="flex items-center gap-4">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 transition hover:text-pink-500"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 transition hover:text-blue-500"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href={bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 transition hover:text-blue-700"
              >
                <SiBookingdotcom size={20} />
              </a>
            </div>
          </div>

          {/* Discover */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              {t("Footer.Discover")}
            </h3>

            <ul className="space-y-2 text-stone-300">
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 py-5 text-center text-sm text-stone-400">
          © 2026 Chalupy pod troma korunami. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

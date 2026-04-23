import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/ui/SectionTitle";

useState;

export default function Contact() {
  const { t } = useTranslation();
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "50ec27a4-471c-42f2-956b-28f54453a2ad");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-12 md:p-14 lg:px-32 w-full overflow-hidden"
    >
      <SectionTitle
        title1={t("Contact.Title1")}
        title2={t("Contact.Title2")}
        slogan={t("Contact.Slogan")}
      />

      <form
        className="max-w-2xl mx-auto text-gray-600 px-4 sm:px-0"
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-left">
            {t("Contact.First name")}
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder={t("Contact.First name")}
              required
            />
          </div>

          <div className="text-left">
            {t("Contact.Last name")}
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="LastName"
              placeholder={t("Contact.Last name")}
              required
            />
          </div>

          <div className="text-left">
            {t("Contact.Phone number")}
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Phone"
              placeholder={t("Contact.Phone number")}
              required
            />
          </div>

          <div className="text-left">
            {t("Contact.Email")}
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="Email"
              placeholder={t("Contact.Email")}
              required
            />
          </div>
        </div>

        <div className="mt-6 text-left">
          {t("Contact.Message")}
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder={t("Contact.Message")}
            required
          ></textarea>
        </div>

        <button className="bg-lime-700 hover:bg-lime-800 text-white px-8 py-3 rounded-md mt-6 transition">
          {result ? result : t("Contact.Button")}
        </button>
      </form>
    </motion.div>
  );
}

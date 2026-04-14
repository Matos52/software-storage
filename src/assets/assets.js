import logo from "./icons/general/logo.svg";
import logo_dark from "./icons/general/logo_dark.svg";
import cross_icon from "./icons/general/cross_icon.svg";
import menu_icon from "./icons/general/menu_icon.svg";
import star_icon from "./icons/general/star_icon.svg";
import left_arrow from "./icons/general/left_arrow.svg";
import right_arrow from "./icons/general/right_arrow.svg";
import location_icon from "./icons/accommodation/map-pin.svg"
import bed_icon from "./icons/accommodation/bed-double.svg"
import bicycle_icon from "./icons/accommodation/bicycle.svg"
import fireplace_icon from "./icons/accommodation/brick-wall-fire.svg"
import kitchen_icon from "./icons/accommodation/cooking-pot.svg"
import garden_icon from "./icons/accommodation/potted-plant.svg"
import bath_icon from "./icons/accommodation/bath.svg"
import television_icon from "./icons/accommodation/monitor.svg"
import parking_icon from "./icons/accommodation/square-parking.svg"
import outdoor_icon from "./icons/accommodation/picnic-table.svg"
import header_img from "./images/header_img.png";
import brand_img from "./images/brand_img.png";
import project_img_1 from "./images/project_img_1.jpg";
import project_img_2 from "./images/project_img_2.jpg";
import project_img_3 from "./images/project_img_3.jpg";
import project_img_4 from "./images/project_img_4.jpg";
import profile_img_1 from "./images/profile_img_1.png";
import profile_img_2 from "./images/profile_img_2.png";
import profile_img_3 from "./images/profile_img_3.png";
import penzion_logo from "./images/penzion_logo7.png";
import penzion1_1 from "./images/penzion1/IMG_1341.JPEG";
import penzion1_2 from "./images/penzion1/IMG_7180.JPG";
import penzion1_3 from "./images/penzion1/IMG_7181.JPG";
import penzion1_4 from "./images/others/IMG_0740.JPEG";
import penzion2_1 from "./images/penzion2/IMG_1325.JPEG";
import penzion2_2 from "./images/penzion2/IMG_3484.JPG";
import penzion2_3 from "./images/penzion2/IMG_1326.JPEG";
import penzion2_4 from "./images/others/IMG_1302.JPEG";
import apartment1_1 from "./images/apartment1/IMG_8573.JPEG";
import apartment1_2 from "./images/apartment1/IMG_1830.JPG";
import apartment1_3 from "./images/others/IMG_1286.JPEG";
import apartment1_4 from "./images/others/IMG_0741.JPEG";
import apartment2_1 from "./images/apartment2/FullSizeRender.JPEG";
import apartment2_2 from "./images/apartment2/FullSizeRender-1.JPEG";
import apartment2_3 from "./images/apartment2/FullSizeRender-2.JPEG";
import apartment2_4 from "./images/others/IMG_8812.JPEG";

export const assets = {
  logo,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  location_icon,
  bed_icon,
  bicycle_icon,
  fireplace_icon,
  kitchen_icon,
  garden_icon,
  bath_icon,
  television_icon,
  parking_icon,
  outdoor_icon,
  header_img,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  left_arrow,
  right_arrow,
  penzion_logo
};

export const testimonialsData = [
  {
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "Richard Nelson",
    title: "UI/UX Designer",
    image: profile_img_2,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "James Washington",
    title: "Co-Founder",
    image: profile_img_3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
];

export const accommodations = [
  {
    translationKey: "Accommodation.Penzion1",
    slug: "guesthouse",
    images: [penzion1_1, penzion1_2, penzion1_3, penzion1_4],
  },
  {
    translationKey: "Accommodation.Penzion2",
    slug: "cottage",
    images: [penzion2_1, penzion2_2, penzion2_3, penzion2_4],
  },
  {
    translationKey: "Accommodation.Apartment1",
    slug: "garden-view-apartment",
    images: [apartment1_1, apartment1_2, apartment1_3, apartment1_4],
  },
  {
    translationKey: "Accommodation.Apartment2",
    slug: "mountain-view-apartment",
    images: [apartment2_1, apartment2_2, apartment2_3, apartment2_4],
  },
];

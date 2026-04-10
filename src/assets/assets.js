import logo from "./icons/general/logo.svg";
import logo_dark from "./icons/general/logo_dark.svg";
import cross_icon from "./icons/general/cross_icon.svg";
import menu_icon from "./icons/general/menu_icon.svg";
import star_icon from "./icons/general/star_icon.svg";
import left_arrow from "./icons/general/left_arrow.svg";
import right_arrow from "./icons/general/right_arrow.svg";
import location_icon from "./icons/accommodation/map-pin.svg"
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
import penzion_title_1 from "./images/penzion1/IMG_1341.JPEG";
import penzion_title_2 from "./images/penzion2/IMG_1325.JPEG";
import apartment_title_1 from "./images/apartment1/IMG_8573.JPEG";
import apartment_title_2 from "./images/apartment2/FullSizeRender.JPEG";

export const assets = {
  logo,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  location_icon,
  header_img,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  left_arrow,
  right_arrow,
  penzion_logo,
  penzion_title_1,
  penzion_title_2,
  apartment_title_1,
  apartment_title_2
};

export const projectsData = [
  {
    title: "Skyline Haven",
    price: "$2,50,000",
    location: "California",
    image: project_img_1,
  },
  {
    title: "Vista Verde",
    price: "$2,50,000",
    location: "San Francisco",
    image: project_img_2,
  },
  {
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image: project_img_3,
  },
  {
    title: "Central Square",
    price: "$2,50,000",
    location: "Los Angeles",
    image: project_img_4,
  },
];

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
    image: penzion_title_1,
    translationKey: "Accommodation.Penzion1",
    slug: "guesthouse",
    images: [penzion_title_1],
  },
  {
    image: penzion_title_2,
    translationKey: "Accommodation.Penzion2",
    slug: "cottage",
    images: [penzion_title_2],
  },
  {
    image: apartment_title_1,
    translationKey: "Accommodation.Apartment1",
    slug: "garden-view-apartment",
    images: [apartment_title_1],
  },
  {
    image: apartment_title_2,
    translationKey: "Accommodation.Apartment2",
    slug: "mountain-view-apartment",
    images: [apartment_title_2],
  },
];

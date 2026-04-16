import { Link } from "react-router-dom";

const AccommodationCompactCard = ({
  image,
  title,
  rooms,
  beds,
  extraBeds,
  slug,
}) => {
  return (
    <Link
      to={`/accommodation/${slug}`}
      className="block overflow-hidden rounded-2xl border border-gray-100 bg-white transition hover:shadow-md"
    >
      <img
        src={image}
        alt={title}
        className="h-36 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="line-clamp-2 text-base font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">{rooms}</p>
        <p className="text-sm text-gray-500">
          {beds} <span className="px-1">+</span> {extraBeds}
        </p>
      </div>
    </Link>
  );
};

export default AccommodationCompactCard;
const Button = ({title, href}) => {
  return (
    <a
      href={href}
      className="bg-lime-700 hover:bg-lime-800 text-white px-6 py-3 rounded-md transition"
    >
      {title}
    </a>
  );
};

export default Button;

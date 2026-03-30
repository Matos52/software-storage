const SectionTitle = ({ title1, title2, slogan }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        {title1}{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          {title2}
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        {slogan}
      </p>
    </div>
  );
};

export default SectionTitle;

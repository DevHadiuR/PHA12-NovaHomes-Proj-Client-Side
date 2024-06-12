const DynamicTitleDesc = ({ title, subTitle }) => {
  return (
    <div className="text-center mt-32 mb-20">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold py-2  mx-auto text-[#FDB913]">
        --- {title} ---
      </h1>
      <h1 className="w-[95%] md:w-[80%] lg:w-2/3 mx-auto mt-3 text-base md:text-lg lg:text-xl text-[#39474F] opacity-90">
        {subTitle}
      </h1>
    </div>
  );
};

export default DynamicTitleDesc;

import React from "react";

const CallToAction = ({
  title,
  subTitle,
  description,
}) => {
  return (
    <section className="cta-banner py-20 bg-[#D56602]">
      <div className="container flex-col text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#fff] mb-10 after:content-[''] after:block after:w-[100px] after:h-[4px] after:translate-y-[20px] after:bg-[#fff] after:mx-auto">
          {title}
        </h2>
        {subTitle && <h3 className="text-2xl md:text-3xl font-bold text-[#fff] mb-10">
          {subTitle}
        </h3>}
        <p className="text-lg text-[#fff]">
          {description}
        </p>
      </div>
    </section>
  );
};

export default CallToAction;

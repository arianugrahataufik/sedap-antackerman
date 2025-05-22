import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

const Rating = ({ rating, showLabel, className, ...rest }) => (
  <p className={classNames("mb-6", className)} {...rest}>
    {[...Array(5)].map((_, i) => {
      const index = i + 1;
      let content = "";
      if (index <= Math.floor(rating))
        content = (
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        );
      else if (rating > i && rating < index + 1)
        content = (
          <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
        );
      else if (index > rating)
        content = (
          <FontAwesomeIcon
            icon={faStar}
            className="text-yellow-200 dark:text-opacity-20"
          />
        );

      return <React.Fragment key={i}>{content}</React.Fragment>;
    })}
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  showLabel: PropTypes.bool,
  className: PropTypes.string,
};

const TestimonialItem = ({ testimonial }) => (
  <div className="bg-white dark:bg-slate-800 shadow-xl flex items-center h-full p-6 py-12">
    <div className="mr-4">
      <img
        src={testimonial.author.picture}
        alt={testimonial.author.fullName}
        className="max-w-[100px] min-w-[100px] h-auto rounded-full border border-red-600"
      />
    </div>
    <div>
      <h4 className="text-2xl font-medium mb-2">
        {testimonial.author.fullName}
      </h4>
      <Rating rating={testimonial.rating} showLabel={false} />
      <p className="opacity-80">{testimonial.description}</p>
    </div>
  </div>
);

TestimonialItem.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

const Testimonial10 = () => {
  const [testimonialList, setTestimonialList] = useState([]);

  useEffect(() => {
    fetch("/data/customer.json")
      .then((res) => res.json())
      .then((data) => setTestimonialList(data))
      .catch((err) => console.error("Gagal memuat data testimoni:", err));
  }, []);

  return (
    <section className="ezy__testimonial10 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container relative px-4 mx-auto">
        <div className="flex mb-6 md:mb-12">
          <div className="sm:max-w-xl">
            <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-4">
              Community Reviews
            </h2>
            <p className="text-lg opacity-80">
              Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-12">
          {testimonialList.map((testimonial, i) => (
            <div className="col-span-2 md:col-span-1" key={i}>
              <TestimonialItem testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial10;

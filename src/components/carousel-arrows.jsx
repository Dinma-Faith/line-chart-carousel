import React from "react";
import arrowLeft from "../icons/arrow-left.svg";
import arrowRight from "../icons/arrow-right.svg";
import styles from "../css/carousel.module.css";

const CarouselArrows = ({ instanceRef, currentSlide, totalSlides }) => {
  const prevSlide = () => instanceRef.current?.prev();
  const nextSlide = () => instanceRef.current?.next();

  return (
    <>
      <button
        className={styles.arrowButton}
        onClick={prevSlide}
        disabled={currentSlide === 0}>
        <img src={arrowLeft} alt="Previous" />
      </button>

      <button
        className={styles.arrowButton}
        onClick={nextSlide}
        disabled={currentSlide >= totalSlides - 1}>
        <img src={arrowRight} alt="Next" />
      </button>
    </>
  );
};

export default CarouselArrows;

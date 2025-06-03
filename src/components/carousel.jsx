import React, { useState, useRef, useEffect } from "react";
import CarouselArrows from "./carousel-arrows";
import ChartSlide from "./chart-slide";
import styles from "../css/carousel.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Carousel = () => {
  const slides = ["download", "upload", "ping"];
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1.3,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 1.7, spacing: 16 },
      },
    },
  });

  return (
    <div className={styles.carouselContainer}>
      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        {slides.map((type, index) => (
          <div
            key={type}
            className={`keen-slider__slide ${styles.slide} ${
              index === currentSlide ? styles.big : styles.small
            }`}>
            <ChartSlide type={type} />
          </div>
        ))}
      </div>

      <div className={styles.arrows}>
        <CarouselArrows
          instanceRef={instanceRef}
          currentSlide={currentSlide}
          totalSlides={slides.length}
        />
      </div>
    </div>
  );
};

export default Carousel;

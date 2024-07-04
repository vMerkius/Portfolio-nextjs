import { useRef, useState, useEffect } from "react";
import "../styles/slider.scss";

interface SliderProps {
  image1: string;
  image2: string;
}

const Slider = ({ image1, image2 }: SliderProps) => {
  const [dividerPosition, setDividerPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    if (sliderRef.current) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      let newDividerPosition =
        ((e.clientX - sliderRect.left) / sliderRect.width) * 100;
      if (newDividerPosition < 3) newDividerPosition = 3;
      if (newDividerPosition > 99) newDividerPosition = 99;
      setDividerPosition(newDividerPosition);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      let newDividerPosition =
        ((e.touches[0].clientX - sliderRect.left) / sliderRect.width) * 100;
      if (newDividerPosition < 3) newDividerPosition = 3;
      if (newDividerPosition > 99) newDividerPosition = 99;
      setDividerPosition(newDividerPosition);
    }
  };

  return (
    <div
      className="slider"
      ref={sliderRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMouseUp}
      // onMouseLeave={handleMouseUp}
    >
      <div
        className="slider__container"
        style={{ width: `${dividerPosition}%`, height: "100%" }}
      >
        <img src={image1} alt="Image 1" className="slider__container__img" />
      </div>
      <div
        className="slider__divider"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        style={{ left: `calc(${dividerPosition}% - 5px)`, height: "100%" }}
      />
      <div
        className="slider__container slider__container--right"
        style={{ width: `${100 - dividerPosition}%`, height: "100%" }}
      >
        <img src={image2} alt="Image 2" className="slider__container__img" />
      </div>
    </div>
  );
};

export default Slider;

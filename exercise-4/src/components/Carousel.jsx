import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

export const Carousel = ({ images}) => {
  /* You will need to  use  state to mnage the current image */
  const [currentImage, setCurrentImage] = useState(0)

  /* You will need to hanle the click on left and right button */

  /* You will need to manage the cases when we are on the last image or first image*/
  const handleToLeft =  () => {
    setCurrentImage(prev => prev === 0 ? images.length-1 : prev - 1)
  }
  const handleToRight =  () => {
    setCurrentImage(prev => prev === images.length-1 ? 0 : prev + 1)
  }
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={handleToLeft} className="arrow arrow-left" />
      

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[currentImage].src}  alt={images[currentImage].alt} className="slide" />

      <BsArrowRightCircleFill onClick={handleToRight} className="arrow arrow-right" />
    </div>
  );
};

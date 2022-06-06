import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FoodCard from "../UI/FoodCard";
import "./Carousel.css";

const Carousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: props.length,
    slidesToScroll: props.length,
    arrows: props.arrows,
  };
  return (
    <div>
      <Slider {...settings}>
        {props.array.map((idx) => {
          return (
            <div className="box">
              <FoodCard img={idx.image} text={idx.name} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;

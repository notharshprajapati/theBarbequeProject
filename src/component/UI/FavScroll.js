import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FavCard from "./FavCard";
import "./Carousel.css";

const FavScroll = (props) => {
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
        {props.array.map((image) => {
          return (
            <div className="box">
              <FavCard img={image} text={"Dish Name"} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default FavScroll;

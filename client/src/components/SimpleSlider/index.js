import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4
        };
        return (
            <Slider {...settings}>
                <div>
                    <h3>{props.card}</h3>
                </div>
            </Slider>
        );
    }
}
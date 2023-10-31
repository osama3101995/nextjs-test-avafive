import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

interface ImageSliderProps {
  images: string[] | null;
}

interface ImageSliderState {
  nav1: Slider | null;
  nav2: Slider | null;
}

export class ImageSlider extends Component<ImageSliderProps, ImageSliderState> {
  private slider1: Slider | null = null;
  private slider2: Slider | null = null;

  constructor(props: ImageSliderProps) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div>
        <div>
          <Slider
            asNavFor={this.state.nav2 as Slider}
            ref={(slider) => (this.slider1 = slider)}
          >
            {this.props.images &&
              this.props.images.map((img, index) => (
                <Image
                  key={index}
                  width={1000}
                  height={1000}
                  className="h-[20rem] md:h-[38rem] object-cover rounded-2xl"
                  alt="item-thumbnail"
                  src={img}
                />
              ))}
          </Slider>
        </div>
        <div className="mt-5 w-3/4 mx-auto">
          <Slider
            asNavFor={this.state.nav1 as Slider}
            ref={(slider) => (this.slider2 = slider)}
            slidesToShow={
              this.props.images?.length && this.props.images.length > 4
                ? 4
                : this.props.images?.length || 0
            }
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={true}
          >
            {this.props.images &&
              this.props.images.map((img, index) => (
                <div key={index} className="p-2">
                  <Image
                    width={75}
                    height={75}
                    className="w-[75px] h-[75px] object-cover rounded-lg"
                    alt="item-thumbnail"
                    src={img}
                  />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default ImageSlider;

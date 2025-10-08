import { Component } from "react";
import CarouselSwiper from "./CarouselSwiper";

class Movies extends Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <CarouselSwiper search={this.props.search} type={this.props.type} />
      </>
    );
  }
}

export default Movies;

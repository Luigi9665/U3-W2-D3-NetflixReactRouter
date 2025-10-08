import { Component } from "react";
import { Alert, Card, Spinner } from "react-bootstrap";
import Slider from "react-slick";

class CarouselNetflix extends Component {
  state = {
    movies: [],
    isLoading: true,
    hasError: false,
    errorMessage: "",
  };

  getFetch = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=ec73c4fc&=&s=" + this.props.search + "&type=" + this.props.type);

      if (response.ok) {
        const dataObj = await response.json();
        this.setState({ movies: dataObj.Search || [] });
      } else if (response.status === 401 || response.status === 403) {
        throw new Error("Autorizzazione fallita, controlla la tua API key.");
      } else if (response.status === 404) {
        throw new Error("Risorsa non trovata (404).");
      } else if (response.status >= 500) {
        throw new Error("Errore del server, riprova più tardi.");
      } else {
        throw new Error("Errore nella richiesta: " + response.status);
      }
    } catch (error) {
      console.log(error);
      this.setState({ hasError: true, errorMessage: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.getFetch();
  }
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            infinite: false,
          },
        },
      ],
    };

    return (
      <div className="slider-container my-3">
        <div className="d-flex align-items-center gap-3">
          {this.state.isLoading && <Spinner animation="border" variant="primary" />}

          {this.state.hasError && (
            <Alert className="flex-fill" variant="danger">
              {this.state.errorMessage}
            </Alert>
          )}

          {!this.state.hasError && this.state.movies.length === 0 && (
            <Alert className="flex-fill" variant={this.state.isLoading ? "info" : "warning"}>
              {this.state.isLoading ? "Caricamento..." : "Non ci sono file"}
            </Alert>
          )}
        </div>
        <Slider {...settings}>
          {this.state.movies.map((movie, index) => (
            <div key={movie.imdbID + "-" + index} className="movieSlider">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default CarouselNetflix;

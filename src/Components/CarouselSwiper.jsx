import { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router";

class CarouselSwiper extends Component {
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
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={6}
          spaceBetween={10}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          observer={true}
          observeParents={true}
          breakpoints={{
            1200: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {this.state.movies.map((movie, index) => (
            <SwiperSlide key={movie.imdbID + "-" + index}>
              <Link to={`/details/${movie.imdbID}`}>
                <div className="movieSlider">
                  <img src={movie.Poster} alt={movie.Title} />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}

export default CarouselSwiper;

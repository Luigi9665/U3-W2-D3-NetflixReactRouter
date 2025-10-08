import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  console.log(id);

  const [film, setFilm] = useState(null);

  const getFetch = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=ec73c4fc&i=" + id);

      if (response.ok) {
        const dataObj = await response.json();
        setFilm(dataObj);
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
      // this.setState({ hasError: true, errorMessage: error.message });
    } finally {
      // this.setState({ isLoading: false });
    }
  };

  useEffect(() => {
    getFetch();
  }, [id]);

  return (
    <Container fluid className="bg-white p-3 ">
      {film && (
        <Row>
          <Col className="text-center">
            <div className="text-black">
              <div className="w-100">
                <img src={film.Poster} alt={film.Title} className="img-fluid mx-auto" />
              </div>
              <div className="">
                <h1 className="display-3">{film.Title}</h1>
                <p className="text-muted">
                  {film.Year} • {film.Genre} • {film.Runtime}
                </p>

                <div className="">
                  {film.Ratings?.map((rating, i) => (
                    <div key={i} className="bg-dark text-white py-1 my-2">
                      <p className="fw-semibold ">{rating.Source}</p>
                      <p>{rating.Value}</p>
                    </div>
                  ))}
                </div>

                <p className="">{film.Plot}</p>

                {/* Additional Info */}
                <div className="bg-info-subtle">
                  <p>
                    <span className="fw-semibold text-danger">Director:</span> {film.Director}
                  </p>
                  <p>
                    <span className="fw-semibold text-danger">Writer:</span> {film.Writer}
                  </p>
                  <p>
                    <span className="fw-semibold text-danger">Actors:</span> {film.Actors}
                  </p>
                  <p>
                    <span className="fw-semibold text-danger">Language:</span> {film.Language}
                  </p>
                  <p>
                    <span className="fw-semibold text-danger">Country:</span> {film.Country}
                  </p>
                  <p>
                    <span className="fw-semibold text-danger">Awards:</span> {film.Awards}
                  </p>
                  <p>
                    <span className="fw-semibold text-danger">IMDB:</span> ⭐ {film.imdbRating} ({film.imdbVotes} votes)
                  </p>
                  <p>
                    <span className="fw-semibold text-danger">Box Office:</span> {film.BoxOffice}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Details;

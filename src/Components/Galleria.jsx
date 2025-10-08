import { Component } from "react";
import { Container } from "react-bootstrap";
import Movies from "./Movies";

class Galleria extends Component {
  render() {
    return (
      <Container fluid className="px-5">
        <Movies title="Saghe" search="Harry potter" type="movie" />
        <Movies title="Movies" search="Avengers" type="movie" />
        <Movies title="Tv Series" search="Series" type="series" />
      </Container>
    );
  }
}

export default Galleria;

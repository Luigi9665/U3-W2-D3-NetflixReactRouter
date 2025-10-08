import { Container, Dropdown } from "react-bootstrap";

import { Grid, Grid3x3 } from "react-bootstrap-icons";

const Welcome = () => {
  return (
    <Container fluid className="px-4">
      <div className="d-flex justify-content-between align-items-baseline">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>

          <Dropdown>
            <Dropdown.Toggle variant="trasparent" className="text-white border-white ms-4" id="dropdown-basic">
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex align-items-center gap-4 fs-3">
          <Grid style={{ cursor: "pointer" }} className="text-white"></Grid>
          <Grid3x3 style={{ cursor: "pointer" }} className="text-white"></Grid3x3>
        </div>
      </div>
    </Container>
  );
};

export default Welcome;

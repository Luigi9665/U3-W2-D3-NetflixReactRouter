import { Col, Row } from "react-bootstrap";

const ButtonProfile = () => {
  return (
    <Row className="my-4">
      <Col xs={12} sm={3} className="my-3 my-md-0">
        <button style={{ letterSpacing: "5px" }} className="btn rounded-0 border-white bg-white text-uppercase fs-5 fw-bold w-100 p-3">
          save
        </button>
      </Col>
      <Col xs={12} sm={3} className="my-3 my-md-0">
        <button style={{ letterSpacing: "5px" }} className="btn rounded-0 text-white-50 border-white text-netflix text-uppercase fs-5 fw-bold w-100 p-3">
          cancel
        </button>
      </Col>
      <Col xs={12} sm={6} className="my-3 my-md-0">
        <button style={{ letterSpacing: "5px" }} className="btn rounded-0 text-white-50 border-white text-netflix text-uppercase fs-5 fw-bold w-100 p-3">
          delete profile
        </button>
      </Col>
    </Row>
  );
};

export default ButtonProfile;

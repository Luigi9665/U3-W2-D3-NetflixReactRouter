import { Col, Container, Row } from "react-bootstrap";

import { Pencil } from "react-bootstrap-icons";
import ButtonProfile from "./ButtonProfile";
import Select from "./Components/Select";
import MaturitySection from "./Components/MaturitySection";
import ProfileAutoplay from "./Components/ProfileAutoplay";
import BorderProfile from "./Components/BordeProfile";

const Profile = (props) => {
  return (
    <Container style={{ maxWidth: "800px" }} className="mx-auto my-5 px-3">
      <div>
        <h1 className="display-1 text-white fw-normal">{props.title}</h1>
        <BorderProfile className="border-bottom" />
        <Row className="my-4">
          <Col xs={6} md={3} className="text-center text-md-end position-relative px-5 mb-3 mb-md-0 px-md-1">
            <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" alt="avatar" className="rounded-2 w-100 z-1" />
            <div
              className="rounded-circle border border-white text-white text-center bg-black position-absolute d-flex align-items-center justify-content-center z-3"
              style={{ width: "35px", height: "35px", transform: "translate(5px, -40px)", cursor: "pointer" }}
            >
              <Pencil className="w-100"></Pencil>
            </div>
          </Col>
          <Col xs={12} md={9} className=" px-4 px-md-1">
            <div className="bg-secondary text-white p-3 fs-5 w-50">{props.nameProfile}</div>
            <div className="my-3">
              <h4 className="text-netflix">Language:</h4>
              <Select languages={["English", "Italian", "Francese", "Tedesco"]} />
            </div>
            <div className="border-bottom w-75"></div>
            <MaturitySection
              title="Maturity Settings:"
              select="all maturity ratings"
              description="Show titles of all maturity ratings for this profile."
              textButton="edit"
            />
            <BorderProfile className="border-bottom w-75" />
            <ProfileAutoplay
              title="Autoplay controls"
              inputs={["Autoplay next episode in a series on all devices.", "Autoplay previews while browsing on all devices."]}
            />
          </Col>
        </Row>
        <div className="border-bottom"></div>
        <ButtonProfile />
      </div>
    </Container>
  );
};

export default Profile;

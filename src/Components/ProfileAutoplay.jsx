import { InputGroup } from "react-bootstrap";

const ProfileAutoplay = (props) => {
  return (
    <div className="my-3">
      <h4 className="text-netflix">{props.title}</h4>
      {props.inputs.map((input, index) => (
        <div key={index} className="d-flex align-items-center">
          <input className="form-check-input bg-dark rounded-0 p-3" type="checkbox" value="" aria-label="..." />
          <p className="text-white m-0 mx-1">{input}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileAutoplay;

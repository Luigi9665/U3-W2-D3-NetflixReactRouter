import Form from "react-bootstrap/Form";

const Select = (props) => {
  return (
    <Form.Select className="bg-black text-white rounded-0 w-25" aria-label="Default select example">
      {props.languages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </Form.Select>
  );
};

export default Select;

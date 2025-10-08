const MaturitySection = (props) => {
  return (
    <div className="my-3">
      <h4 className="text-netflix">{props.title}</h4>
      <div className="bg-dark text-white text-uppercase w-50 p-2">{props.select}</div>
      <p className="text-white fs-5">{props.description}</p>
      <button className="btn rounded-0 text-uppercase text-white-50 border-white px-4 py-2">{props.textButton}</button>
    </div>
  );
};

export default MaturitySection;

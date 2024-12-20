import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className={"loader_container"}>
      <div className={"loader"}></div>
      <p>Loading..</p>
    </div>
  );
};

export default Spinner;

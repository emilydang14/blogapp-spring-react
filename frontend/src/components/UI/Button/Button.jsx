import "./Button.scss"
import PropTypes from "prop-types";
/* choose shape: round or oval. Oval: padding 10px 15px . Circle can choose size */

const Button = ({ name, shape, onClick, disabled, className }) => {

  let button = <button className={`${"normalBtn"} ${className}`}>{name}</button>;

  if (shape === "oval") {
    button = (
      <button disabled={disabled} className={`${"ovalBtn"} ${className}`} onClick={onClick}>
        {name}
      </button>
    );
  }
  if (shape === "round_big") {
    button = (
      <button className={`${"roundBtn_big"} ${className}`} onClick={onClick}>
        {name}
      </button>
    );
  }
  if (shape === "round_small") {
    button = (
      <button
        className={`${"roundBtn_small"} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {name}
      </button>
    );
  }

  return button;
};

Button.propTypes = {
  name: PropTypes.string, 
  shape: PropTypes.string, 
  onClick: PropTypes.func, 
  disabled: PropTypes.bool, 
  className: PropTypes.string
}

export default Button;

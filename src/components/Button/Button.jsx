import "./Button.scss";
import PropTypes from "prop-types";
import Title from "../ui/Title";
import Image from "../ui/Image";

function Button(props) {
    const CraftClass=`button ${props.className}`;
    const TitleClass=`${props.className==="red"?'red':''} button__title`;
    return(
        <div>
        <button className={CraftClass}>
          <Title className={TitleClass} level="1" text={props.text} />
          <Image className="button__img" alt="иконка" src={props.src} />
        </button>
      </div>
    );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;

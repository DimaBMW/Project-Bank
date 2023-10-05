import "../../assets/styles/Image.scss";
import PropTypes from 'prop-types';


function Image(props){
    const CraftClass=`img ${props.className}`;

    return(
        <div className={CraftClass}>
            <img src={props.src} alt={props.alt} />
        </div>
    );
}

Image.propTypes={
    src:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired,
    className:PropTypes.string.isRequired,
};

export default Image;
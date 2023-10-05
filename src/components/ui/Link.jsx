import "../../assets/styles/Link.scss";
import PropTypes from 'prop-types';

function Link(props){
    const CreftClass=`link ${props.className}`
    return(
        <a href={props.href} className={CreftClass}>
            {props.name}
        </a>
    );
}

Link.propTypes={
    name:PropTypes.string.isRequired,
    href:PropTypes.string.isRequired,
    className:PropTypes.string.isRequired,
}

export default Link;
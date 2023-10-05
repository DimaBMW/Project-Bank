import PropTypes from 'prop-types';
import "../../assets/styles/Logo.scss";
import Image from './Image';

function Logo(props){
    const CraftClass=`logo ${props.className}`;

    return(
        <div className={CraftClass}>
            <Image className={CraftClass} src={props.src} alt="logo"/>
        </div>
    );
}

Logo.propTypes={
    src: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    className:PropTypes.string.isRequired,
}

export default Logo;
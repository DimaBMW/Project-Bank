import '../../assets/styles/Title.scss';
import PropTypes from 'prop-types';
import React from 'react';

function Title(props){
    const CraftClass=`title ${props.className}`;
    return(React.createElement(`h${props.level}`,{className:CraftClass},props.text));
}

Title.propTypes={
    className:PropTypes.string.isRequired,
    level:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
}

export default Title;
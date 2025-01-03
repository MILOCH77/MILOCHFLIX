import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink(props) {
  return (
    <a href={props.href} className={props.className}>
        {props.children}
    </a>
  );
}
ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ButtonLink;

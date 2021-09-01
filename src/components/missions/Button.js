import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function Button({
  text, click, id, buttonClass,
}) {
  const dispatch = useDispatch();
  return (
    <button type="button" className={buttonClass} onClick={() => dispatch(click(id))}>
      {text}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  buttonClass: PropTypes.string.isRequired,
};

export default Button;

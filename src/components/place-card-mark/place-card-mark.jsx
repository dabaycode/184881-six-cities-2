import React from 'react';
import PropTypes from 'prop-types';

const PlaceCardMark = (props) => {
  const {title} = props;

  return (
    <div className="place-card__mark">
      <span>{title}</span>
    </div>
  );
};

PlaceCardMark.propTypes = {
  title: PropTypes.string.isRequired
};

export default PlaceCardMark;

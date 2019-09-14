import React from 'react';
import PropTypes from 'prop-types';
import styleds from 'styled-components';

const TvPresenter = ({ topRated, popular, airingToday, loading, error }) => null;

TvPresenter.proptypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default TvPresenter; 
import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyles from '../styles/global-styles';
import theme from '../styles/theme';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';

const App = ({ Component }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  </>
);

App.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default wrapper.withRedux(withReduxSaga((App)));

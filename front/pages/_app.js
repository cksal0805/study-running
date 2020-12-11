import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyles from '../styles/global-styles';
import theme from '../styles/theme';

const App = ({ Component }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  </>
);

App.propTypes = {
  Component: PropTypes.element.isRequired,
};

export default App;

import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

const FormLayout = ({ children }) => {
  const themeContext = useContext(ThemeContext);
  const Wrapper = styled('div')`
    width: 100vw;
    height: 100vh;
    position:relative;
    background-color: ${themeContext.color.lightGrey};
  `;
  const ContentWrapper = styled('div')`
    border-radius: 3px;
    display: flex;
    overflow: hidden;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  `;
  const TitleBox = styled('div')`
    width: 20vw;
    background-color: ${themeContext.color.blue};
    @media (${themeContext.tabletM}) {
      display: none;
    }
  `;
  const FormWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    @media (${themeContext.tabletS}) {
      width: 100vw;
    }
    & form{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 80px;
      box-sizing: border-box;
    }
    & input{
      width: 300px;
      font-size: 15px;
      border: 2px solid ${themeContext.color.lightGrey};
      border-radius: 2px;
      margin-bottom: 50px;
      padding: 10px;
      @media (${themeContext.tabletS}) {
        width: 80vw;
      }
    }
    & button{
      width: 300px;
      background-color: ${themeContext.color.blue};
      color: white;
      border-radius: 2px;
      border: 0;
      padding: 10px;
      @media (${themeContext.tabletS}) {
        width: 85vw;
      }
    }
    & ul{
      display: flex;
    }
    & ul li{
      padding: 10px;
    }
    & li a{
      padding-bottom: 20px;
      box-sizing: border-box;
      & :hover {
        color: ${themeContext.color.blue};
        cursor: pointer;
      }
    }
  `;
  return (
    <Wrapper>
      <ContentWrapper>
        <TitleBox />
        <FormWrapper>
          {children}
        </FormWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

FormLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormLayout;

import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

const FormLayout = ({ children }) => {
  const themeContext = useContext(ThemeContext);

  const Wrapper = styled('div')`
    width: 100vw;
    height: 100vh;
    background-color: ${themeContext.color.lightGrey};
  `;
  const ContentWrapper = styled('div')`
    width: 80vw;
    border-radius: 3px;
    display: flex;
    overflow: hidden;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  `;
  const TitleBox = styled('div')`
    width: 50%;
    background-color: ${themeContext.color.blue};
  `;
  const FormWrapper = styled('div')`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    & form{
      display: flex;
      flex-direction: column;
      padding: 100px;
      box-sizing: border-box;
    }
    & input{
      width: 300px;
      border: 2px solid ${themeContext.color.lightGrey};
      border-radius: 2px;
      margin-bottom: 50px;
      font-size: 15px;
      padding: 10px;
    }
    & button{
      width: 300px;
      border-radius: 2px;
      border: 0;
      background-color: ${themeContext.color.blue};
      color: white;
      padding: 10px;
    }
    & a{
      padding-bottom: 30px;
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

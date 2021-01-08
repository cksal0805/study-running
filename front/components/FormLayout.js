import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  position:relative;
  background-color: ${(props) => props.theme.color.lightGrey};
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
  background-color: ${(props) => props.theme.color.blue};
  @media (${(props) => props.theme.tabletM}) {
    display: none;
  }
`;
const FormWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  @media (${(props) => props.theme.tabletS}) {
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
    border: 2px solid ${(props) => props.theme.color.lightGrey};
    border-radius: 2px;
    margin-bottom: 50px;
    padding: 10px;
    @media (${(props) => props.theme.tabletS}) {
      width: 80vw;
    }
  }
  & button{
    width: 300px;
    background-color: ${(props) => props.theme.color.blue};
    color: white;
    border-radius: 2px;
    border: 0;
    padding: 10px;
    @media (${(props) => props.theme.tabletS}) {
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
      color: ${(props) => props.theme.color.blue};
      cursor: pointer;
    }
  }
`;

const FormLayout = ({ children }) => {
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

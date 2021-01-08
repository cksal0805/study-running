import React from 'react';
import styled from 'styled-components';

import { Close } from '@material-ui/icons';

const Overlay = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .7);
  opacity: 0.5;
  z-index: 2;
`;
const ModalWrapper = styled('div')`
  position: absolute;
  z-index: 10;
  background-color: white;
  top : 50%;
  left: 50%;
  transform : translate(-50%,-50%);
  min-width: 400px;
  min-height: 400px;
  border-radius: 10px;
`;
const ModalHeader = styled('div')`
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: 10px;
  & button {
    background-color: inherit;
    border: 0;
    margin-left: auto;
  }
`;
const ModalContent = styled('div')`

`;

const Modal = ({onModalClose,selectDate}) => {
  return(
    <>
      <Overlay />
      <ModalWrapper>
        <ModalHeader><p>{selectDate.format('M/D')}일</p> <button onClick = {onModalClose}><Close /></button></ModalHeader>
        <ModalContent></ModalContent>
      </ModalWrapper>
    </>
  )
}

export default Modal;
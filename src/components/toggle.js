import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BtnsDiv = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme }) => theme.gradient};
  width: 30px;
  height: 30px;
  margin: 0 auto;
  border-radius: 30px;
  border: 0;
  border-bottom: 0.3vh solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 0.5vw 0.2vw rgba(0, 0, 0, 0.1);
  font-size: 01.2rem;
  padding: 10px;
  overflow: hidden;
  cursor: pointer;
  color: ${({ theme }) => theme.color};
  `;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <BtnsDiv lightTheme={isLight} onClick={toggleTheme} >
  
    </BtnsDiv>
  );
};

Toggle.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired,
}

export default Toggle;
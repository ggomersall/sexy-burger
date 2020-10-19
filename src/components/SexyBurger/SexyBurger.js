import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const buttonWidth = '100px';
const buttonHeight = '80px';
const transition = '0.65s';
const color = 'red';
const borderRadius = '5px';

const SexyBurger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper onClick={() => setIsOpen(!isOpen)}>
      <Box isOpen={isOpen} />
      <TopRectangle color={color} isOpen={isOpen} />
      <MiddleRectangle color={color} isOpen={isOpen} />
      <BottomRectangle color={color} isOpen={isOpen} />
    </Wrapper>
  );
};

export default SexyBurger;

const Wrapper = styled.button`
  position: relative;
  left: 100px;
  width: ${buttonWidth};
  height: ${buttonHeight};
  border: 0;
  background: transparent;
  outline: none;
  cursor: pointer;
`;

const sharedAll = css`
  position: absolute;
  background: ${({ color }) => color || 'black'};
  border-radius: ${borderRadius};
  transition: transform ${transition};
`;

const sharedSmall = css`
  width: 50px;
  height: 10px;
`;

const TopRectangle = styled.span`
  ${sharedAll};
  ${sharedSmall};
  ${({ isOpen }) =>
    isOpen
      ? 'transform: translate(17px, 0) rotate(45deg);'
      : 'transform: translate(0,0) rotate(0);'};
  top: 0;
  left: 0;
  transform-origin: 0% 0%;
`;

const MiddleRectangle = styled.span`
  ${sharedAll};
  top: 50%;
  left: 0;
  width: ${buttonWidth};
  height: 10px;
  transform: translateY(-50%)
    rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0')});
`;

const BottomRectangle = styled.span`
  ${sharedAll};
  ${sharedSmall};
  ${({ isOpen }) =>
    isOpen
      ? 'transform: translate(-17px, 0) rotate(45deg);'
      : 'transform: translate(0,0) rotate(0);'};
  bottom: 0;
  right: 0;
  transform-origin: 100% 100%;
`;

const Box = styled.span`
  position: absolute;
  top: 34px;
  left: 40px;
  width: 400px;
  height: 283px;
  border-radius: 33px;
  background: #d7b901;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: scale(${({ isOpen }) => (isOpen ? 1 : 0)});
  transform-origin: 0% 0%;
  transition-property: opacity, transform;
  transition-duration: ${transition};
`;

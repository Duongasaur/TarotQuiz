import { Fragment, MutableRefObject, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// const BG_COLOUR = "#5749aa";
const BG_COLOUR = '#3f3a8a';
const STAR_COUNT = 52;
const BIG_STAR_INTERVAL = 8;

const range = (length: number) => Array.from({ length }, (_, index) => index);

const glitter = keyframes`
    0%, 50%, 100% {
      transform: scale(0.8);
      opacity: 1;
    }
    25%, 75% {
      transform: scale(0.6);
      opacity: 0.4;
    }
  `;

const StarsWrapper = styled.div`
  margin-top: 100px;
  font-size: 400px;
  height: 100%;
  overflow: hidden;
  opacity: 0.9;

  &:after {
    content: '';
    background: ${BG_COLOUR};
    background: linear-gradient(
      0deg,
      rgba(87, 73, 170, 1) 0%,
      rgba(87, 73, 170, 0.8634804263502276) 23%,
      rgba(87, 73, 170, 0.6449930313922444) 55%,
      rgba(87, 73, 170, 0) 100%
    );
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

const BaseStar = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: #fff;
  overflow: hidden;
  animation: ${glitter} 6.5s linear 0s infinite normal;

  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: ${BG_COLOUR};
    top: -50%;
    left: 50%;
    position: absolute;
    border-radius: 50%;
  }

  &:after {
    left: -50%;
  }
`;

const StarBottom = styled(BaseStar)`
  width: 100%;
  height: 100%;
  background: none;
  animation: none;

  &:before,
  &:after {
    top: 50%;
  }
`;

const BigStar = styled(BaseStar)`
  width: 24px;
  height: 24px;
  background-color: #fffec2;
  animation: ${glitter} 4s linear 0s infinite normal;
`;

const defaultRect = document.createElement('div').getBoundingClientRect();
type DivRef = MutableRefObject<HTMLDivElement | null>;
const useBoundingClientRect = (): [DivRef, DOMRect] => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [rect, setRect] = useState<DOMRect>(defaultRect);

  useEffect(() => {
    if (wrapperRef.current) {
      setRect(wrapperRef.current.getBoundingClientRect());
    }
  }, [setRect]);

  return [wrapperRef, rect];
};

const getRandomPosition = (max: number) => Math.floor(Math.random() * max);
const getDelay = (index: number) => `${(index * 80) % 2000}ms`;
const getStyle = (rect: DOMRect, index: number) => ({
  top: getRandomPosition(rect.height - 200),
  left: getRandomPosition(rect.width),
  animationDelay: getDelay(index),
});

const displayBigStar = (index: number) => index % BIG_STAR_INTERVAL === 0;

export const Constellation = () => {
  const [wrapperRef, rect] = useBoundingClientRect();

  return (
    <StarsWrapper key="stars-wrap" ref={wrapperRef}>
      {range(STAR_COUNT).map(index => (
        <Fragment key={index}>
          <BaseStar style={getStyle(rect, index)} children={<StarBottom />} />
          {displayBigStar(index) && (
            <BigStar style={getStyle(rect, index)} children={<StarBottom />} />
          )}
        </Fragment>
      ))}
    </StarsWrapper>
  );
};

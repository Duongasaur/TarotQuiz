import React, { FC } from 'react'
import styled from "styled-components";

const AdWrapper = styled.section`
  height: 120px;
  width: 100%;
  background: linear-gradient(0deg, #15151f -80%, #31363b 80%);
  box-shadow: rgba(0, 1, 0, 0.2) 0 2px 16px;
`;

const Advert: FC = () => {
  return (
    <AdWrapper>
      <span />
    </AdWrapper>
  );
};

export default Advert;

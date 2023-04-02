import React, { FC } from 'react';
import styled from 'styled-components';
import GoogleAd from './google';

const AdWrapper = styled.section`
  display: flex;
  height: 120px;
  background: linear-gradient(0deg, #15151f -80%, #31363b 80%);
  box-shadow: rgba(0, 1, 0, 0.2) 0 2px 16px;
  padding: 16px;
`;

const Advert: FC = () => {
  return (
    <AdWrapper>
      <GoogleAd adSlotId="3536378532" adClientId="ca-pub-5704516280175515" />
    </AdWrapper>
  );
};

export default Advert;

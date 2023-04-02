import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Adsense } from '@ctrl/react-adsense';

interface GoogleAdProps {
  adClientId: string;
  adSlotId: string;
  adFormat?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
}

const GOOGLE_AD = {
  class: 'adsbygoogle',
  getAdsByGoogle: () => window.adsbygoogle ?? (window.adsbygoogle = []),
};

const DivShadow = styled.div`
  background-color: crimson;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const StyledAdsense = styled(Adsense)`
  display: block;
  width: 100%;
  height: 100%;
`;

const GoogleAd: React.FC<GoogleAdProps> = ({ adClientId, adSlotId, adFormat = 'auto' }) => {
  return (
    <DivShadow>
      <StyledAdsense client={adClientId} slot={adSlotId} format="fluid" />
    </DivShadow>
  );
};

export default GoogleAd;

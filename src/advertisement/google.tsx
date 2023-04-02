import React, { useEffect, useRef } from 'react';

interface GoogleAdProps {
  adClientId: string;
  adSlotId: string;
  adFormat?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
}

const GOOGLE_AD = {
  class: 'adsbygoogle',
  getAdsByGoogle: () => window.adsbygoogle ?? (window.adsbygoogle = []),
};

const GoogleAd: React.FC<GoogleAdProps> = ({ adClientId, adSlotId, adFormat = 'auto' }) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (adRef.current) {
      GOOGLE_AD.getAdsByGoogle().push({
        google_ad_client: adClientId,
        google_ad_slot: adSlotId,
      });
    }
  }, [adClientId, adSlotId]);

  return (
    <div
      ref={adRef}
      className={GOOGLE_AD.class}
      data-ad-client={adClientId}
      data-ad-slot={adSlotId}
      data-ad-format={adFormat}
    />
  );
};

export default GoogleAd;

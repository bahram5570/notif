import { useContext } from 'react';

import { SignInteractiveBannerContext } from '@providers/__sign__/SignInteractiveBannerProvider';

const useSignInteractiveBanner = () => {
  return useContext(SignInteractiveBannerContext);
};

export default useSignInteractiveBanner;

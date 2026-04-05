import { useContext } from 'react';

import { SignInteractiveBannerContext } from '../../../providers/__sign__/SignInteractiveBannerProvider';

export const useSignInteractiveBanner = () => {
  return useContext(SignInteractiveBannerContext);
};

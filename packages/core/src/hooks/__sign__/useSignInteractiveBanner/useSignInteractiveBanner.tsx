import { useContext } from 'react';

import { SignInteractiveBannerContext } from '../../../providers/SignInteractiveBannerProvider';

export const useSignInteractiveBanner = () => {
  return useContext(SignInteractiveBannerContext);
};

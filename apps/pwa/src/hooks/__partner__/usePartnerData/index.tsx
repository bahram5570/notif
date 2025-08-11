import { useContext } from 'react';

import { PartnerContext } from '@providers/PartnerProvider';

const usePartnerData = () => {
  return useContext(PartnerContext);
};

export default usePartnerData;

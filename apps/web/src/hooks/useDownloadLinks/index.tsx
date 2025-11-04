import { useContext } from 'react';

import { DownloadLinksContext } from '@providers/DownloadLinksProvider/DownloadLinksProviderContext';

const useDownloadLinks = () => {
  return useContext(DownloadLinksContext);
};

export default useDownloadLinks;

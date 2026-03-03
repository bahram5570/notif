import http from '@services/http';

import DownloadLinksProviderContext from './DownloadLinksProviderContext';
import { DownloadLinksTypes } from './types';

const DownloadLinksProvider = async ({ children }: { children: React.ReactNode }) => {
  // const revalidate = 60 * 60; // # 1 hour

  const { data } = await http<DownloadLinksTypes>({
    method: 'GET',
    // revalidate,
    // cache: 'force-cache',
    url: 'appsetting/getapplicationlink',
  });

  console.log(data);

  const links: DownloadLinksTypes = {
    manDirectApplcationalink: data?.manDirectApplcationalink || '',
    womanDirectApplcationalink: data?.womanDirectApplcationalink || '',
  };

  return (
    <DownloadLinksProviderContext links={links}>
      <>{children}</>
    </DownloadLinksProviderContext>
  );
};

export default DownloadLinksProvider;

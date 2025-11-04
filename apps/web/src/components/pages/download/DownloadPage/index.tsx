import DownloadAppMen from '@components/DownloadApp/DownloadAppMen';
import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import HeaderFooterContainer from '@components/HeaderFooterContainer';

import DownloadAppWomen2Conteiner from './DownloadAppWomen2Conteiner';

const DownloadPage = () => {
  return (
    <HeaderFooterContainer>
      <div className="relative w-full flex flex-col items-center gap-12 pb-12">
        <DownloadAppWomen2Conteiner />
        <DownloadApp />
        <DownloadAppMen />
      </div>
    </HeaderFooterContainer>
  );
};

export default DownloadPage;

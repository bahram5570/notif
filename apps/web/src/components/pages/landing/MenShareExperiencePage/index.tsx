import DownloadAppMen from '@components/DownloadApp/DownloadAppMen';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';

import MenShareExperienceFooter from './MenShareExperienceFooter';
import MenShareExperienceHeading from './MenShareExperienceHeading';
import MenShareExperienceSlider from './MenShareExperienceSlider';
import Warning from './Warning';

const MenShareExperiencePage = () => {
  return (
    <HeaderFooterContainer>
      <div className="w-full relative pb-12 flex flex-col items-center gap-12">
        <MenShareExperienceHeading />

        <QrCode />
        <div className="landing_container">
          <MenShareExperienceSlider />
          <Warning />
        </div>

        <DownloadAppMen />
      </div>
      <MenShareExperienceFooter />
    </HeaderFooterContainer>
  );
};

export default MenShareExperiencePage;

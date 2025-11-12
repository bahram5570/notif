import FaqAccordion from '@components/ui/WebView/FaqAccordion';
import StorySection from '@components/ui/WebView/StorySection';
import { WEB_VIEW_MAX_WIDTH } from '@constants/app.constants';
import { COLORS_LIST } from '@theme/colors';

import AddSympathySection from './AddSympathySection';
import SympathyHeader from './SympathyHeader';
import SympathyIntroduction from './SympathyIntroduction';
import SympathySupport from './SympathySupport';
import { FAG_LIST, STORY_LIST } from './constants';

const SympathyContainer = () => {
  return (
    <div className=" mx-auto" style={{ maxWidth: WEB_VIEW_MAX_WIDTH }}>
      <div className="flex flex-col ">
        <SympathyHeader />

        <div className="px-4 flex flex-col gap-6 py-10" style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}>
          <SympathyIntroduction />
          <div className="flex flex-col gap-4">
            <StorySection title=" کشف همدلی ایمپو ✨" storyList={STORY_LIST} />
            <FaqAccordion faqList={FAG_LIST} title="  سوالات پرتکرار درباره «همدل ایمپو»" />
          </div>

          <AddSympathySection />
          <SympathySupport />
        </div>
      </div>
    </div>
  );
};

export default SympathyContainer;

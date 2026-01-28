import CustomTypography from '@components/ui/CustomTypography';
import FaqAccordion from '@components/ui/WebView/FaqAccordion';
import StorySection from '@components/ui/WebView/StorySection';
import { WEB_VIEW_MAX_WIDTH } from '@constants/app.constants';

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

        <div className="px-4 flex flex-col gap-6 py-10 bg-impo_Grey_50 relative">
          {/* <SympathyIntroduction /> */}
          <div className="px-4  py-3 border border-impo_Pink_500 bg-impo_Pink_50 rounded-2xl absolute mx-4 left-0 right-0 -top-[14px]">
            <CustomTypography fontSize="Body_Medium">
              اگر در اتصال به پارتنرت دچار مشکل شدی یا سوالی برات پیش اومد، با پشتیبان ایمپو با شماره ۰۹۱۵۷۰۹۷۵۰۰ تماس
              بگیر
            </CustomTypography>
          </div>
          <div className="flex flex-col gap-4 mt-4">
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

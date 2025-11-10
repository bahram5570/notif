import TickIcon from '@assets/icons/tick.svg';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import FaqAccordion from '@components/ui/WebView/FaqAccordion';
import StorySection from '@components/ui/WebView/StorySection';
import { COLORS_LIST } from '@theme/colors';

import AddSympathySection from './AddSympathySection';
import { FAG_LIST } from './constants';

const SympathyContainer = () => {
  return (
    <div className="max-w-[640px] mx-auto">
      <div className="flex flex-col ">
        <div className="bg-[url('/assets/images/webView/sympathy/hamdel-bg.webp')]  h-96 bg-cover bg-no-repeat flex justify-center items-center">
          <div className="flex flex-col gap-4 px-4">
            <div className="flex flex-col gap-2">
              <CustomTypography color="Pink_900" fontSize="Title_Large">
                همدلی ایمپو
              </CustomTypography>
              <CustomTypography fontSize="Body_Large" color="Neutral_OnBackground">
                ارتباط عمیق، حمایت روزانه، لحظات شیرین!
              </CustomTypography>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-start">
                <div className="w-6 h-6 flex justify-center items-center">
                  <TickIcon className="w-4 h-4" style={{ fill: COLORS_LIST.Neutral_OnBackground }} />
                </div>

                <CustomTypography>حرف‌زدن ساده‌تر میشه: هر روز یه سؤال چالشی</CustomTypography>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 flex justify-center items-center">
                  <TickIcon className="w-4 h-4" style={{ fill: COLORS_LIST.Neutral_OnBackground }} />
                </div>

                <CustomTypography>فضای خصوصی دونفره: آلبوم مشترک عکس‌ها و خاطره‌ها</CustomTypography>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 flex justify-center items-center">
                  <TickIcon className="w-4 h-4" style={{ fill: COLORS_LIST.Neutral_OnBackground }} />
                </div>

                <CustomTypography>
                  حالِ روزانه همدیگه رو می‌بینین: پارتنرت سیکل قاعدگی‌تو می‌بینه و توصیه‌های مخصوص می‌گیره
                </CustomTypography>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 flex flex-col gap-5 py-10" style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}>
          <div>
            <CustomTypography fontSize="Title_Small" color="Neutral_OnBackground">
              چیزایی که پارتنرت توی همدلی میبینه 👀
            </CustomTypography>
            <CustomImage
              src="/assets/images/webView/sympathy/1.webp"
              alt="sympathy1"
              width={984}
              height={1143}
              className="w-full h-auto"
            />
          </div>
          <StorySection title=" کشف همدلی ایمپو ✨" />
          <FaqAccordion faqList={FAG_LIST} title="  سوالات پرتکرار درباره «همدل ایمپو»" />
          <AddSympathySection />
        </div>
      </div>
    </div>
  );
};

export default SympathyContainer;

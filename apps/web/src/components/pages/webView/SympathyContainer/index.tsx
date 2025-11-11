import TickIcon from '@assets/icons/tick.svg';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import ContentCardContainer from '@components/ui/WebView/ContentCardContainer';
import FaqAccordion from '@components/ui/WebView/FaqAccordion';
import StorySection from '@components/ui/WebView/StorySection';
import { WEB_VIEW_MAX_WIDTH } from '@constants/app.constants';
import { COLORS_LIST } from '@theme/colors';

import AddSympathySection from './AddSympathySection';
import { FAG_LIST, STORY_LIST } from './constants';

const SympathyContainer = () => {
  return (
    <div className=" mx-auto" style={{ maxWidth: WEB_VIEW_MAX_WIDTH }}>
      <div className="flex flex-col ">
        {/* <div className="bg-[url('/assets/images/webView/sympathy/hamdel-bg.webp')]  h-96 bg-cover bg-no-repeat flex justify-center items-center">
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
              <div className="flex items-start gap-1">
                <div className="w-6 h-6 flex justify-center items-center">
                  <TickIcon className="w-4 h-4" style={{ fill: COLORS_LIST.Neutral_OnBackground }} />
                </div>

                <CustomTypography fontSize="Body_Small">
                  <CustomTypography fontSize="Lable_SmallProminet" className=" inline" tagType="span">
                    حرف‌زدن ساده‌تر میشه:
                  </CustomTypography>
                  هر روز یه سؤال چالشی
                </CustomTypography>
              </div>
              <div className="flex items-start gap-1">
                <div className="w-6 h-6 flex justify-center items-center">
                  <TickIcon className="w-4 h-4" style={{ fill: COLORS_LIST.Neutral_OnBackground }} />
                </div>

                <CustomTypography fontSize="Body_Small" className=" inline">
                  <CustomTypography fontSize="Lable_SmallProminet" className=" inline" tagType="span">
                    فضای خصوصی دونفره:
                  </CustomTypography>
                  آلبوم مشترک عکس‌ها و خاطره‌ها
                </CustomTypography>
              </div>
              <div className="flex items-start gap-1">
                <div className="w-6 h-6 flex justify-center items-center">
                  <TickIcon className="w-4 h-4" style={{ fill: COLORS_LIST.Neutral_OnBackground }} />
                </div>

                <CustomTypography fontSize="Body_Small">
                  <CustomTypography fontSize="Lable_SmallProminet" className=" inline" tagType="span">
                    حالِ روزانه همدیگه رو می‌بینین:
                  </CustomTypography>
                  پارتنرت سیکل قاعدگی‌تو می‌بینه و توصیه‌های مخصوص می‌گیره
                </CustomTypography>
              </div>
            </div>
          </div>
        </div> */}

        <div className="px-4 flex flex-col gap-5 py-10" style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}>
          {/* <div>
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
          </div> */}
          <StorySection title=" کشف همدلی ایمپو ✨" storyList={STORY_LIST} />
          {/* <FaqAccordion faqList={FAG_LIST} title="  سوالات پرتکرار درباره «همدل ایمپو»" /> */}
          {/* <AddSympathySection /> */}
          {/* <div className="flex flex-col  gap-3">
            <CustomTypography fontSize="Title_Small" color="Neutral_OnBackground">
              احساس حمایت رو هر روز تجربه کن 🤗
            </CustomTypography>
            <ContentCardContainer
              bgUrl="/assets/images/webView/sympathy/bg-2.webp"
              imageUrl="/assets/images/webView/sympathy/6.webp"
              title="حمایت دقیقاً وقتی می‌خوای می‌رسه؛ ما کنارتونیم تا پارتنرت هر لحظه از حالت باخبر باشه"
            />
            <ContentCardContainer
              bgUrl="/assets/images/webView/sympathy/bg-3.webp"
              imageUrl="/assets/images/webView/sympathy/7.webp"
              title="پیش‌بینی روزهای پریود و تخمک‌گذاری‌تو به پارتنرت میگیم تا بتونین با هماهنگی برنامه‌ریزی کنید"
            />
            <ContentCardContainer
              bgUrl="/assets/images/webView/sympathy/bg-1.webp"
              imageUrl="/assets/images/webView/sympathy/8.webp"
              title="یه پک راهنمای مشترک برای تو و پارتنرت در نظر گرفتیم تا بتونین توی هر موضوعی ازش کمک بگیرین"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SympathyContainer;

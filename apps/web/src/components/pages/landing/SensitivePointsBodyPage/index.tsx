'use client';

import ImpoIcon from '@assets/icons/impoName.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import { useSystem } from '@repo/core/hooks/useSystem';

const SensitivePointsBodyPage = () => {
  const { breakPoint } = useSystem();

  return (
    <div className="min-h-[100dvh]">
      <div className="relative scale-y-[-1] overflow-hidden [clip-path:ellipse(100%_80%_at_50%_95%)]">
        <div
          className="absolute inset-0 scale-y-[-1] !bg-repeat !bg-cover"
          style={{
            background:
              'url("/assets/images/sensitive/bg.webp"), linear-gradient(135deg, rgba(186, 39, 255, 0.2), rgba(133, 25, 218, 0.2))',
          }}
        />

        <CustomImage
          src="/assets/images/sensitive/header.webp"
          className="relative z-10 mx-auto pt-6 scale-y-[-1]"
          width={500}
          height={0}
          alt="sensitive"
        />
      </div>
      <div className="lg:w-10/12  lg:mx-auto h-full pb-[112px] lg:pb-14">
        <div className="bg-impo_White px-4 flex flex-col gap-3 -mt-10">
          <CustomTypography fontSize="Title_Small" className="text-impo_black text-center">
            سارا عزیز سلام
          </CustomTypography>
          <CustomTypography fontSize="Body_Medium" className="text-impo_black text-center">
            این تست، یک تست خود آگاهی برای کشف نقاط طلایی و حساس بدن در زنانه و بررسی می‌کنه کدام نواحی، نوع لمس و شرایط
            ذهنی بیشترین واکنش لذت رو برات ایجاد می‌کنند.
          </CustomTypography>
          <div className="flex flex-col gap-1">
            <CustomTypography className="text-impo_black text-center">هدف تست:</CustomTypography>
            <CustomTypography className="text-impo_black text-center">
              ارزیابی علمی آگاهی بدنی و ترجیحات حسی شماست، نه سنجش عملکرد یا مقایسه خودت با دیگران!
            </CustomTypography>
          </div>

          <div className="bg-impo_Pink_50 rounded-xl border-2 border-impo_Pink_400 p-4">
            <CustomTypography fontSize="Lable_Medium">نکاتی برای قبل از شروع تست</CustomTypography>
            <ul className="list-disc pr-4 mx-2 mt-3">
              <li>
                <CustomTypography fontSize="Body_Small">
                  در محیطی آرام، بدون مزاحمت و با نور ملایم باشید.
                </CustomTypography>
              </li>
              <li>
                <CustomTypography fontSize="Body_Small">
                  پاسخ‌ها باید بر اساس احساس واقعی و تجربه شخصی شما باشد، نه آنچه فکر می‌کنید «درست» است.
                </CustomTypography>
              </li>
              <li>
                <CustomTypography fontSize="Body_Small">
                  حین پاسخ دادن، چند ثانیه توجه خود را به بدن معطوف کنید.
                </CustomTypography>
              </li>
              <li>
                <CustomTypography fontSize="Body_Small">
                  برای هر سؤال، گزینه ای را انتخاب کنید که بیشترین شباهت را به تجربه یا ترجیح شما دارد.
                </CustomTypography>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="fixed md:relative bottom-0 max-w-[900px] mx-auto left-0 right-0  h-44  flex flex-col justify-end lg:justify-start  pb-2 items-center gap-3"
        style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 40.96%)' }}
      >
        <CustomLink href="/landing/sensitive/questions">
          <CustomTypography
            fontSize={`${breakPoint.desktop ? 'Lable_Large' : 'Title_Small'}`}
            className="text-impo_White !bg-impo_Pink_500 rounded-full h-12 flex justify-center items-center px-4"
          >
            شروع و تکمیل پرسشنامه
          </CustomTypography>
        </CustomLink>
        <div className="flex items-center justify-center">
          <CustomTypography fontSize="Body_Small" className="text-impo_black">
            تهیه و تایید علمی توسط متخصصین اپلیکیشن
          </CustomTypography>
          <ImpoIcon className="w-8 h-auto fill-impo_Pink_500" />
        </div>
      </div>
    </div>
  );
};

export default SensitivePointsBodyPage;

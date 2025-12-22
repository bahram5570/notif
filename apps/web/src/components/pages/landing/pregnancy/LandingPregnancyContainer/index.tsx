import BlueTickIcon from '@assets/icons/blueTick2.svg';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { TEST_ONLINE_DOCTOR_INFO } from './constants';

const LandingPregnancyContainer = () => {
  return (
    <div
      className="
                  w-full 
                  rounded-2xl 
                  px-4 
                  sm:px-6 
                  py-5 
                  bg-cover 
                  bg-center 
                  sm:rounded-2xl 
                  sm:border-[1px]
                  sm:border-impo_Grey_200
                  sm:dark:border-impo_Surface_SurfaceVariant           
                  bg-impo_OnBlack       
                  bg-[url(/assets/images/coverHollow.png)] 
                  dark:bg-[url(/assets/images/coverHollow_noBackground.png)] 
                "
    >
      <CustomTypography fontSize="Headline_Medium" tagType="h1" className="!text-impo_Neutral_OnBackground">
        تست بارداری آنلاین
      </CustomTypography>

      <div className="flex items-center gap-4 pt-4 pb-5">
        <div className="relative w-[60px] h-[60px] rounded-full border-2 border-impo_Primary_Primary">
          <CustomImage
            fill={true}
            alt="doctor"
            quality={100}
            src={TEST_ONLINE_DOCTOR_INFO.image}
            className="object-cover rounded-full"
          />

          <BlueTickIcon className="absolute -bottom-[5px] -left-[8px] w-[26px]" />
        </div>

        <div>
          <CustomTypography fontSize="Body_Medium" className="!text-impo_Surface_Outline">
            {TEST_ONLINE_DOCTOR_INFO.title}
          </CustomTypography>

          <CustomTypography fontSize="Lable_Large" className="pt-1 !text-impo_Neutral_OnBackground">
            {TEST_ONLINE_DOCTOR_INFO.name}
          </CustomTypography>
        </div>
      </div>

      <CustomTypography fontSize="Body_Large" className="text-justify !text-impo_Neutral_OnBackground">
        پریودت عقب افتاده؟ نشونه‌های بارداری رو داری؟ این تست حاملگی آنلاین در چند مرحله ساده، احتمال بارداریت رو محاسبه
        می‌کنه.
      </CustomTypography>

      <CustomImage
        width={380}
        height={380}
        alt="onlineTestPregnancy"
        className="mx-auto pt-2 pb-10"
        src="/assets/images/onlineTestPregnancy.webp"
      />

      <CustomLink
        id="test_pregnancy_tool"
        href="/landing/pregnancy/testOnline"
        className="w-full p-[10px] rounded-full flex justify-center bg-impo_Primary_Primary"
      >
        <CustomTypography fontSize="Lable_Medium" className="!text-impo_White">
          شروع تست آنلاین
        </CustomTypography>
      </CustomLink>
    </div>
  );
};

export default LandingPregnancyContainer;

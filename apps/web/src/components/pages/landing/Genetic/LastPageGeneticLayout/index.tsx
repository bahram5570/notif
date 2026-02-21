import drProfile from '@assets/images/genetic/drProfile.webp';
import logo from '@assets/images/genetic/logo.webp';
import Verified from '@assets/images/genetic/verified.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';

import { ExpertList } from './constants';

const LastPageGeneticLayout = async () => {
  return (
    <>
      <div
        className="w-full  
                  px-4 
                  sm:px-6 
                  py-5 
                  bg-[url(/assets/images/genetic/coverHollow.webp)] 
                  dark:bg-[url(/assets/images/genetic/coverHollowDark.webp)]  
                  bg-contain
                  bg-no-repeat 
                  bg-top"
      >
        <div className="pt-7">
          <div className="mt-14 grid place-items-center">
            <CustomImage src={logo} alt="logo" width={80} height={80} />
            <CustomTypography tagType="h2" fontSize="Title_Small" className="mt-6 !text-impo_Neutral_OnBackground">
              نکته آخر
            </CustomTypography>
            <CustomTypography
              tagType="p"
              fontSize="Body_Medium"
              className="mt-2 text-center  !text-impo_Neutral_OnBackground"
            >
              این فقط یه ارزیابی اولیه‌ست، پس آزمایش‌ها و مشورت با مشاور ژنتیک رو جدی بگیر حتی اگر فرزند سالم داری و
              هیچوقت مشکل ژنتیکی‌ای متوجه‌تون نبوده. با خیال راحت برو جلو و اگه چیزی ذهنت رو مشغول کرد از ما بپرس تا
              کمکت کنیم!
            </CustomTypography>
            <div className="mt-6 bg-[#EEEBFF] w-full border border-solid border-[#757AC2] rounded-xl grid grid-cols-[60%_40%] overflow-hidden">
              <div className="p-4 !pl-0">
                <CustomTypography tagType="h4" fontSize="Body_Small">
                  تهیه و تایید علمی توسط:
                </CustomTypography>
                <div className="flex items-center mt-2 gap-x-1">
                  <CustomTypography tagType="p" fontSize="Lable_Large">
                    دکتر سارا فرخی
                  </CustomTypography>
                  <Verified />
                </div>
                <ul className="mt-2 list-disc pr-3">
                  {ExpertList.map((item) => (
                    <li key={item}>
                      <CustomTypography tagType="p" fontSize="Body_Small">
                        {item}
                      </CustomTypography>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-3 flex self-end">
                <CustomImage src={drProfile} alt="drProfile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastPageGeneticLayout;

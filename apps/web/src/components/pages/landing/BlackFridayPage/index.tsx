'use client';

import { useEffect } from 'react';

import WarningCircle from '@assets/icons/warningCircle.svg';
import welcomVector from '@assets/images/blackFriday/welcomVector.webp';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';

// import SubscribtionGenerator from './SubscribtionGenerator';
// import { SubscribtionList } from './constants';

const BlackFridayPage = () => {
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <div className="w-full max-w-[500px] h-dvh relative bg-gradient-to-b from-white to-[#FFE2EA]">
      <div className="-mt-[60px]">
        <CustomImage src={welcomVector} alt="welcomVector" />
        <div className="px-4 -mt-[140px]">
          <div className="flex gap-x-2 items-center rounded-xl border px-4 py-3 mb-6 border-impo_Warning_Warning bg-impo_Warning_WarininContainer">
            <WarningCircle />
            <span className="h-10 w-[2px] bg-[#FFD49A]"></span>
            <div>
              <CustomTypography
                fontSize="Lable_Large"
                tagType="p"
                className="text-right mb-1 !text-impo_Warning_OnWarininContainer"
              >
                مهلت شرکت در این کمپین تموم شده.
              </CustomTypography>
              <CustomTypography
                fontSize="Body_Medium"
                tagType="p"
                className="text-right !text-impo_Warning_OnWarininContainer"
              >
                منتظر کمپین‌های بعدیمون باش.
              </CustomTypography>
            </div>
          </div>
          <CustomTypography fontSize="Headline_Medium" tagType="h2" className="text-center">
            جمعه دل‌نواز
          </CustomTypography>
          <CustomTypography fontSize="Body_Medium" tagType="p" className="text-center">
            ایمپو همه جوره در مسیر خودمراقبتی همراهته.
          </CustomTypography>
          <div className="mt-4">
            <CustomTypography fontSize="Lable_Large" tagType="h3" className="text-center mb-2">
              دوست داری تخفیف بیشتری هدیه بگیری؟
            </CustomTypography>
            <CustomTypography fontSize="Body_Medium" tagType="p" className="text-center">
              امسال بیشتر از همیشه در مسیر خودمراقبتی همراهت هستیم. بزن روی دکمه پایین تا وارد مسیر دریافت کد تخفیف ویژه
              با درصد بیشتر بشی.
            </CustomTypography>
          </div>
          <div className="flex justify-center mt-5">
            {/* blackfriday/enterPhone */}
            <CustomLink
              href={'#'}
              className="w-60 px-12 py-3 rounded-full block opacity-25 pointer-events-none bg-impo_Primary_Primary"
              id="button_offer"
            >
              <CustomTypography fontSize="Title_Small" className="text-center !text-impo_PrimaryMan_OnPrimaryMan">
                دریافت تخفیف ویژه
              </CustomTypography>
            </CustomLink>
          </div>
        </div>
        {/* <div
          className="h-full w-full pt-16 px-4 pb-[55px]"
          style={{
            backgroundImage: 'url(/assets/images/blackFriday/rect.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
          }}
        >
          <CustomTypography fontSize="Title_Small" tagType="h2" className="text-center">
            تخفیف همراهی برای همه
          </CustomTypography>
          <CustomTypography fontSize="Body_Medium" tagType="p" className="pt-2 text-center">
            به‌مناسبت این جمعه دل‌نواز اشتراک ویژه براتون باز کردیم. کافیه روی پلن مورد نظرت کلیک کنی
          </CustomTypography>
          <div className="flex justify-center justify-self-center gap-4 mt-4">
            {SubscribtionList.map((item, index) => {
              return (
                <SubscribtionGenerator
                  key={index}
                  discountNumber={item.discountNumber}
                  eventName={item.eventName}
                  mounth={item.mounth}
                  price={item.price}
                  pricePerMounth={item.pricePerMounth}
                />
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BlackFridayPage;

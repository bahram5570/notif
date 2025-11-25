'use client';

import { useEffect } from 'react';

import CheckCircle from '@assets/images/blackFriday/checkCircle.svg';
import welcomVector from '@assets/images/blackFriday/welcomVector.webp';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { SubscribtionList, SubscribtionReferal } from './constants';

const BlackFridayPage = () => {
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <div className="w-full max-w-[500px] h-full relative bg-gradient-to-b from-white to-[#FFE2EA]">
      <div>
        <CustomImage src={welcomVector} alt="welcomVector" />
        <div className="px-4 -mt-[140px]">
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
            <CustomLink
              href={'blackfriday/enterPhone'}
              className="w-60 px-12 py-3 rounded-full block"
              style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
              id="button_offer"
            >
              <CustomTypography fontSize="Title_Small" className="text-center" color={'PrimaryMan_OnPrimaryMan'}>
                دریافت تخفیف ویژه
              </CustomTypography>
            </CustomLink>
          </div>
        </div>
        <div
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
                <CustomLink
                  key={index}
                  href={SubscribtionReferal}
                  id={item.eventName}
                  className=" rounded-2xl p-[2px] grid bg-[linear-gradient(#FB1B6D,#3D1BFF)] w-[146px]"
                >
                  <CustomTypography
                    fontSize="Lable_Large"
                    tagType="p"
                    color={'White'}
                    className="bg-[linear-gradient(35deg,#FB1B6D,#3D1BFF)] rounded-t-2xl px-2 py-[10px] w-full text-center"
                  >
                    {`${item.discountNumber} تخفیف ویژه`}
                  </CustomTypography>
                  <div className="pt-3 px-2 pb-4 rounded-b-[14px] bg-white">
                    <div className="flex gap-x-1 items-center">
                      <CheckCircle />
                      <CustomTypography fontSize="Title_Small" tagType="p" className="pt-[.5px] text-center">
                        {`${item.mounth}`}
                      </CustomTypography>
                    </div>
                    <div className="flex gap-x-1 items-center mt-2">
                      <span className="text-[#353535] font-[350] text-[12px] ml-[4px]">ماهانه</span>
                      <CustomTypography fontSize="Lable_Medium" tagType="span" className="pt-[.5px] text-center">
                        {`${item.pricePerMounth} هزار تومان`}
                      </CustomTypography>
                    </div>
                    <span className="w-full h-[1px] my-2 bg-[#202020] opacity-[0.20] block"></span>
                    <CustomTypography fontSize="Lable_Medium" tagType="span" className="pt-[.5px] text-center">
                      {`${item.price} تومان`}
                    </CustomTypography>
                  </div>
                </CustomLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackFridayPage;

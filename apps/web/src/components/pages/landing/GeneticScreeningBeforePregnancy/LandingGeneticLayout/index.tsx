'use client';

import drProfile from '@assets/images/genetic/drProfile.webp';
import logo from '@assets/images/genetic/logo.webp';
import Verified from '@assets/images/genetic/verified.svg';

import QuestionProgressBar from '@components/modules/QuestionProgressBar';
import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { ExpertList } from './constants';

const LandingGeneticLayout = () => {

  return (
    <>
      <div
        className="w-full  
                  px-4 
                  sm:px-6 
                  py-5 
                  bg-[url(/assets/images/genetic/coverHollow.webp)] 
                  bg-contain
                  bg-no-repeat 
                  bg-top"
      >
        <div className="pt-7">
          <QuestionProgressBar currentStep="0" questionListLength={20} />
          <div className="mt-7 grid place-items-center">
            <CustomImage src={logo} alt="logo" width={80} height={80} />
            <CustomTypography tagType="h2" fontSize="Title_Small" className="mt-6">
              غربالگری ژنتیک ایمپو
            </CustomTypography>
            <CustomTypography tagType="p" fontSize="Body_Medium" className="mt-2 text-center">
              غربالگری ژنتیک ایمپو یک ابزار برای غربالگری بر اساس پارامترهای ژنتیکی و تاثیرش روی سلامت ژنتیکی فرزندان،
              ناباروری، دسته بندی بر اساس سطح ریسک ژنتیکی و ارائه راهکارهای لازم بر اساس سطح ریسک مشخص شده برای هر فرد
              هست. برای این منظور لازمه که پرسشنامه‌ای که در ادامه بهت نمایش می‌دیم رو با دقت تکمیل کنی. نکته مهم اینه
              که این فرم غربالگری و الگوریتم شناسایی موجود در اون کاملا علمی بوده و توسط متخصص ژنتیک تهیه و تایید شده.
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
      <div className="mt-6 w-fit mx-auto my-5 flex">
        <CustomLink
          href={'/landing/genetic-screening-before-pregnancy/testOnline'}
          className="w-fit px-10 py-[12px] rounded-full flex justify-center"
          style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
        >
          <CustomTypography fontSize="Lable_Medium" color={'White'}>
            شروع و تکمیل پرسشنامه
          </CustomTypography>
        </CustomLink>
      </div>
    </>
  );
};

export default LandingGeneticLayout;

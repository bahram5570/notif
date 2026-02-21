'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';

import { BOOK_PART1 } from '../../PsychologicalAnesthesia/Movie/constants';

const Book = () => {
  return (
    <div className=" rounded-2xl py-6 px-4 bg-gradient-to-b from-[#ECFBE3] to-[#F7F7F7]">
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <CustomTypography fontSize="Title_Medium" style={{ color: '#076747' }}>
            تاثیر کتاب طنز
          </CustomTypography>
          <CustomTypography fontSize="Body_Medium" className="!text-impo_Surface_InverseSurface">
            مطالعه کتاب طنز، با ایجاد خنده و آرامش ذهنی، به کاهش افسردگی ناشی از جنگ و تقویت امید در دل کمک می‌کند.
          </CustomTypography>
          <CustomTypography fontSize="Lable_MediumProminet" className="!text-impo_Neutral_OnBackground">
            این کتاب‌های صوتی، بهت کمک می‌کنن تا برای چند لحظه لبخند به لبت و چشم‌هات بیاد.
          </CustomTypography>
        </div>

        <ul className="px-5 w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {BOOK_PART1.map((item, index) => {
            return (
              <li className=" list-disc flex flex-col justify-center items-center gap-2  " key={index}>
                <div className=" relative">
                  <CustomImage
                    height={0}
                    width={500}
                    sizes="500px"
                    alt="distract"
                    src={item.image}
                    className="pt-4 md:p-0 w-[96px] md:w-[150px] lg:max-w-[320px] xl:max-w-[300px] my-3 relative"
                    hasPreviewImage
                  />
                  {item.percent && (
                    <div className="absolute bottom-0 left-0 w-8 h-8 flex justify-center items-center rounded-full bg-impo_Primary_Primary !text-impo_White">
                      <CustomTypography fontSize="Lable_Small" className="text-center !text-impo_Primary_OnPrimary">
                        {`%${item.percent}`}
                      </CustomTypography>
                    </div>
                  )}
                </div>

                <CustomTypography fontSize="Lable_Small" className="text-center !text-impo_Surface_InverseSurface">
                  {item.description}
                </CustomTypography>
                {item.englishName && (
                  <CustomTypography
                    fontSize="Lable_Small"
                    className="text-center !text-impo_Surface_InverseSurface"
                    numbersMode="english"
                  >
                    {item.englishName}
                  </CustomTypography>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-full my-3" style={{ border: `1px solid #8BAD7820` }}></div>
      <div className="flex flex-col gap-1">
        {/* <CustomTypography fontSize="Lable_MediumProminet">
          از کجا می‌تونی کتاب خوب پیدا کنی؟
        </CustomTypography> */}

        <CustomLink
          target="_blank"
          href="https://fidibo.com/page/marham?pageTitle=Marham&utm_source=impo&utm_medium=landing&utm_campaign=marham"
          // className="md:mb-5"
          className="!text-impo_Success_Success"
          // className="rounded-full w-full h-12 lg:h-[60px] mx-auto flex items-center justify-center gap-2 relative z-10"
          style={{ textDecorationLine: 'underline' }}
        >
          فیدیبو
        </CustomLink>
        <CustomTypography fontSize="Body_Medium" className="!text-impo_Surface_InverseSurface">
          می‌تونه مرهمی باشه برای این روزهات؛
        </CustomTypography>
        <CustomTypography fontSize="Body_Medium" className="!text-impo_Surface_InverseSurface">
          کتاب‌های صوتی بالا رو با کد تخفیف 70 تا 100% به مدت ۲ هفته می‌تونید استفاده کنین.
        </CustomTypography>

        {/* <div className="flex  gap-1 justify-start items-center">
          <CustomTypography fontSize="Lable_MediumProminet">
            کد تخفیف 70 درصدی:
          </CustomTypography>
          <u style={{ ...typographyDetails }} className=" cursor-pointer text-impo_Primary_Primary " onClick={copylink}>
            Marham
          </u>
        </div> */}
      </div>
    </div>
  );
};

export default Book;

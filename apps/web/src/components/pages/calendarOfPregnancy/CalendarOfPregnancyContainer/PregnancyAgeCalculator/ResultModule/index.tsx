// import { useEffect } from 'react';
// import EyeIcon from '@assets/icons/eye.svg';
// import RulerIcon from '@assets/icons/ruler.svg';
// import WeightIcon from '@assets/icons/weight.svg';
import CustomButton from '@components/ui/CustomButton';
import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

// import PregnancyProgressbar from '../PregnancyProgressbar';
import { ResultModuleTypes } from './types';

const ResultModule = ({ pregnancyDateResult, weeksResult, onReset }: ResultModuleTypes) => {
  // useEffect(() => {
  //   window.scrollTo({ top: 500, behavior: 'smooth' });
  // }, [pregnancyDateResult, weeksResult.dayOfWeek, weeksResult.week]);

  const weekImage = `/assets/images/pregnacy-weeks/week${weeksResult.week}.webp`;

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col justify-center sm:items-baseline items-center gap-[5px]">
          <CustomTypography fontSize="Title_Medium" className="w-full text-center !text-impo_Black">
            سن بارداری شما:
          </CustomTypography>

          <CustomTypography fontSize="Body_Large" className="w-full text-center !text-impo_Black">
            {weeksResult.week} هفته و {weeksResult.dayOfWeek} روز است
          </CustomTypography>
        </div>
        <div className="grid grid-cols-2 w-full gap-1 items-center -mt-8">
          <div className="relative h-[280px] sm:w-full sm:h-[330px] w-full flex justify-center items-center">
            <CustomImage src={weekImage} alt="" fill={true} className="object-contain" />
          </div>
          <div className="sm:w-full sm:h-[215px] h-full sm:grid sm:content-center flex flex-col justify-center bg-contain px-4 py-5 rounded-2xl bg-[url(/assets/images/pregnancyDatebackground2.webp)] bg-no-repeat bg-center">
            <CustomTypography fontSize="Lable_Medium" className="text-center !text-impo_Black">
              تاریخ به دنیا اومدن کوچولوت:
            </CustomTypography>

            <CustomTypography fontSize="Body_Small" className="text-center mt-[6px] !text-impo_Black">
              {pregnancyDateResult}
            </CustomTypography>

            <div className="flex justify-center mt-2">
              <CustomButton
                onClick={onReset}
                varient="outline"
                fontSize="Lable_SmallProminet"
                className="!px-4 !py-[6px] !h-[28px] border-none !w-fit bg-impo_Primary_Primary"
              >
                محاسبه دوباره
              </CustomButton>
            </div>
          </div>
        </div>
        {/* <PregnancyProgressbar week={weeksResult.week} /> */}
      </div>
      <CustomLink
        href={'/download'}
        className="h-[48px] w-full !mt-auto sm:max-w-[460px] text-center rounded-full bg-impo_Pink_500"
      >
        <CustomTypography
          fontSize="Title_Small"
          className="h-full !text-impo_White flex justify-center py-[13px] items-center"
        >
          از ایمپو استفاده کن
        </CustomTypography>
      </CustomLink>
    </>
  );
};

export default ResultModule;

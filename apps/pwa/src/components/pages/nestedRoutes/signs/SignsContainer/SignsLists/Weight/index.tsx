import WeightIcon from '@assets/icons/weight.svg';
import CalendarArrow from '@assets/shared/icons/calendarArrow.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { WeightPropsType } from './type';

const Weight = ({ weight }: WeightPropsType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkToHandler = () => {
    pageNavigationHandler({
      id: 'addWeight',
      showProgressBar: true,
      linkTo: `/protected/addWeight?currentWeight=${weight}`,
    });
  };

  return (
    <div className=" rounded-2xl p-2 flex flex-col bg-impo_Neutral_Background">
      <div className="w-full flex flex-row-reverse items-center justify-between h-fit p-2 border-b-[1px] border-b-impo_Neutral_Surface">
        <div className="flex flex-col items-end gap-1">
          <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            ویرایش وزن
          </CustomTypography>

          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            از اینجا میتونی وزنت رو ویرایش کنی
          </CustomTypography>
        </div>

        <div className=" w-12 h-12 bg-impo_Blue_50 dark:bg-impo_Blue_900 flex justify-center items-center rounded-full">
          <WeightIcon className="w-6 h-auto" />
        </div>
      </div>

      <div className="flex flex-col items-end gap-1 p-2">
        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          وزن
        </CustomTypography>

        <div
          onClick={linkToHandler}
          className="w-full rounded-xl h-10 flex flex-row-reverse justify-between p-3 items-center bg-impo_Neutral_Surface"
        >
          <div className="w-full">
            <CustomTypography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground">
              {`${!weight ? 'kg__' : `${weight}kg`} `}
            </CustomTypography>
          </div>

          <div className="w-full">
            <CalendarArrow className="w-[18px] h-auto rotate-[268deg] stroke-impo_Surface_OutlineVariant" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weight;

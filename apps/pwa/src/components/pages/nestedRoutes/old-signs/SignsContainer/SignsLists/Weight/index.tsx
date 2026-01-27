import CalendarArrow from '@assets/icons/calendarArrow.svg';
import WeightIcon from '@assets/icons/weight.svg';

import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { WeightPropsType } from './type';

const Weight = ({ weight }: WeightPropsType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkTo = () => {
    pageNavigationHandler({
      showProgressBar: true,
      id: 'addWeight',
      linkTo: `/protected/addWeight?currentWeight=${weight}`,
    });
  };

  return (
    <div className=" rounded-2xl p-2 flex flex-col bg-impo_Neutral_Background">
      <div className="divide-y-[1px] p-2">
        <div className="w-full flex flex-row-reverse items-center justify-between h-fit  p-2 ">
          <div className="flex flex-col items-end gap-1">
            <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
              ویرایش وزن
            </Dark_Typography>
            <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
              از اینجا میتونی وزنت رو ویرایش کنی
            </Dark_Typography>
          </div>

          <div className=" w-12 h-12  flex justify-center items-center rounded-full bg-impo_Blue_50">
            <WeightIcon className="w-6 h-auto" />
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 p-1">
          <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            وزن
          </Dark_Typography>
          <div
            className="w-full rounded-xl h-10 flex flex-row-reverse justify-between p-3 items-center bg-impo_Surface_SurfaceVariant"
            onClick={linkTo}
          >
            <div className="w-full">
              <Dark_Typography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground">
                {`${!weight ? 'kg__' : `${weight}kg`} `}
              </Dark_Typography>
            </div>
            <div className="w-full">
              <CalendarArrow className="w-[18px] h-auto rotate-[268deg] stroke-impo_Surface_OutlineVariant" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weight;

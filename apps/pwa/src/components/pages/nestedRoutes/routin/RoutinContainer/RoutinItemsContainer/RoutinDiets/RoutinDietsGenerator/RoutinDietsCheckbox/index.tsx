import RadioFillIcon from '@assets/icons/Radio-fill.svg';
import RadioIcon from '@assets/icons/Radio.svg';
import { textShorter } from '@utils/scripts';

import { ProgramWidgetItemStatusEnum } from '@components/pages/nestedRoutes/routin/enum';
import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import useSeenItem from './__hooks__/useSeenItem';
import { RoutinDietsCheckboxPropsType } from './type';

const RoutinDietsCheckbox = ({ item, programId, onClick, index }: RoutinDietsCheckboxPropsType) => {
  const { seenHandler, isLoading } = useSeenItem({ programId, item, index });

  return (
    <>
      <div className={`flex flex-row-reverse justify-between items-center ${isLoading && 'pointer-events-none'}`}>
        <div
          className="w-full flex items-center justify-end gap-[10px] cursor-pointer pointer-events-auto"
          onClick={onClick}
        >
          <div className="flex flex-col items-end gap-1">
            <Dark_Typography
              fontSize="Lable_Medium"
              className={`text-impo_Neutral_OnBackground ${item.status === ProgramWidgetItemStatusEnum.Compelet && 'line-through'}`}
            >
              {item.title}
            </Dark_Typography>
            <Dark_Typography className="text-impo_Neutral_OnBackground" fontSize="Body_Small">
              {textShorter(item.subtitle, 40)}
            </Dark_Typography>
          </div>

          <div className="flex flex-row-reverse gap-3">
            <div
              className="w-6 h-auto flex justify-center items-center pointer-events-auto"
              onClick={(e) => {
                e.stopPropagation();
                seenHandler();
              }}
            >
              {item.status === ProgramWidgetItemStatusEnum.Compelet ? (
                <RadioFillIcon className="w-4 h-auto" />
              ) : (
                <RadioIcon className="w-4 h-auto stroke-impo_Surface_OutlineVariant" />
              )}
            </div>
            <div className="relative w-12 h-12 min-w-12 min-h-12 rounded-full">
              <div className={`w-full h-full rounded-xl  overflow-hidden`}>
                <CustomImage src={item.image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoutinDietsCheckbox;

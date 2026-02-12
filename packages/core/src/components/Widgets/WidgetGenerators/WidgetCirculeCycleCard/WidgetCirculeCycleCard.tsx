import { WidgetGenerators } from '..';
import { CycleLoadingStatusEnum } from '../../../../providers/WidgetActionsProvider';
import CircleContainer from './CircleContainer';
import { WidgetCirculeCycleCardProps } from './types';

export const WidgetCirculeCycleCard = ({ data, insideCycleWidgetList, loadingStatus }: WidgetCirculeCycleCardProps) => {
  return (
    <div className="relative flex flex-col justify-between h-full">
      {loadingStatus === CycleLoadingStatusEnum.successed && (
        <div>
          {insideCycleWidgetList && (
            <div className="flex flex-col gap-4 p-4">
              {insideCycleWidgetList.map((item, index) => (
                <WidgetGenerators {...item} key={index} />
              ))}
            </div>
          )}
        </div>
      )}

      <CircleContainer data={data} loadingStatus={loadingStatus} />
    </div>
  );
};

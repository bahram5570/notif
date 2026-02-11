import { WidgetGenerators } from '..';
import { WidgetListProps } from './types';

export const WidgetList = ({ data }: WidgetListProps) => {
  return (
    <>
      {data.widgetList.map((item, index) => (
        <div className="flex flex-row w-full" key={index}>
          {/* // todo  */}
          {/* <WidgetGenerators {...item} /> */}
        </div>
      ))}
    </>
  );
};

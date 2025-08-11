import useTheme from '@hooks/useTheme';

import WidgetGenerator from '..';
import { WidgetListProps } from './types';

const WidgetList = ({ data }: WidgetListProps) => {
  return (
    <>
      {data.widgetList.map((item, index) => (
        <div className="flex flex-row w-full" key={index}>
          <WidgetGenerator {...item} />
        </div>
      ))}
    </>
  );
};

export default WidgetList;

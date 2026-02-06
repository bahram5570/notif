import { CustomImage } from '@repo/core/components/ui/CustomImage';

import useWidgetActions from '@hooks/useWidgetActions';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import { WidgetMediaProps } from './types';

const WidgetMedia = ({ data }: WidgetMediaProps) => {
  const { callEvent } = useAnalytics();
  const { actionHandler } = useWidgetActions();

  const clickHandler = () => {
    callEvent('Action_From_Media');
    actionHandler(data.action);
  };

  return (
    <div onClick={clickHandler} className="px-4 pt-4">
      <CustomImage src={data.url} className="rounded-2xl pb-[2px]" />
    </div>
  );
};

export default WidgetMedia;

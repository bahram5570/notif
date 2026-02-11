import { useAnalytics } from '../../../../hooks/useAnalytics';
import { useWidgetActions } from '../../../../hooks/useWidgetActions';
import { CustomImage } from '../../../ui/CustomImage';
import { WidgetMediaProps } from './types';

export const WidgetMedia = ({ data }: WidgetMediaProps) => {
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

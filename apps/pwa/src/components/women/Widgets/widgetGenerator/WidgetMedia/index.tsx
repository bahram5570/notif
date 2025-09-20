import CustomImage from '@components/ui/CustomImage';
import useAnalytics from '@hooks/useAnalytics';
import useWidgetActions from '@hooks/useWidgetActions';

import { WidgetMediaProps } from './types';

const WidgetMedia = ({ data }: WidgetMediaProps) => {
  const { callEvent } = useAnalytics();
  const { actionHandler } = useWidgetActions();

  const clickHandler = () => {
    callEvent('Action_From_Media');
    actionHandler(data.action);
  };

  return (
    <div onClick={clickHandler}>
      <CustomImage src={data.url} className="rounded-2xl" />
    </div>
  );
};

export default WidgetMedia;

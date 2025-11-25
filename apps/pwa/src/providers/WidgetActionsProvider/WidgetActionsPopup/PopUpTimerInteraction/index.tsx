import useWidgetActions from '@hooks/useWidgetActions';

import { PopUpTimerInteractionTypes } from './types';

const PopUpTimerInteraction = ({ data, timerInteractionCompleteHandler }: PopUpTimerInteractionTypes) => {
  const { actionHandler } = useWidgetActions();

  // todo

  return (
    <div
      className="fixed top-0 w-full p-2 z-50 bg-red-500"
      onClick={() => {
        actionHandler(data.action);
      }}
    >
      {data.title}
      {data.description}
    </div>
  );
};

export default PopUpTimerInteraction;

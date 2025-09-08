import useCurrentRoutinIndex from '@hooks/__routin__/useCurrentRoutinIndex';
import useWidgetActions from '@hooks/useWidgetActions';

import { ProgramWidgetCompleteEnum } from '../../../../enum';
import { IS_LAST_ROUTIN_ITEM } from '../../../constant';
import RoutinDietsSimple from './RoutinDietSimple';
import RoutinDietsCheckbox from './RoutinDietsCheckbox';
import RoutinDietsLockOnlock from './RoutinDietsLockOnlock';
import { RoutinDietsGeneratorProps } from './types';

const RoutinDietsGenerator = (props: RoutinDietsGeneratorProps) => {
  let currentRoutin: JSX.Element | null = null;

  const { actionHandler } = useWidgetActions();
  const { updateRoutinState } = useCurrentRoutinIndex();

  const clickHandler = () => {
    localStorage.setItem(IS_LAST_ROUTIN_ITEM, props.isLastItem ? 'true' : 'false');

    if (!props.isLastItem) {
      updateRoutinState({
        currentIndex: props.index + 1,
        typeMessage: props.compeletItemType === ProgramWidgetCompleteEnum.LockOnlock ? 'lockOnlock' : 'checkbox',
      });
    }

    actionHandler(props.item.action);
  };

  switch (props.compeletItemType) {
    case ProgramWidgetCompleteEnum.Simple:
      currentRoutin = <RoutinDietsSimple item={props.item} onClick={clickHandler} />;
      break;
    case ProgramWidgetCompleteEnum.Checkbox:
      currentRoutin = (
        <RoutinDietsCheckbox item={props.item} programId={props.programId} onClick={clickHandler} index={props.index} />
      );
      break;
    case ProgramWidgetCompleteEnum.LockOnlock:
      currentRoutin = <RoutinDietsLockOnlock item={props.item} onClick={clickHandler} />;
      break;
  }

  return currentRoutin === null ? <></> : <>{currentRoutin}</>;
};

export default RoutinDietsGenerator;

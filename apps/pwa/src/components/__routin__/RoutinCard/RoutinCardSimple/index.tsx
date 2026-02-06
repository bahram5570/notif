import { useWidgetActions } from '@repo/core/hooks/useWidgetActions';

import RoutinCardHeader from '../RoutinCardHeader';
import RoutinCardSimpleContext from './RoutinCardSimpleContext';
import { RoutinCardSimplePropsType } from './type';

const RoutinCardSimple = ({ data }: RoutinCardSimplePropsType) => {
  const { actionHandler } = useWidgetActions();

  const onClick = () => {
    actionHandler(data.button.action);
  };

  return (
    <div onClick={onClick}>
      <RoutinCardHeader
        completeRatio={data.completeRatio}
        completeTitle={data.completeTitle}
        isBookmarked={data.isBookmarked}
        programId={data.programId}
      />
      <RoutinCardSimpleContext data={data} />
    </div>
  );
};

export default RoutinCardSimple;

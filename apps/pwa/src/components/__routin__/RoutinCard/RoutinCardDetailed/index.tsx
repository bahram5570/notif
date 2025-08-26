import useWidgetActions from '@hooks/useWidgetActions';

import RoutinCardHeader from '../RoutinCardHeader';
import RoutinCardDetailedContext from './RoutinCardDetailedContext';
import { RoutinCardDetailedPropsType } from './type';

const RoutinCardDetailed = ({ data }: RoutinCardDetailedPropsType) => {
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
        showBookmark={true}
      />
      <RoutinCardDetailedContext data={data} />
    </div>
  );
};

export default RoutinCardDetailed;

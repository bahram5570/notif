import { ProgramWidgetItemStatusEnum } from '@components/women/pages/nestedRoutes/routin/enum';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { UseSeenItemPropsType } from './type';

const useSeenItem = ({ programId, item }: UseSeenItemPropsType) => {
  const { refetchQuery } = useCustomReactQuery();
  const api =
    item.status === ProgramWidgetItemStatusEnum.Compelet ? 'widgets/program/item/unseen' : 'widgets/program/item/seen';

  const successHandler = () => {
    refetchQuery({ queryKey: ['routinItems'] });
  };

  const { callApi } = useApi({ api, method: 'POST', onSuccess: successHandler });

  const seenHandler = () => {
    const payload = {
      itemId: item.id,
      programId,
    };

    callApi(payload);
  };
  return { seenHandler };
};

export default useSeenItem;

import { RoutinResponseTypes } from '@components/women/pages/nestedRoutes/routin/RoutinContainer/__hooks__/useGetData/types';
import { ProgramWidgetItemStatusEnum } from '@components/women/pages/nestedRoutes/routin/enum';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { UseSeenItemPropsType } from './type';

const useSeenItem = ({ programId, item }: UseSeenItemPropsType) => {
  const { getQuery, updateQuery } = useCustomReactQuery();

  const data = getQuery<RoutinResponseTypes>({ queryKey: ['routinItems'] });

  const api =
    item.status === ProgramWidgetItemStatusEnum.Compelet ? 'widgets/program/item/unseen' : 'widgets/program/item/seen';

  const successHandler = () => {
    if (!data) return;
    const updatedItems = data.items.map((i) =>
      i.id === item.id
        ? {
            ...i,
            status:
              i.status === ProgramWidgetItemStatusEnum.Compelet
                ? ProgramWidgetItemStatusEnum.InCompelet
                : ProgramWidgetItemStatusEnum.Compelet,
          }
        : i,
    );
    updateQuery({ queryKey: ['routinItems'], payload: { ...data, items: updatedItems } });
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

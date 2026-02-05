import { RoutinResponseTypes } from '@components/pages/nestedRoutes/routin/RoutinContainer/__hooks__/useGetData/types';
import { ProgramWidgetItemStatusEnum } from '@components/pages/nestedRoutes/routin/enum';
import useCurrentRoutinIndex from '@hooks/__routin__/useCurrentRoutinIndex';
import useApi from '@hooks/useApi';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { UseSeenItemPropsType } from './type';

const useSeenItem = ({ programId, item, index }: UseSeenItemPropsType) => {
  const { getQuery, updateQuery } = useCustomReactQuery();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { updateRoutinState } = useCurrentRoutinIndex();

  const data = getQuery<RoutinResponseTypes>({ queryKey: ['routinItems'] });

  const api =
    item.status === ProgramWidgetItemStatusEnum.Compelet ? 'widgets/program/item/unseen' : 'widgets/program/item/seen';

  const successHandler = () => {
    const updatedItems = data?.items.map((i) =>
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

    if (updatedItems) {
      const checkShowModal = updatedItems.every((item) => item.status === ProgramWidgetItemStatusEnum.Compelet);

      if (checkShowModal) {
        newQueryParamsHandler({ [MODALS.MODAL_FEEDBACK]: 'true' });
      }
    }

    if (item.status === ProgramWidgetItemStatusEnum.InCompelet) {
      updateRoutinState({
        showToast: true,
        currentIndex: index + 1,
        typeMessage: 'checkbox',
      });
    }
  };

  const { callApi, isLoading } = useApi({ api, method: 'POST', onSuccess: successHandler });

  const seenHandler = () => {
    const payload = {
      itemId: item.id,
      programId,
    };

    callApi(payload);
  };
  return { seenHandler, isLoading };
};

export default useSeenItem;

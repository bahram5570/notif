import { convertToPersianOrdinal } from '@utils/numbers';

import { RoutinResponseTypes } from '@components/women/pages/nestedRoutes/routin/RoutinContainer/__hooks__/useGetData/types';
import { ProgramWidgetItemStatusEnum } from '@components/women/pages/nestedRoutes/routin/enum';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useCustomToast from '@hooks/useCustomToast';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

import { UseSeenItemPropsType } from './type';

const useSeenItem = ({ programId, item, index }: UseSeenItemPropsType) => {
  const { getQuery, updateQuery } = useCustomReactQuery();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { onToast } = useCustomToast();

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
      onToast({
        icon: 'success',
        type: 'success',
        message: `مرحله ${convertToPersianOrdinal(index + 1)} چک لیست با موفقیت انجام شد`,
        position: 'bottom-center',
        style: { margin: '0' },
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

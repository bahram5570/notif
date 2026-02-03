import useCurrentRoutinIndex from '@hooks/__routin__/useCurrentRoutinIndex';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { IS_LAST_ROUTIN_ITEM } from '../../../RoutinContainer/constant';

const useSeen = () => {
  const route = useRouter();
  const { getQueryParams } = useQueryParamsHandler();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { refetchQuery } = useCustomReactQuery();
  const { updateRoutinState } = useCurrentRoutinIndex();
  const searchData = getQueryParams('searchData');
  const isLastItem = localStorage.getItem(IS_LAST_ROUTIN_ITEM);
  const checkIsLastItem = isLastItem && JSON.parse(isLastItem);

  const params = searchData ? new URLSearchParams(searchData) : null;
  const programId = params ? params.get('catId') : '';
  const itemId = params ? params.get('itemId') : '';

  const successHandler = () => {
    if (checkIsLastItem) {
      refetchQuery({ queryKey: ['routinItem'] });
      newQueryParamsHandler({ [MODALS.MODAL_FEEDBACK]: 'true' });
    } else {
      route.back();
      updateRoutinState('showToast', true);
    }

    localStorage.removeItem(IS_LAST_ROUTIN_ITEM);
  };

  const { callApi, isLoading } = useApi({
    api: 'widgets/program/item/seen',
    method: 'POST',
    onSuccess: successHandler,
  });

  const onSeenHandler = () => {
    const payload = {
      programId: programId,
      itemId: itemId,
    };

    callApi(payload);
  };

  return { isLoading, onSeenHandler };
};

export default useSeen;

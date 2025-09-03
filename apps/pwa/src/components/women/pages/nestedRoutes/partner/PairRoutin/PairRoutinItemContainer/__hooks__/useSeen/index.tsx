import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useRouter } from 'next/navigation';

import { IS_LAST_ROUTIN_ITEM, SHOW_ROUTIN_UNLOCK_TOST } from '../../../PairRoutinContainer/constant';

const useSeen = () => {
  const route = useRouter();
  const { getQueryParams } = useQueryParamsHandler();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { refetchQuery } = useCustomReactQuery();
  const searchData = getQueryParams('searchData');
  const isLastItem = localStorage.getItem(IS_LAST_ROUTIN_ITEM);
  const checkIsLastItem = isLastItem && JSON.parse(isLastItem);

  const params = searchData ? new URLSearchParams(searchData) : null;
  const programId = params ? params.get('catId') : '';
  const itemId = params ? params.get('itemId') : '';

  const successHandler = () => {
    if (checkIsLastItem) {
      newQueryParamsHandler({ [MODALS.MODAL_FEEDBACK]: 'true' });
      refetchQuery({ queryKey: ['pairRoutinItem'] });
    } else {
      localStorage.setItem(SHOW_ROUTIN_UNLOCK_TOST, 'true');
      route.back();
    }

    localStorage.removeItem(IS_LAST_ROUTIN_ITEM);
  };

  const { callApi, isLoading } = useApi({
    api: 'widgets/womanpairprogram/item/seen',
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

import { isLikedMaker } from './__utils__';

import useApi from '@hooks/useApi';

import useNameSelectorData from '../useNameSelectorData';
import { IsLikedHandlerTypes } from './types';

const useNameSelectorLike = () => {
  const { data, setData } = useNameSelectorData();

  const successHandler = (isAdd: boolean) => {
    if (data) {
      const payload = { ...data };

      if (isAdd) {
        payload.favoritesTotalCount = payload.favoritesTotalCount + 1;
      } else {
        if (payload.favoritesTotalCount > 0) {
          payload.favoritesTotalCount = payload.favoritesTotalCount - 1;
        }
      }

      setData(payload);
    }
  };

  const { callApi: callAdd } = useApi({
    method: 'PUT',
    api: 'feature/babyname/favorite/add',
    onSuccess: () => successHandler(true),
  });

  const { callApi: callRemove } = useApi({
    method: 'PUT',
    api: 'feature/babyname/favorite/remove',
    onSuccess: () => successHandler(false),
  });

  const isLikedHandler: IsLikedHandlerTypes = (card) => {
    if (data) {
      const result = isLikedMaker({ data, card });
      setData(result);
    }

    if (card.isLiked) {
      callRemove({ nameId: card.id });
    } else {
      callAdd({ nameId: card.id });
    }
  };

  return { isLikedHandler };
};

export default useNameSelectorLike;

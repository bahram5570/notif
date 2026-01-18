import Dark_Button from '@components/ui/Dark_Button';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { RATING_QUERY_NAME } from './constants';

const ChatFooterRating = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();

  return (
    <>
      <Dark_Button
        fontSize="Lable_Large"
        className="h-10"
        navigationLoadingId="ChatFooterRating"
        onClick={() => newQueryParamsHandler({ [RATING_QUERY_NAME]: 'true' })}
      >
        ثبت نظر
      </Dark_Button>
    </>
  );
};

export default ChatFooterRating;

import { CustomButton } from '@repo/core/components/ui/CustomButton';

import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { RATING_QUERY_NAME } from './constants';

const ChatFooterRating = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();

  return (
    <>
      <CustomButton
        fontSize="Lable_Large"
        className="h-10"
        navigationLoadingId="ChatFooterRating"
        onClick={() => newQueryParamsHandler({ [RATING_QUERY_NAME]: 'true' })}
      >
        ثبت نظر
      </CustomButton>
    </>
  );
};

export default ChatFooterRating;

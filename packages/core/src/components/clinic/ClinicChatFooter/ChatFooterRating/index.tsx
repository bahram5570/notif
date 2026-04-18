import { CustomButton } from '@repo/core/components/ui/CustomButton';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { useSystem } from '../../../../hooks/useSystem';
import { RATING_QUERY_NAME } from '../../constants';

const ChatFooterRating = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { appName } = useSystem();
  const isMan = appName === 'MEN_PWA';

  return (
    <>
      <CustomButton
        fontSize="Lable_Large"
        className={`h-10 ${isMan && '!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan'}`}
        navigationLoadingId="ChatFooterRating"
        onClick={() => newQueryParamsHandler({ [RATING_QUERY_NAME]: 'true' })}
      >
        ثبت نظر
      </CustomButton>
    </>
  );
};

export default ChatFooterRating;

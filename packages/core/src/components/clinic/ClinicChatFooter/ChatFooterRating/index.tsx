import { useMemo } from 'react';

import { useQueryParamsHandler } from '../../../../hooks/useQueryParamsHandler';
import { useSystem } from '../../../../hooks/useSystem';
import { CustomButton } from '../../../ui/CustomButton';
import { RATING_QUERY_NAME } from '../../constants';

const ChatFooterRating = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { appName } = useSystem();

  const bg = useMemo(() => {
    switch (appName) {
      case 'MEN_PWA':
        return '!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan';

      default:
        return '';
    }
  }, [appName]);

  return (
    <>
      <CustomButton
        fontSize="Lable_Large"
        className={`h-10 ${bg}`}
        navigationLoadingId="ChatFooterRating"
        onClick={() => newQueryParamsHandler({ [RATING_QUERY_NAME]: 'true' })}
      >
        ثبت نظر
      </CustomButton>
    </>
  );
};

export default ChatFooterRating;

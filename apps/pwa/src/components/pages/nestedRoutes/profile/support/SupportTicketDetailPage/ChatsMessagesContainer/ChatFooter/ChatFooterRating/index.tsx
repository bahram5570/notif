import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ChatFooterRatingPropsType } from './type';

const ChatFooterRating = ({ rateDescription }: ChatFooterRatingPropsType) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        <CustomTypography fontSize="Lable_LargeProminet" className="text-impo_Success_Success">
          نظر شما ثبت شده
        </CustomTypography>
        <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant text-center">
          {rateDescription}
        </CustomTypography>
      </div>
    </>
  );
};

export default ChatFooterRating;

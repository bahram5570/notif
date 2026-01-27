import Dark_Typography from '@components/ui/Dark_Typography';

import { ChatFooterRatingPropsType } from './type';

const ChatFooterRating = ({ rateDescription }: ChatFooterRatingPropsType) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        <Dark_Typography fontSize="Lable_LargeProminet" className="text-impo_Success_Success">
          نظر شما ثبت شده
        </Dark_Typography>
        <Dark_Typography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant text-center">
          {rateDescription}
        </Dark_Typography>
      </div>
    </>
  );
};

export default ChatFooterRating;

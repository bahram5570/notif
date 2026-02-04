import CloseIcon from '@assets/icons/plus.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { useRouter } from 'next/navigation';

import { RATING_HEADING_HEIGHT } from './constants';

const RatingHeading = () => {
  const router = useRouter();

  return (
    <div
      className="fixed top-0 left-0 right-0 px-4 pt-6 mx-auto z-30 bg-impo_Neutral_Background"
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: RATING_HEADING_HEIGHT }}
    >
      <div className="w-full flex items-center justify-between">
        <div
          onClick={() => router.back()}
          className="w-12 h-12 rounded-full flex items-center justify-center border-[1px] border-impo_Neutral_Surface"
        >
          <CloseIcon className="w-8 h-auto rotate-45 stroke-impo_Neutral_OnBackground" />
        </div>

        <CustomTypography fontSize="Lable_Large" className="text-impo_Surface_OnSurfaceVariant">
          ثبت نظر
        </CustomTypography>
      </div>
    </div>
  );
};

export default RatingHeading;

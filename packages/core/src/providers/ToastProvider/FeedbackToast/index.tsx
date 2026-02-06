import { CustomTypography } from '../../../components/ui/CustomTypography';

import { MAX_SCREEN_WIDTH } from '../../../constants/app.constants';
import { FeedbackToastProps } from './type';

const FeedbackToast = ({ toastData, visible }: FeedbackToastProps) => {
  if (!toastData) {
    return null;
  }

  return (
    <div
      className={`
                  fixed 
                  inset-0 
                  flex 
                  justify-center 
                  items-center 
                  mx-auto 
                  pointer-events-none 
                  transition-all 
                  duration-500 
                  ease-in-out 
                  z-50 
                  max-w-40 
                  px-6 
                  ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}
      style={{
        background: `${!toastData?.toastWithDescription ? 'rgba(0, 0, 0, 0.16)' : ''}`,
        backdropFilter: `${!toastData?.toastWithDescription ? 'blur(2.5px)' : ''}`,
        maxWidth: MAX_SCREEN_WIDTH,
      }}
    >
      <div
        className={`
                    flex 
                    flex-col 
                    justify-center 
                    items-center 
                    gap-2 
                    ${toastData?.toastWithDescription ? 'rounded-3xl py-6 px-4 bg-impo_Neutral_Surface' : 'rounded-lg py-3 px-4 bg-impo_Surface_InverseSurface'}
                  `}
      >
        <CustomTypography
          fontSize={toastData.toastWithDescription ? 'Title_Small' : 'Body_Small'}
          className={`${!toastData.toastWithDescription ? 'px-8 text-impo_Surface_InverseOnSurface' : 'text-impo_White'}`}
        >
          {toastData?.message}
        </CustomTypography>

        {toastData?.description && (
          <CustomTypography
            fontSize="Body_Medium"
            className={`text-center ${toastData?.toastWithDescription ? 'text-impo_Surface_InverseSurface' : 'text-impo_Surface_InverseOnSurface'}`}
          >
            {toastData.description}
          </CustomTypography>
        )}
      </div>
    </div>
  );
};

export default FeedbackToast;

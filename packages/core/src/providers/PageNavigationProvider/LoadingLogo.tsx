import { CustomSpinner } from '../../components/ui/CustomSpinner';
import { CustomTypography } from '../../components/ui/CustomTypography';
import ImpoIcon from '@assets/shared/icons/impoLogo.svg';

import { MAX_SCREEN_WIDTH } from '../../constants/app.constants';

const LoadingLogo = () => {
  return (
    <div
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
      className="
                  fixed 
                  top-0 
                  left-0 
                  right-0 
                  bottom-0 
                  flex 
                  items-center 
                  justify-center 
                  bg-[#00000088] 
                  backdrop-blur-md 
                  mx-auto 
                  overflow-hidden 
                  z-[80]
                "
    >
      <div className="w-[200px] p-6 flex flex-col items-center bg-impo_White rounded-lg">
        <ImpoIcon className="w-20 h-auto" />

        <CustomTypography fontSize="Title_Large" className="text-impo_Black mt-2 mb-4">
          ایمپو
        </CustomTypography>

        <CustomSpinner size={40} className="border-impo_Black" />
      </div>
    </div>
  );
};

export default LoadingLogo;

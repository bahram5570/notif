import { CustomSpinner } from '../../components/ui/CustomSpinner';
import { CustomTypography } from '../../components/ui/CustomTypography';
import ImpoIcon from '@assets/shared/icons/impoLogo.svg';

export const LoadingLogo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#00000088] backdrop-blur-md animate-fadeIn">
      <div className="w-[220px] p-6 flex flex-col items-center bg-impo_White rounded-lg">
        <ImpoIcon className="w-20 h-auto" />

        <CustomTypography fontSize="Title_Large" className="text-impo_Black mt-2 mb-4">
          ایمپو
        </CustomTypography>

        <CustomSpinner size={40} className="border-impo_Black" />
      </div>
    </div>
  );
};

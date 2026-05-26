import CloseIcon from '@assets/shared/icons/plus.svg';

import { useCustomRouter } from '../../../hooks/useCustomRouter';
import { CustomTypography } from '../../ui/CustomTypography';
import { TestKitModalsContainerProps } from './types';

export const TestKitModalsContainer = ({ title, children }: TestKitModalsContainerProps) => {
  const router = useCustomRouter();

  return (
    <div className="flex flex-col items-center">
      <div className="w-[72px] h-1 rounded-full bg-impo_Surface_OutlineVariant" />

      <div className="relative flex justify-center items-center h-12 w-full mb-4 mt-2">
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {title}
        </CustomTypography>

        <div className="w-12 h-12 flex items-center justify-center absolute top-0 left-0" onClick={() => router.back()}>
          <CloseIcon className="w-6 h-auto rotate-45 cursor-pointer stroke-impo_Neutral_OnSurface" />
        </div>
      </div>

      <div className="w-full max-h-[400px] px-1 overflow-y-auto">{children}</div>
    </div>
  );
};

import { CustomButton } from '../../../../../components/ui/CustomButton';
import { CustomImage } from '../../../../../components/ui/CustomImage';
import { CustomTypography } from '../../../../../components/ui/CustomTypography';
import { colorFormatConverter } from '../../../../../utils/scripts';
import CloseIcon from '@assets/shared/icons/plus.svg';

import { useCustomRouter } from '../../../../../hooks/useCustomRouter';
import { useWidgetActions } from '../../../../../hooks/useWidgetActions';
import { PopupImageTextButtonProps } from './types';

const PopupImageTextButton = ({ data }: PopupImageTextButtonProps) => {
  const router = useCustomRouter();
  const { actionHandler } = useWidgetActions();

  return (
    <div className="relative w-full h-full flex flex-col items-center px-4 pt-4 pb-6">
      <div onClick={() => router.back()} className="w-12 h-12 flex items-center justify-center mr-auto">
        <CloseIcon className="w-6 h-auto rotate-45 cursor-pointer stroke-impo_Neutral_OnSurface" />
      </div>

      <div className="w-full min-h-[370px] mb-6">
        <CustomImage src={data.image} />
      </div>

      <div className="w-full flex flex-col items-center gap-1">
        <CustomTypography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground text-center">
          {data.title}
        </CustomTypography>

        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center">
          {data.description}
        </CustomTypography>
      </div>

      <CustomButton
        fontSize="Lable_Large"
        className="mt-auto h-10"
        onClick={() => actionHandler(data.button.action)}
        style={{
          background: colorFormatConverter(data.button.backgroundColor),
          color: colorFormatConverter(data.button.foregroundColor),
          borderColor: colorFormatConverter(data.button.backgroundColor),
        }}
      >
        {data.button.text}
      </CustomButton>
    </div>
  );
};

export default PopupImageTextButton;

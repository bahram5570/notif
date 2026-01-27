import CloseIcon from '@assets/icons/plus.svg';
import { colorFormatConverter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import useWidgetActions from '@hooks/useWidgetActions';
import { useRouter } from 'next/navigation';

import { PopupImageTextButtonProps } from './types';

const PopupImageTextButton = ({ data }: PopupImageTextButtonProps) => {
  const router = useRouter();
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
        <Dark_Typography fontSize="Title_Medium" className="text-impo_Neutral_OnBackground text-center">
          {data.title}
        </Dark_Typography>

        <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-center">
          {data.description}
        </Dark_Typography>
      </div>

      <Dark_Button
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
      </Dark_Button>
    </div>
  );
};

export default PopupImageTextButton;

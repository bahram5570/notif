import { useEffect, useState } from 'react';

import CloseIcon from '@assets/icons/plus.svg';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { colorFormatConverter } from '@repo/core/utils/scripts';

import useWidgetActions from '@hooks/useWidgetActions';
import { LottieJson } from '@lib/LottieJson';
import { useRouter } from 'next/navigation';

import { ClickHandlerTypes, PopupInteractionProps } from './types';

const PopupInteraction = ({ data }: PopupInteractionProps) => {
  const router = useRouter();
  const { actionHandler } = useWidgetActions();

  const clickHandler: ClickHandlerTypes = (name) => {
    if (name === 'first') {
      actionHandler(data.button.action);
    }

    if (name === 'second') {
      if (data.secondaryButton) {
        actionHandler(data.secondaryButton.action);
      }
    }
  };

  const [jsonFile, setJsonFile] = useState(null);

  useEffect(() => {
    if (data.image) {
      const fetchData = async () => {
        const req = await fetch(data.image || '');
        const res = await req.json();
        setJsonFile(res);
      };

      fetchData();
    }
  }, [data.image]);

  return (
    <div className="relative h-full -mx-4">
      <div
        onClick={() => router.back()}
        className="w-12 h-12 flex items-center justify-center absolute -top-4 left-2 z-10"
      >
        <CloseIcon className="w-8 h-auto rotate-45 cursor-pointer stroke-impo_Neutral_OnSurface" />
      </div>

      {jsonFile && <LottieJson loop={true} animationData={jsonFile} width={250} className="mt-8" />}

      <div className="flex flex-col items-center px-4">
        <CustomTypography fontSize="Title_Large" className="pt-5 text-center text-impo_Neutral_OnBackground">
          {data.title}
        </CustomTypography>

        <CustomTypography fontSize="Body_Large" className="pt-1 text-center text-impo_Neutral_OnBackground">
          {data.description}
        </CustomTypography>

        <div className="w-full flex items-center gap-2 pt-12">
          <CustomButton
            onClick={() => clickHandler('first')}
            style={{
              background: colorFormatConverter(data.button.backgroundColor),
              color: colorFormatConverter(data.button.foregroundColor),
              borderColor: colorFormatConverter(data.button.backgroundColor),
            }}
            className="h-10"
            fontSize="Lable_Large"
          >
            {data.button.text}
          </CustomButton>

          {data.secondaryButton && (
            <CustomButton
              onClick={() => clickHandler('second')}
              style={{
                background: colorFormatConverter(data.secondaryButton.backgroundColor),
                color: colorFormatConverter(data.secondaryButton.foregroundColor),
                borderColor: colorFormatConverter(data.secondaryButton.backgroundColor),
              }}
              className="h-10"
              fontSize="Lable_Large"
            >
              {data.secondaryButton.text}
            </CustomButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupInteraction;

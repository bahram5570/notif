import { colorFormatConverter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import useWidgetActions from '@hooks/useWidgetActions';

import { ClickHandlerTypes, PopupDialogProps } from './types';

const PopupDialog = ({ data }: PopupDialogProps) => {
  const { actionHandler } = useWidgetActions();

  const clickHandler: ClickHandlerTypes = (name) => {
    if (name === 'first') {
      actionHandler(data.first.action);
    }

    if (name === 'second') {
      if (data.second) {
        actionHandler(data.second.action);
      }
    }
  };

  const image = typeof data.image !== 'undefined' && data.image.trim() !== '' ? data.image : null;

  return (
    <div className="w-full flex flex-col items-center">
      {image && <CustomImage src={image} width={56} height={56} className="mb-4" />}

      <Dark_Typography fontSize="Title_Medium" className="text-center text-impo_Neutral_OnSurface">
        {data.title || ''}
      </Dark_Typography>

      <Dark_Typography fontSize="Body_Medium" className="mt-1 mb-5 text-center text-impo_Neutral_OnSurface">
        {data.description || ''}
      </Dark_Typography>

      <div className="w-full flex items-center gap-2">
        <Dark_Button
          style={{
            direction: 'rtl',
            background: colorFormatConverter(data.first.backgroundColor),
            color: colorFormatConverter(data.first.foregroundColor),
            borderColor: colorFormatConverter(data.first.backgroundColor),
          }}
          className="h-10"
          onClick={() => clickHandler('first')}
          fontSize="Lable_Large"
        >
          {data.first.text}
        </Dark_Button>

        {data.second && (
          <Dark_Button
            style={{
              direction: 'rtl',
              background: colorFormatConverter(data.second.backgroundColor),
              color: colorFormatConverter(data.second.foregroundColor),
              borderColor: colorFormatConverter(data.second.backgroundColor),
            }}
            onClick={() => clickHandler('second')}
            fontSize="Lable_Large"
            className="h-10"
          >
            {data.second.text}
          </Dark_Button>
        )}
      </div>
    </div>
  );
};

export default PopupDialog;

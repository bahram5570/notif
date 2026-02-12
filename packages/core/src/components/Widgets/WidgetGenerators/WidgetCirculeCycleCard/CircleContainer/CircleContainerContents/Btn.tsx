import { colorFormatConverter } from '../../../../../../utils/scripts';

import { useWidgetActions } from '../../../../../../hooks/useWidgetActions';
import { ActionTypeEnum } from '../../../../../../providers/WidgetActionsProvider';
import { CustomButton } from '../../../../../ui/CustomButton';
import { BtnProps } from './types';

const Btn = ({ button }: BtnProps) => {
  const { actionHandler } = useWidgetActions();

  return (
    <div
      className={`
                  absolute 
                  left-0 
                  right-0 
                  bottom-12 
                  w-full 
                  flex 
                  items-center 
                  justify-center 
                  gap-2 
                  ${button.length > 1 ? 'scale-75' : 'scale-100'}
                `}
    >
      {button.map((item, index) => (
        <CustomButton
          key={index}
          fontSize="Lable_Large"
          className="z-10 min-w-[140px] !w-fit"
          onClick={() => actionHandler(item.action)}
          isDisable={item.action.actionType === ActionTypeEnum.None}
          style={{
            color: colorFormatConverter(item.foregroundColor),
            border: colorFormatConverter(item.backgroundColor),
            backgroundColor: colorFormatConverter(item.backgroundColor),
          }}
        >
          {item.text}
        </CustomButton>
      ))}
    </div>
  );
};

export default Btn;

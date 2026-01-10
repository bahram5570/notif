import { colorFormatConverter } from '@utils/scripts';

import CustomSlider from '@components/ui/CustomSlider';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import useWidgetActions from '@hooks/useWidgetActions';

import { InstallationPurposePropsType } from './type';

const InstallationPurpose = ({ changeStatusBtns }: InstallationPurposePropsType) => {
  const { actionHandler } = useWidgetActions();

  return (
    <div className="flex flex-col justify-end items-end gap-2 my-4">
      <Dark_Typography fontSize="Title_Small" className="px-4 text-impo_Neutral_OnBackground">
        هدف نصب
      </Dark_Typography>

      <CustomSlider gap={10} sidePadding={16}>
        {changeStatusBtns.map((item, index) => (
          <Dark_Button
            key={index}
            className="min-w-fit"
            onClick={() => actionHandler(item.action)}
            style={{
              background: colorFormatConverter(item.backgroundColor),
              color: colorFormatConverter(item.foregroundColor),
              borderColor: colorFormatConverter(item.backgroundColor),
            }}
            fontSize="Lable_Large"
          >
            {item.text}
          </Dark_Button>
        ))}
      </CustomSlider>
    </div>
  );
};

export default InstallationPurpose;

import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomSlider } from '@repo/core/components/ui/CustomSlider';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { colorFormatConverter } from '@repo/core/utils/scripts';

import useWidgetActions from '@hooks/useWidgetActions';

import { InstallationPurposePropsType } from './type';

const InstallationPurpose = ({ changeStatusBtns }: InstallationPurposePropsType) => {
  const { actionHandler } = useWidgetActions();

  return (
    <div className="flex flex-col justify-end items-end gap-2 my-4">
      <CustomTypography fontSize="Title_Small" className="px-4 text-impo_Neutral_OnBackground">
        هدف نصب
      </CustomTypography>

      <CustomSlider gap={10} sidePadding={16}>
        {changeStatusBtns.map((item, index) => (
          <CustomButton
            key={index}
            className="min-w-fit"
            fontSize="Lable_Large"
            onClick={() => actionHandler(item.action)}
            style={{
              color: colorFormatConverter(item.foregroundColor),
              background: colorFormatConverter(item.backgroundColor),
              borderColor: colorFormatConverter(item.backgroundColor),
            }}
          >
            {item.text}
          </CustomButton>
        ))}
      </CustomSlider>
    </div>
  );
};

export default InstallationPurpose;

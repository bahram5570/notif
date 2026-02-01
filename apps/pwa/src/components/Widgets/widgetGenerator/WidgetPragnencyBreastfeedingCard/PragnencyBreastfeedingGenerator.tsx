import EyeIcon from '@assets/icons/eye.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { colorFormatConverter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';

import { PragnencyBreastfeedingGeneratorProps } from './types';

const PragnencyBreastfeedingGenerator = (props: PragnencyBreastfeedingGeneratorProps) => {
  return (
    <div className={`flex items-center gap-1 ${props.text.length >= 20 ? 'flex-col-reverse' : ''}`}>
      {props.showEyeIcon && (
        <EyeIcon className="w-6 h-auto" style={{ fill: colorFormatConverter(props.eyeIconColor) }} />
      )}

      {!props.showEyeIcon && (
        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground text-right">
          {props.text}
        </CustomTypography>
      )}

      <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground text-right">
        {props.name}
      </CustomTypography>

      <CustomImage src={props.icon} width={32} className="rounded-full bg-impo_Surface_SurfaceVariant" />
    </div>
  );
};

export default PragnencyBreastfeedingGenerator;

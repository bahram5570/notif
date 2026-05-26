import { colorFormatConverter } from '../../../../utils/scripts';
import EyeIcon from '@assets/shared/icons/eye.svg';

import { CustomImage_NEW } from '../../../ui/CustomImage_NEW';
import { CustomTypography } from '../../../ui/CustomTypography';
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

      <div className="relative w-8 min-w-8 aspect-square rounded-full overflow-hidden bg-impo_Surface_SurfaceVariant">
        <CustomImage_NEW src={props.icon} fill={true} className="object-cover" />
      </div>
    </div>
  );
};

export default PragnencyBreastfeedingGenerator;

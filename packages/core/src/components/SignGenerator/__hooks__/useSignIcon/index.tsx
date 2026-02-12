import { CustomImage } from '../../../ui/CustomImage';
import { ICONS_WIDTH } from '../../constants';
import { UseSignIconProps } from './types';

export const useSignIcon = ({ category, sign }: UseSignIconProps) => {
  const icon = (
    <CustomImage
      alt="sign"
      width={ICONS_WIDTH}
      height={ICONS_WIDTH}
      src={`/assets/images/signs/${category}/${sign}.svg`}
    />
  );

  return { icon };
};

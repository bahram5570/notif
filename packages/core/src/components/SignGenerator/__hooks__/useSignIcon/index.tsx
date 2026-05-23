import { CustomImage_NEW } from '../../../ui/CustomImage_NEW';
import { ICONS_WIDTH } from '../../constants';
import { UseSignIconProps } from './types';

export const useSignIcon = ({ category, sign }: UseSignIconProps) => {
  const icon = (
    <CustomImage_NEW
      alt="sign"
      width={ICONS_WIDTH}
      height={ICONS_WIDTH}
      className="object-cover"
      src={`/assets/images/signs/${category}/${sign}.svg`}
    />
  );

  return { icon };
};

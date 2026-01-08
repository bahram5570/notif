import CustomSlider from '@components/ui/CustomSlider';
import useSignIcon from '@components/women/SignGenerator/__hooks__/useSignIcon';

import { SIGNS_LIST_SLIDER_ID } from './constants';
import { SignsListProps } from './types';

const SignsList = ({ signs }: SignsListProps) => {
  return (
    <CustomSlider className="absolute top-0 left-0 right-10 bottom-0" sidePadding={32} id={SIGNS_LIST_SLIDER_ID}>
      {signs.map((item, index) => {
        const { icon } = useSignIcon(item);

        return (
          <div
            key={index}
            className="w-14 h-14 min-w-14 min-h-14 border-[1px] border-impo_Neutral_Surface rounded-full overflow-hidden pointer-events-none"
          >
            {icon}
          </div>
        );
      })}
    </CustomSlider>
  );
};

export default SignsList;

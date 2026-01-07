import WomenPageLayoutHeader from '@components/women/WomenPageLayout/WomenPageLayoutHeader';

import { CycleAppBarProps } from './types';

const CycleAppBar = ({ date, appBarBackground }: CycleAppBarProps) => {
  return (
    <WomenPageLayoutHeader
      middleScript={date}
      leftElement1="Profile"
      rightElement="Calendar"
      hasScalingAnimation={true}
      style={{ background: appBarBackground }}
      className="dark:!bg-impo_Neutral_Surface"
    />
  );
};

export default CycleAppBar;

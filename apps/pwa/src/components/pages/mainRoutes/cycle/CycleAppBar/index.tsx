import { MainPageLayoutHeader } from '@repo/core/components/MainPageLayout';

import { CycleAppBarProps } from './types';

const CycleAppBar = ({ date, appBarBackground }: CycleAppBarProps) => {
  return (
    <MainPageLayoutHeader
      middleScript={date}
      leftElement1="Profile"
      leftElement2="Notification"
      rightElement="Calendar"
      hasScalingAnimation={true}
      style={{ background: appBarBackground }}
      className="dark:!bg-impo_Neutral_Surface"
    />
  );
};

export default CycleAppBar;

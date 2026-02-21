import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { addComma } from '@utils/numbers';

import StatisticsMaker from '@components/StatisticsMaker';

import { AchievementsTypes } from './types';

const Achievements = ({ list }: AchievementsTypes) => {
  const result = list.map((item, index) => (
    <div key={`Achievements-${index}`} className={`flex flex-col items-center gap-1 mx-auto w-[194px]`}>
      <CustomTypography
        fontSize="Headline_Medium"
        className="!text-impo_Primary_Primary dark:!text-impo_Primary_Primary"
      >
        {addComma(item.title)}
      </CustomTypography>

      <CustomTypography fontSize="Title_Medium" className="!text-impo_Surface_Outline">
        {item.subTitle}
      </CustomTypography>
    </div>
  ));

  return <StatisticsMaker list={result} />;
};

export default Achievements;

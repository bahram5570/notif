import { useMemo } from 'react';

import StarIcon from '@assets/shared/icons/star.svg';

import { useSystem } from '../../../../hooks/useSystem';
import { CustomTypography } from '../../CustomTypography';
import { RATING_LIST } from '../constants';
import { FeedbackStarsPropsType } from './type';

const FeedbackStars = ({ rate, rateHandler }: FeedbackStarsPropsType) => {
  const { appName } = useSystem();

  const theme = useMemo<{ fill: string; stroke: string }>(() => {
    switch (appName) {
      case 'MEN_PWA':
        return {
          fill: 'fill-impo_PrimaryMan_PrimaryMan',
          stroke: 'stroke-impo_PrimaryMan_PrimaryMan',
        };

      default:
        return {
          fill: 'fill-impo_Yellow',
          stroke: 'stroke-impo_Yellow',
        };
    }
  }, [appName]);

  return (
    <div className="w-full flex flex-col items-center gap-2 py-4">
      <div className="flex items-center justify-between w-[220px] pb-2">
        {RATING_LIST.map((item) => (
          <StarIcon
            onClick={() => rateHandler(item.no)}
            className={`w-8 h-auto cursor-pointer ${item.no <= rate ? `${theme.fill} ${theme.stroke}` : 'stroke-impo_Surface_OutlineVariant fill-impo_Transparent'}`}
            key={item.no}
          />
        ))}
      </div>

      {rate === 0 && (
        <div className="flex justify-between w-[230px]">
          <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Body_Small">
            {RATING_LIST[0].script}
          </CustomTypography>

          <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Body_Small">
            {RATING_LIST[4].script}
          </CustomTypography>
        </div>
      )}

      {rate > 0 && (
        <div className="flex justify-center w-[230px]">
          <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Lable_Large">
            {RATING_LIST[rate - 1].script}
          </CustomTypography>
        </div>
      )}
    </div>
  );
};

export default FeedbackStars;

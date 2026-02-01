import LikeEmptyIcon from '@assets/icons/like.svg';
import LikeFillIcon from '@assets/icons/likeFill.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useAnalytics from '@hooks/useAnalytics';

import { ShareExperienceStateEnum } from '../../ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/enum';
import useLikes from './__hooks__/useLikes';
import { ShareExperienceLikesModuleProps } from './types';

const ShareExperienceLikesModule = (props: ShareExperienceLikesModuleProps) => {
  const { callEvent } = useAnalytics();
  const { likeHandler } = useLikes(props);

  const selectHandler = (v: ShareExperienceStateEnum) => {
    if (!props.isSelf) {
      likeHandler(v);
    }
  };

  const iconsStyles = { opacity: props.isSelf ? 0.4 : 1, width: 20 };
  const filledIcon = <LikeFillIcon className="fill-impo_Primary_Primary" style={{ ...iconsStyles }} />;
  const emptiedIcon = <LikeEmptyIcon className="fill-impo_Surface_InverseSurface" style={{ ...iconsStyles }} />;

  return (
    <>
      <div
        className="flex w-10 gap-1"
        onClick={() => {
          selectHandler(ShareExperienceStateEnum.Dislike);
          callEvent('shareExperienceDislikePost');
        }}
      >
        <CustomTypography fontSize="Body_Large" className="text-impo_Surface_InverseSurface !h-5 !w-2/5">
          {props.disliked.toString()}
        </CustomTypography>

        <div className="-scale-y-100 w-3/5">
          {props.state === ShareExperienceStateEnum.Dislike ? filledIcon : emptiedIcon}
        </div>
      </div>

      <div
        className="flex w-10 gap-1"
        onClick={() => {
          selectHandler(ShareExperienceStateEnum.Like);
          callEvent('shareExperienceLikePost');
        }}
      >
        <CustomTypography fontSize="Body_Large" className="text-impo_Surface_InverseSurface !h-5 !w-2/5">
          {props.likeCount.toString()}
        </CustomTypography>

        <div className="w-3/5">{props.state === ShareExperienceStateEnum.Like ? filledIcon : emptiedIcon}</div>
      </div>
    </>
  );
};

export default ShareExperienceLikesModule;

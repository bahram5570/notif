import CommentIcon from '@assets/icons/comment.svg';
import LikeIcon from '@assets/icons/like.svg';
import { articleImageUrl } from '@services/http';
import { jalaaliScriptDate, toJalaliData } from '@utils/dates';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { GeneratorProfileTypes } from './types';

const GeneratorProfile = ({ author, publishTime, commentCount, rateCount }: GeneratorProfileTypes) => {
  const jalaliPublishTime = jalaaliScriptDate(toJalaliData(publishTime)).split(' ');
  const publishTimeScript = `${jalaliPublishTime[1]} ${jalaliPublishTime[2]}`;

  const imageUrl = author.authorPic ? articleImageUrl + author.authorPic : '/assets/images/notLoaded.svg';

  return (
    <div className="w-full flex items-center justify-between">
      <CustomLink href={`/author/${author.id}`}>
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <CustomImage fill={true} src={imageUrl} alt={author.id} className="rounded-full object-cover" />
          </div>

          <CustomTypography fontSize="Lable_Medium" className="!text-impo_Neutral_OnBackground">
            {author.authorName}
          </CustomTypography>
        </div>
      </CustomLink>

      <div className="flex items-center gap-4 md:gap-6">
        <CustomTypography fontSize="Body_Small" className="!text-impo_Surface_Outline">
          {publishTimeScript}
        </CustomTypography>

        <div className="flex items-center gap-2">
          <LikeIcon className="w-[14px] fill-impo_Surface_Outline" />
          <CustomTypography fontSize="Body_Small" className="!text-impo_Surface_Outline">
            {rateCount}
          </CustomTypography>
        </div>

        <div className="flex items-center gap-2">
          <CommentIcon className="w-[14px] fill-impo_Surface_Outline" />
          <CustomTypography fontSize="Body_Small" className="!text-impo_Surface_Outline">
            {commentCount}
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};

export default GeneratorProfile;

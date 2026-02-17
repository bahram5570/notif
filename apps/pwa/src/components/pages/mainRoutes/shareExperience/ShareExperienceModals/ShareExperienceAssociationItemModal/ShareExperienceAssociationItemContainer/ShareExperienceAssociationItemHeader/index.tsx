import { useRef } from 'react';

import { CustomBackButton } from '@repo/core/components/ui/CustomBackButton';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import useFollowHandler from '../../../ShareExperienceAssociationListModal/ShareExperienceAssociationListContainer/ShareExperienceAssociationItem/__hooks__/useFollowHandler';
import AssociationItemHeaderInfo from './AssociationItemHeaderInfo';
import { ShareExperienceAssociationItemHeaderPropsType } from './type';

const ShareExperienceAssociationItemHeader = (props: ShareExperienceAssociationItemHeaderPropsType) => {
  const scrossllRef = useRef<HTMLDivElement>(null);
  const { followHandler, isLoading } = useFollowHandler({
    isFollow: props.isFollowed,
    associationId: props.associationId,
  });

  const buttonText = props.isFollowed ? 'دنبال شده' : '  دنبال کردن';

  return (
    <div
      className=" fixed left-0 right-0 mx-auto top-0 w-full z-30 transition-all duration-300 p-4 bg-impo_Neutral_Surface"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
      ref={scrossllRef}
    >
      <div className="flex flex-row-reverse justify-between items-center">
        <div className="flex flex-row-reverse items-center gap-2">
          <CustomBackButton />
          {props.isScrolled && (
            <AssociationItemHeaderInfo
              experienceCount={props.experienceCount}
              followerCount={props.followerCount}
              title={props.title}
            />
          )}
        </div>

        <CustomButton
          className={`${props.isFollowed ? 'bg-impo_Primary_PrimaryContainer !border-impo_Primary_PrimaryContainer' : '!bg-impo_Primary_Primary !border-impo_Primary_Primary'}  !w-fit p-3 `}
          onClick={followHandler}
          isLoading={isLoading}
        >
          <CustomTypography
            fontSize="Lable_Medium"
            className={`${props.isFollowed ? 'text-impo_Primary_Primary' : 'text-impo_White '}`}
          >
            {buttonText}
          </CustomTypography>
        </CustomButton>
      </div>

      <div
        className={` transition-all duration-600 ease-in-out ${props.isScrolled ? 'opacity-0 -translate-y-2 scale-y-95 max-h-0' : 'opacity-100 translate-y-0 scale-y-100 max-h-[300px]'}`}
        style={{
          overflow: 'hidden',
        }}
      >
        <div className="flex flex-col gap-2 items-end">
          <div className="flex flex-row-reverse items-center  gap-3">
            <CustomImage src={props.cover} width={72} height={72} className="rounded-full" />
            <AssociationItemHeaderInfo
              experienceCount={props.experienceCount}
              followerCount={props.followerCount}
              title={props.title}
            />
          </div>

          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            {props.description}
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};

export default ShareExperienceAssociationItemHeader;

import MainPageLayout from '@components/MainPageLayout';
import Dark_Spinner from '@components/ui/Dark_Spinner';
import useOverflowHandler from '@hooks/useOverflowHandler';

import ShareExperienceFollowListModule from '../../../ShareExperienceModules/ShareExperienceFollowListModule';
import useGetFollowerData from './__hooks__/useGetFollowerData';
import { ShareExperienceFollowerModalContainerProps } from './type';

const ShareExperienceFollowerModalContainer = ({ userId, queryParam }: ShareExperienceFollowerModalContainerProps) => {
  useOverflowHandler(queryParam !== null);
  const { data, isLoading } = useGetFollowerData({ userId });

  const hasData = data && data.items.length > 0;

  return (
    <MainPageLayout
      rightElement="BackButton"
      middleScript="دنبال کننده ها"
      headerClassName="!bg-impo_Neutral_Surface"
      className={`${!hasData && 'justify-center'} `}
    >
      {isLoading && (
        <div className="w-full flex justify-center pb-10">
          <Dark_Spinner className="border-impo_Primary_Primary" />
        </div>
      )}
      {!isLoading && data && (
        <ShareExperienceFollowListModule items={data.items} EmptyStateScript="هنوز کسی رو دنبال نکردی" />
      )}
    </MainPageLayout>
  );
};

export default ShareExperienceFollowerModalContainer;

import { MainPageLayoutHeader } from '@repo/core/components/MainPageLayout';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import { ASSOCATION_DATA } from '../../../ShareExperienceContainer/ShareExperienceAssociation/constants';
import ShareExperienceAssociationItem from './ShareExperienceAssociationItem';

const ShareExperienceAssociationListContainer = () => {
  return (
    <>
      <MainPageLayoutHeader rightElement="BackButton" middleScript="انجمن ها" className="bg-impo_Neutral_Surface" />
      <div style={{ paddingTop: HEADER_HEIGHT }}>
        <div className="flex flex-col ">
          {ASSOCATION_DATA.map((item, index) => {
            const isLastItem = ASSOCATION_DATA.length - 1 === index;
            return <ShareExperienceAssociationItem isLastItem={isLastItem} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ShareExperienceAssociationListContainer;

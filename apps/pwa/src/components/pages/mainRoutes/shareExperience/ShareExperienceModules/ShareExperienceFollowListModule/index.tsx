import ShareExperienceFollowItemModule from '../ShareExperienceFollowItemModule';
import EmptyState from './EmptyState';
import { ShareExperienceFollowListModulePropsType } from './type';

const ShareExperienceFollowListModule = ({ items, EmptyStateScript }: ShareExperienceFollowListModulePropsType) => {
  const hasItem = items.length > 0;
  return (
    <div className="flex flex-col px-4">
      {!hasItem && <EmptyState EmptyStateScript={EmptyStateScript} />}
      {hasItem &&
        items.map((item, index) => {
          const isLastItem = items.length - 1 === index;
          return <ShareExperienceFollowItemModule isLastItem={isLastItem} item={item} key={item.id} />;
        })}
    </div>
  );
};

export default ShareExperienceFollowListModule;

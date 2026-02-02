import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';

import ShareExperienceProfileIconModule from '../ShareExperienceProfileIconModule';
import { ShareExperienceFollowItemModulePropsType } from './type';

const ShareExperienceFollowItemModule = ({ isLastItem, item }: ShareExperienceFollowItemModulePropsType) => {
  return (
    <div
      className={`py-4  ${!isLastItem && 'border-b border-b-impo_Surface_SurfaceVariant'} flex flex-row-reverse justify-between items-center`}
    >
      <div className="flex flex-row-reverse items-center gap-2">
        <ShareExperienceProfileIconModule
          approvedProfile={false}
          avatar={item.image}
          size={48}
          isSelf={false}
          id={item.id}
        />
        <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
          {item.name}
        </Dark_Typography>
      </div>

      <Dark_Button className=" !border-impo_Grey_100 bg-impo_Transparent !w-fit px-5" onClick={() => {}}>
        <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnSurface">
          دنبال کردن
        </Dark_Typography>
      </Dark_Button>
    </div>
  );
};

export default ShareExperienceFollowItemModule;

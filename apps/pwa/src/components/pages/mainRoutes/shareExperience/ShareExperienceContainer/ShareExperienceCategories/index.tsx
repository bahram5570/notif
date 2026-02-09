import SaveEmptyIcon from '@assets/shared/icons/saveEmpty.svg';
import { CustomSlider } from '@repo/core/components/ui/CustomSlider';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ShareExperienceCategoriesProps } from './types';

const ShareExperienceCategories = ({
  selectedCategoryIdHandler,
  selectedCategoryId,
  categories,
}: ShareExperienceCategoriesProps) => {
  return (
    <div className="w-full flex flex-col py-4">
      <CustomSlider gap={12} sidePadding={16}>
        <>
          {categories.map((item, index) => {
            const isSelected = selectedCategoryId === item.id;

            return (
              <div
                key={index}
                onClick={() => selectedCategoryIdHandler(item.id)}
                className={`
                            flex 
                            items-center 
                            justify-center 
                            gap-1 
                            border-[1px] 
                            rounded-full 
                            py-2 
                            px-[18px] 
                            min-w-fit 
                            cursor-pointer
                            ${isSelected ? 'border-impo_Neutral_OnBackground bg-impo_Neutral_OnBackground' : 'border-impo_Neutral_Surface bg-impo_Neutral_Background'}
                          `}
              >
                <CustomTypography
                  fontSize="Body_Medium"
                  className={`${isSelected ? 'text-impo_Neutral_Background' : 'text-impo_Neutral_OnBackground'}`}
                >
                  {item.title}
                </CustomTypography>

                {item.icon.trim().length > 0 &&
                  (isSelected ? (
                    <SaveEmptyIcon className="w-4 stroke-impo_Neutral_Background" />
                  ) : (
                    <SaveEmptyIcon className="w-4 stroke-impo_Surface_InverseSurface" />
                  ))}
              </div>
            );
          })}
        </>
      </CustomSlider>
    </div>
  );
};

export default ShareExperienceCategories;

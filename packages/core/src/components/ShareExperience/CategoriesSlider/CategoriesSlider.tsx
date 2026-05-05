import SaveEmptyIcon from '@assets/shared/icons/saveEmpty.svg';

import { CustomSlider } from '../../ui/CustomSlider';
import { CustomTypography } from '../../ui/CustomTypography';
import { CategoriesSliderProps } from './type';

export const CategoriesSlider = ({
  categories,
  selectedCategoryId,
  selectedCategoryHandler,
}: CategoriesSliderProps) => {
  return (
    <div className="w-full flex flex-col py-4">
      <CustomSlider gap={12} sidePadding={16}>
        <>
          {categories.map((item, index) => {
            const isSelected = selectedCategoryId === item.id;

            return (
              <div
                key={index}
                onClick={() => selectedCategoryHandler(item.id, item.showAssociation)}
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

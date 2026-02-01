import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import HeartEmptyIcon from '@assets/icons/heartEmpty.svg';
import HeartFillIcon from '@assets/icons/heartFill.svg';
import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { SelectNameGenderEnum } from '@services/selectNameServices/enums';

import CustomImage from '@components/ui/CustomImage';
import Dark_Spinner from '@components/ui/Dark_Spinner';
import useOperatingSystem from '@repo/core/hooks/useOperatingSystem';

import useNameSelectorLike from '../__hooks__/useNameSelectorLike';
import { NAME_SELECTOR_CARD_HEIGHT } from './constants';
import { NameSelectorCardProps } from './types';

const NameSelectorCard = (props: NameSelectorCardProps) => {
  const { ref, inView } = useInView();
  const { isLikedHandler } = useNameSelectorLike();
  const { operatingSystem } = useOperatingSystem();

  const isLastIndex = props.onPagination && props.isLastIndex;
  const isLoading = props.onPagination && isLastIndex && props.isLoading;

  useEffect(() => {
    if (isLastIndex && inView && props.onPagination && !isLoading) {
      props.onPagination();
    }
  }, [isLastIndex, isLoading, inView]);

  const isGirl = props.gender === SelectNameGenderEnum.Girl;
  const image = isGirl ? '/assets/images/selectNameGirl.webp' : '/assets/images/selectNameBoy.webp';

  return (
    <>
      {props.startingLetter && (
        <div className="flex justify-end w-full border-b-[1px] border-b-impo_Surface_OutlineVariant pb-2 pt-6">
          <CustomTypography fontSize="Lable_Large" className="text-impo_Surface_InverseSurface">
            {props.startingLetter}
          </CustomTypography>
        </div>
      )}

      <div
        ref={ref}
        style={{ direction: 'rtl', minHeight: NAME_SELECTOR_CARD_HEIGHT }}
        className={`
                    w-full 
                    p-3 
                    rounded-xl
                    ${isGirl ? 'bg-impo_Pink_100 dark:bg-impo_Pink_800' : 'bg-impo_Blue_100 dark:bg-impo_Blue_800'}
                  `}
      >
        {inView && (
          <>
            <div className="w-full flex justify-between">
              <div className="flex items-center gap-2">
                <div className="relative min-w-10 min-h-10 rounded-full overflow-hidden bg-impo_White">
                  <CustomImage src={image} className="absolute top-[1px] -left-[2px] w-[66px] h-[66px]" />
                </div>

                <CustomTypography fontSize="Lable_Large" className="text-impo_Black">
                  {props.title}
                </CustomTypography>
              </div>

              <div onClick={() => isLikedHandler(props)} className="w-10 h-10 flex items-center justify-center">
                {props.isLiked ? (
                  <HeartFillIcon className="w-5 h-auto fill-impo_Primary_Primary" />
                ) : (
                  <HeartEmptyIcon className="w-5 h-auto fill-impo_Surface_Outline dark:fill-impo_Surface_OutlineVariant" />
                )}
              </div>
            </div>

            <div
              className={`
                          w-full 
                          h-[1px] 
                          my-2 
                          ${isGirl ? 'bg-impo_Pink_200 dark:bg-impo_Pink_700' : 'bg-impo_Blue_200 dark:bg-impo_Blue_700'}
                        `}
            />

            <p className="text-impo_Black">
              <span style={{ ...typographyFontStylesMaker({ operatingSystem, fontSize: 'Lable_Medium' }) }}>معنا:</span>

              <span style={{ ...typographyFontStylesMaker({ operatingSystem, fontSize: 'Body_Small' }) }}>
                {props.description}
              </span>
            </p>
          </>
        )}
      </div>

      {isLoading && (
        <div className="w-full h-[150px] flex justify-center pt-[50px]">
          <Dark_Spinner className="border-impo_Surface_Outline" />
        </div>
      )}
    </>
  );
};

export default NameSelectorCard;

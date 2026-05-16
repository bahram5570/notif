'use client';

import { CustomBackButton } from '@repo/core/components/ui/CustomBackButton';
import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import { NAME_SELECTOR_HEADING_HEIGHT, NAME_SELECTOR_HEADING_WIDTH } from '../constants';
import { NameSelectorHeadingProps } from './types';

const NameSelectorHeading = ({ description }: NameSelectorHeadingProps) => {
  return (
    <div className="relative w-full flex flex-col overflow-hidden">
      <div className="relative flex justify-center items-end w-full" style={{ height: NAME_SELECTOR_HEADING_HEIGHT }}>
        <div
          className="
                      flex 
                      items-end 
                      rounded-full 
                      overflow-hidden 
                      bg-gradient-to-b 
                      from-[#FFB68FB8] 
                      to-[#FF5A3D29] 
                      dark:from-impo_Neutral_Surface 
                      dark:to-impo_Neutral_Surface
                    "
          style={{ minHeight: NAME_SELECTOR_HEADING_WIDTH, minWidth: NAME_SELECTOR_HEADING_WIDTH }}
        >
          <div
            className="relative w-[100dvw] mx-auto flex gap-2"
            style={{ height: NAME_SELECTOR_HEADING_HEIGHT, maxWidth: MAX_SCREEN_WIDTH }}
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-50 pointer-events-none dark:hidden">
              <CustomImage_NEW src={'/assets/images/selectNameHeartsMask.webp'} fill />
            </div>

            <div style={{ width: 120, height: 190, minWidth: 120, minHeight: 190 }} className="mt-auto">
              {' '}
              <CustomImage_NEW src={'/assets/images/selectNameMom.webp'} fill />
            </div>

            <div className="">
              <div className="w-12 h-12 flex justify-center items-center my-4 mr-4 ml-auto">
                <CustomBackButton />
              </div>

              <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_InverseSurface pr-4">
                {description}
              </CustomTypography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameSelectorHeading;

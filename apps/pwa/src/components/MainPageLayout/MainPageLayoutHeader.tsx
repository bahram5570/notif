'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.contants';

import WidgetScaleModule from '../Widgets/WidgetScaleModule';
import { HEADER_HEIGHT, iconsList } from './constants';
import { MainPageLayoutHeaderProps } from './types';

const MainPageLayoutHeader = (props: MainPageLayoutHeaderProps) => {
  const LeftElement1 = props.leftElement1 ? iconsList[props.leftElement1] : () => <></>;
  const LeftElement2 = props.leftElement2 ? iconsList[props.leftElement2] : () => <></>;
  const RightElement = props.rightElement ? iconsList[props.rightElement] : () => <></>;

  const contents = (
    <div
      style={{ height: HEADER_HEIGHT, ...props.style }}
      className={`flex items-end w-full backdrop-blur-md bg-impo_Neutral_Background ${props.className}`}
    >
      <div className="flex px-4 py-2 w-full">
        <div className="w-fit min-w-fit flex gap-4">
          <LeftElement1 />
          <LeftElement2 />
        </div>

        <div className="w-full flex justify-center items-center">
          <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnSurface">
            {props.middleScript || ''}
          </CustomTypography>
        </div>

        <div className="flex items-center gap-4 min-w-fit">
          {props.rightElementScript && (
            <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
              {props.rightElementScript || ''}
            </CustomTypography>
          )}

          <RightElement />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`fixed left-0 right-0 top-0 mx-auto flex z-40`}
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: HEADER_HEIGHT }}
    >
      {props.hasScalingAnimation ? <WidgetScaleModule>{contents}</WidgetScaleModule> : <>{contents}</>}
    </div>
  );
};

export default MainPageLayoutHeader;

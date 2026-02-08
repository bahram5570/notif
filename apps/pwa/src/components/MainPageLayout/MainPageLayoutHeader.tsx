'use client';

import Dark_Typography from '@components/ui/Dark_Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import WidgetScaleModule from '../Widgets/WidgetScaleModule';
import { HEADER_HEIGHT, iconsList } from './constants';
import { MainPageLayoutHeaderProps } from './types';

const MainPageLayoutHeader = (props: MainPageLayoutHeaderProps) => {
  const LeftElement1 = props.leftElement1 ? iconsList[props.leftElement1] : () => <></>;
  const LeftElement2 = props.leftElement2 ? iconsList[props.leftElement2] : () => <></>;
  const RightElement = props.rightElement ? iconsList[props.rightElement] : () => <></>;

  const hasBothLeftElements = props.leftElement1 && props.leftElement2;

  const contents = (
    <div
      style={{ height: HEADER_HEIGHT, ...props.style }}
      className={`flex items-end w-full backdrop-blur-md bg-impo_Neutral_Background ${props.className}`}
    >
      <div className="flex px-4 py-2 w-full">
        <div className="w-fit min-w-fit flex gap-4">
          <>
            <div
              className={`h-10 w-10 min-w-10 min-h-10  flex items-center justify-center ${hasBothLeftElements && 'bg-impo_Grey_50 rounded-full'}`}
            >
              <LeftElement1 />
            </div>
            <div
              className={`h-10 w-10 min-w-10 min-h-10  flex items-center justify-center ${hasBothLeftElements && 'bg-impo_Grey_50  rounded-full'}`}
            >
              <LeftElement2 />
            </div>
          </>
        </div>

        <div className="w-full flex justify-center items-center">
          <Dark_Typography fontSize="Body_Large" className="text-impo_Neutral_OnSurface">
            {props.middleScript || ''}
          </Dark_Typography>
        </div>

        <div className="flex items-center gap-4 min-w-fit">
          {props.rightElementScript && (
            <Dark_Typography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
              {props.rightElementScript || ''}
            </Dark_Typography>
          )}

          <div
            className={`h-10 w-10 min-w-10 min-h-10  flex items-center justify-center ${hasBothLeftElements && 'bg-impo_Grey_50  rounded-full'}`}
          >
            <RightElement />
          </div>
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

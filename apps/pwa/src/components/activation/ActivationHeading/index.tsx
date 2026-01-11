import ImpoIcon from '@assets/images/questionsImpo.svg';

import Dark_Typography from '@components/ui/Dark_Typography';
import useActivationIsLargeScreen from '@hooks/__activation__/useActivationIsLargeScreen';
import { OrderOfQuestionScriptsTypes } from '@providers/__activation__/types';

import {
  ACTIVATION_HEADING_ICON_ID,
  ACTIVATION_HEADING_ICON_WIDTH,
  ACTIVATION_HEADING_SCRIPTS_ID,
  HEADING_HEIGHT,
} from './constants';
import { ActivationHeadingProps } from './types';
import usePercentage from './usePercentage';

const ActivationHeading = ({ scripts, progressPercentage, orderOfQuestionScripts }: ActivationHeadingProps) => {
  const { isLargeScreen } = useActivationIsLargeScreen();
  const { maxWidth, progressBarSizes, rotate } = usePercentage({ progressPercentage });

  const hasProgressBar = progressPercentage !== undefined;
  const mainHeight = isLargeScreen ? HEADING_HEIGHT - 12 : HEADING_HEIGHT - ACTIVATION_HEADING_ICON_WIDTH;
  const scriptsOrder: OrderOfQuestionScriptsTypes = orderOfQuestionScripts || {
    title: 3,
    subtitle: 2,
    description: 1,
  };

  return (
    <>
      <div
        className="w-full flex justify-center pt-8 pointer-events-none z-10"
        style={{
          maxWidth,
          height: mainHeight,
          overflow: hasProgressBar ? 'hidden' : 'unset',
          position: progressPercentage === undefined ? 'relative' : 'absolute',
        }}
      >
        <div className="flex flex-col w-full mt-5">
          {isLargeScreen && (
            <ImpoIcon
              id={ACTIVATION_HEADING_ICON_ID}
              className="mx-auto duration-1000 z-10"
              style={{ height: ACTIVATION_HEADING_ICON_WIDTH, width: ACTIVATION_HEADING_ICON_WIDTH }}
            />
          )}

          <div
            id={ACTIVATION_HEADING_SCRIPTS_ID}
            className="w-full flex flex-col items-center gap-2 mt-4 px-4 duration-1000 z-10"
          >
            <Dark_Typography
              fontSize="Body_Medium"
              style={{ order: scriptsOrder.description }}
              className="text-impo_Neutral_OnBackground text-center"
            >
              {scripts.description}
            </Dark_Typography>

            <Dark_Typography
              fontSize="Title_Small"
              style={{ order: scriptsOrder.title }}
              className="text-impo_Neutral_OnBackground text-center"
            >
              {scripts.title}
            </Dark_Typography>

            <Dark_Typography
              fontSize="Body_Medium"
              style={{ order: scriptsOrder.subtitle }}
              className="text-impo_Neutral_OnBackground text-center"
            >
              {scripts.subtitle}
            </Dark_Typography>
          </div>
        </div>

        {!hasProgressBar && (
          <div className="absolute bottom-10 flex justify-center align-middle">
            <img
              alt="hollow"
              src="/assets/images/questionsHollow.png"
              className={`w-[100vw] max-w-[${maxWidth}] h-auto scale-[2.5] z-0`}
            />
          </div>
        )}

        {hasProgressBar && (
          <>
            <div
              style={{ ...progressBarSizes }}
              className="
                          absolute 
                          bottom-0 
                          rounded-full 
                          border-4 
                          border-impo_Surface_SurfaceVariant 
                          bg-impo_Neutral_Background
                          flex 
                          align-bottom 
                          justify-center 
                          overflow-hidden 
                        "
            >
              <div className="absolute bottom-10 flex justify-center align-middle">
                <img
                  alt="hollow"
                  src="/assets/images/questionsHollow.png"
                  className={`w-[100vw] max-w-[${maxWidth}] h-auto scale-[2.5] z-0`}
                />
              </div>
            </div>

            <div
              style={{ rotate, ...progressBarSizes }}
              className="absolute bottom-0 rounded-full border-4 border-impo_Surface_SurfaceVariant border-b-impo_Primary_Primary"
            />
          </>
        )}
      </div>
    </>
  );
};

export default ActivationHeading;

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import { useSystem } from '@repo/core/hooks/useSystem';

import { APP_FEATURES_CONTENTS_LIST } from '../constants';
import useContents from './__hooks__/useContents';
import { AppFeaturesContentsTypes } from './types';

const AppFeaturesContents = ({ currentTab }: AppFeaturesContentsTypes) => {
  const { breakPoint } = useSystem();
  const { contentsStyles, isRendered } = useContents({ currentTab });

  const contentsList = Object.entries(APP_FEATURES_CONTENTS_LIST);

  return (
    <>
      {contentsList.map((contentItem, contentIndex) => (
        <div key={contentIndex} className={`${currentTab !== contentIndex && 'max-h-0 max-w-0 overflow-hidden'}`}>
          <div
            style={{ ...contentsStyles }}
            className={`grid duration-200 overflow-hidden ${!isRendered && '!max-h-0 !max-w-0'}`}
          >
            {contentItem[1].map((item, index) => {
              const gridRow = breakPoint.laptop ? `${item.mobile.row}` : `${item.desktop.row}`;
              const image = breakPoint.laptop ? `${item.mobile.image}` : `${item.desktop.image}`;
              const gridColumn = breakPoint.laptop ? `${item.mobile.column}` : `${item.desktop.column}`;

              return (
                <CustomLink
                  key={index + contentIndex}
                  href={item.lintTo}
                  style={{ gridColumn, gridRow }}
                  className="relative w-full h-full rounded-2xl lg:rounded-3xl select-none pointer-events-none overflow-hidden bg-impo_Neutral_Surface"
                >
                  <CustomImage
                    key={image}
                    fill={true}
                    src={image}
                    alt={index.toString()}
                    sizes="(max-width: 1024px) 350px, 860px"
                    className="w-full h-auto object-cover object-top pointer-events-none"
                  />

                  <div className="absolute left-0 right-0 bottom-0 flex flex-col gap-1 p-4 lg:p-6">
                    <CustomTypography
                      fontSize={breakPoint.laptop ? 'Lable_Small' : 'Title_Small'}
                      className="!text-impo_Neutral_OnBackground"
                    >
                      {item.title}
                    </CustomTypography>

                    <CustomTypography
                      fontSize="Body_Small"
                      className={`${breakPoint.laptop && '!text-[9px] '} !text-impo_Neutral_OnSurface`}
                    >
                      {item.description}
                    </CustomTypography>
                  </div>
                </CustomLink>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default AppFeaturesContents;

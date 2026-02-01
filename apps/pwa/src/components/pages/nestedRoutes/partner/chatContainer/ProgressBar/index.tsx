import React from 'react';

import ArrowUpIcon from '@assets/icons/Alt Arrow Up.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';

import { ProgressBarPropsType } from './type';

const ProgressBar = ({ progress, avatar, partnerAvatar, className }: ProgressBarPropsType) => {
  const milestones = [
    { percent: progress.goldPercent, text: progress.goldText, img: '/assets/images/gold.webp', isGold: true },
    { percent: progress.silverPercent, text: progress.silverText, img: '/assets/images/silver.webp', isGold: false },
    { percent: progress.bronzePercent, text: progress.bronzeText, img: '/assets/images/bronze.webp', isGold: false },
  ];

  return (
    <div className={`relative w-full p-4 ${className}`}>
      <div className="relative w-full h-4 rounded-xl bg-impo_Grey_50">
        <div className="absolute  flex flex-col items-center right-0 z-30 -top-2">
          <div className="w-8 h-8  text-impo_White text-[10px] flex items-center justify-center rounded-full dark:bg-impo_Surface_SurfaceVariant bg-impo_Surface_OnSurfaceVariant ">
            شروع
          </div>
        </div>
        <div
          className="absolute top-[20%] right-0 h-2  rounded-full bg-impo_Surface_Outline dark:bg-impo_Surface_OutlineVariant"
          style={{
            width: `${progress.currentPercent === 100 ? progress.currentPercent : progress.currentPercent + 3}%`,
          }}
        ></div>

        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="absolute -top-2 flex flex-col items-center gap-2"
            style={{
              right: `${milestone.isGold ? '' : `${milestone.percent}%`}`,
              left: `${milestone.isGold ? 0 : ''}%`,
            }}
          >
            <CustomImage
              src={milestone.img}
              width={32}
              height={32}
              className={`rounded-full   ${milestone.percent <= progress.currentPercent ? 'border' : 'border-none'} ${milestone.percent === progress.bronzePercent ? 'border-impo_Orange_500' : milestone.percent === progress.silverPercent ? 'border-impo_Grey_500' : 'border-impo_Yellow_500'}`}
            />

            {milestone.percent <= progress.currentPercent && (
              <CustomTypography fontSize="Lable_Small" className="text-center text-impo_Neutral_OnBackground">
                {milestone.text}
              </CustomTypography>
            )}
          </div>
        ))}

        <div
          className="absolute -top-8 flex flex-col items-center"
          style={{
            right: `${progress.currentPercent === 100 ? '' : `${progress.currentPercent}%`}`,
            left: `${progress.currentPercent !== 100 ? '' : 0}`,
          }}
        >
          <div className="flex items-center relative">
            <div className="w-6 h-6 rounded-full overflow-hidden ml-0 relative bg-impo_White border-2 border-impo_White">
              <CustomImage src={partnerAvatar} className="w-full h-full !object-cover border border-impo_White" />
            </div>
            <div className="w-6 h-6 rounded-full  overflow-hidden  ml-0 absolute left-4 bg-impo_White border-2 border-impo_White">
              <CustomImage src={avatar} className="w-full h-full !object-cover border border-impo_White" />
            </div>
          </div>

          <ArrowUpIcon className="w-4 h-3 !fill-impo_Surface_InverseSurface" />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

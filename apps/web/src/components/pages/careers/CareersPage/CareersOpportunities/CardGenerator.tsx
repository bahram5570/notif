'use client';

import { useEffect, useRef, useState } from 'react';

import ArrowIcon from '@assets/icons/arrow1.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomLink from '@components/ui/CustomLink';
import { useSystem } from '@repo/core/hooks/useSystem';

import {
  CAREER_DEPARTMENT_TITLES,
  CAREER_EMPLOYMENT_LOCATION_TYPE_TITLES,
  CAREER_EMPLOYMENT_TIME_TYPE_TITLES,
  CAREER_LOCATION_TITLES,
} from '../../constants';
import { CardGeneratorTypes } from './types';

const CardGenerator = (props: CardGeneratorTypes) => {
  const { breakPoint } = useSystem();
  const ref = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (breakPoint.tablet) {
      setIsHover(false);
      return;
    }

    const el = ref.current;

    if (el) {
      const handleMouseover = () => {
        setIsHover(true);
      };
      const handleMouseout = () => {
        setIsHover(false);
      };

      el.addEventListener('mouseover', handleMouseover);
      el.addEventListener('mouseout', handleMouseout);

      return () => {
        el.removeEventListener('mouseover', handleMouseover);
        el.removeEventListener('mouseout', handleMouseout);
      };
    }
  }, [breakPoint.tablet]);

  const employmentTimeScript = CAREER_EMPLOYMENT_TIME_TYPE_TITLES[props.employmentTimeType];
  const employmentLocationScript = CAREER_EMPLOYMENT_LOCATION_TYPE_TITLES[props.employmentLocationType];
  const departmentScript = CAREER_DEPARTMENT_TITLES[props.departman];
  const locationScript = CAREER_LOCATION_TITLES[props.location];

  return (
    <CustomLink href={`/careers/${props.id}`}>
      <div
        ref={ref}
        className={`w-full flex flex-col gap-2 p-4 rounded-xl border-[1px] duration-200 ${isHover ? 'border-impo_Primary_Primary bg-impo_Neutral_Surface' : 'border-impo_Neutral_Surface bg-impo_Transparent'}`}
      >
        <div className="w-full flex justify-between items-center">
          <CustomTypography fontSize="Title_Small" className="!text-impo_Neutral_OnBackground">
            {props.title}
          </CustomTypography>

          <div className="w-fit py-[6px] px-[29px] rounded-full bg-impo_Surface_SurfaceVariant">
            <CustomTypography fontSize="Body_Medium" className="!text-impo_Neutral_OnBackground">
              {departmentScript}
            </CustomTypography>
          </div>
        </div>

        <div className="w-full flex justify-between items-center">
          <CustomTypography fontSize="Body_Small" className="!text-impo_Neutral_OnBackground">
            {locationScript}
          </CustomTypography>
        </div>

        <div className="w-full flex justify-between items-center">
          <CustomTypography fontSize="Body_Small" className="!text-impo_Neutral_OnBackground">
            {`${employmentTimeScript} - ${employmentLocationScript}`}
          </CustomTypography>

          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full ${isHover ? 'bg-impo_Primary_Primary' : 'bg-impo_Primary_PrimaryContainer'}`}
          >
            <ArrowIcon className={`w-3 h-auto ${isHover ? '!fill-impo_White' : '!fill-impo_Primary_Primary'}`} />
          </div>
        </div>
      </div>
    </CustomLink>
  );
};

export default CardGenerator;

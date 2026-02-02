'use client';

import { useMemo } from 'react';

// import ArrowIcon from '@assets/icons/arrow.svg';
// import ArrowIcon from '../../../../../assets/src/icons/arrow.svg';

import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { CustomSpinner } from '../CustomSpinner';
import { CustomBackButtonTypes } from './types';

const loadingId = 'BackButton';

export const CustomBackButton = (props: CustomBackButtonTypes) => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const colors = useMemo(() => {
    const result = {
      spinnerColor: 'border-impo_Surface_Outline',
      borderColor: 'border-impo_Surface_Outline',
      iconColor: 'stroke-impo_Surface_Outline',
    };

    if (props.color === 'outline') {
      result.spinnerColor = 'border-impo_Surface_Outline';
      result.borderColor = 'border-impo_Surface_Outline';
      result.iconColor = 'stroke-impo_Surface_Outline';
    } else if (props.color === 'primary') {
      result.spinnerColor = 'border-impo_Primary_Primary';
      result.borderColor = 'border-impo_Primary_Primary';
      result.iconColor = 'stroke-impo_Primary_Primary';
    } else if (props.color === 'onBackground') {
      result.spinnerColor = 'border-impo_Neutral_OnBackground';
      result.borderColor = 'border-impo_Neutral_OnBackground';
      result.iconColor = 'stroke-impo_Neutral_OnBackground';
    } else if (props.color === 'background') {
      result.spinnerColor = 'border-impo_Neutral_Background';
      result.borderColor = 'border-impo_Neutral_Background';
      result.iconColor = 'stroke-impo_Neutral_Background';
    } else if (props.color === 'surface') {
      result.spinnerColor = 'border-impo_Neutral_Background';
      result.borderColor = 'border-impo_Neutral_Background';
      result.iconColor = 'stroke-impo_Surface_InverseSurface dark:stroke-impo_Surface_InverseOnSurface';
    } else {
      result.spinnerColor = 'border-impo_Surface_Outline';
      result.borderColor = 'border-impo_Surface_Outline';
      result.iconColor = 'stroke-impo_Surface_Outline';
    }

    return result;
  }, [props.color]);

  const isLoading = props.isLoading || pageNavigationLoading === loadingId;

  const clickHandler = () => {
    if (!props.isDisable) {
      pageNavigationHandler({ linkTo: -1, showProgressBar: false, id: loadingId });
    }
  };

  return (
    <div
      onClick={clickHandler}
      className={`
                  w-12 
                  h-12 
                  flex 
                  items-center 
                  justify-center 
                  cursor-pointer
                  border-2 
                  rounded-full 
                  ${props.hasBorder ? colors.borderColor : 'border-impo_Transparent'} 
                  ${props.isDisable && 'opacity-25'} 
                  ${props.className}
                `}
    >
      {/* {!isLoading && <ArrowIcon className={`w-6 h-auto m-auto stroke-2  ${colors.iconColor}`} />} */}
      {isLoading && <CustomSpinner className={`${colors.spinnerColor}`} />}
    </div>
  );
};

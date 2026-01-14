import { useEffect, useState } from 'react';

import LastPeriodIcon from '@assets/icons/fakeCycleLastPeriod.svg';
import LengthCycleIcon from '@assets/icons/fakeCycleLengthCycle.svg';
import PregnancyIcon from '@assets/icons/fakeCyclePregnancy.svg';

import { GoalNamesEnum, InstallationPurposeEnum } from '@constants/activation.constants';
import useTheme from '@hooks/useTheme';

import { GoalInfoTypes, UseGoalFinderProps } from './types';

const useGoalFinder = ({ status, periodStatus }: UseGoalFinderProps) => {
  const { colors } = useTheme();

  const pregnancySvgIcon = <PregnancyIcon className="w-6 h-auto fill-impo_Surface_Outline" />;
  const lastPeriodSvgIcon = <LastPeriodIcon className="w-6 h-auto stroke-impo_Surface_Outline" />;
  const lengthCycleSvgIcon = <LengthCycleIcon className="w-6 h-auto stroke-impo_Surface_Outline" />;

  <div className="text-impo_Cycle_BabyTracker_Subtitle" />;

  const [goalInfo, setGoalInfo] = useState<GoalInfoTypes>({
    title: '',
    waveColor: '',
    inputsTitle: '',
    backgroundColor: '',
    inputsTitleColor: '',
    createCycleImage: '',
    selectDatesTopIcon: '',
    selectDatesTopText: '',
    selectDatesBtnText: '',
    selectDatesBottomText: '',
    selectedGoal: GoalNamesEnum.TRACKER,
    selectedGoalTitle: 'اقدام به بارداری',
    selectDatesBottomIcon: lengthCycleSvgIcon,
  });

  const trackerInfo: GoalInfoTypes = {
    selectedGoal: GoalNamesEnum.TRACKER,
    selectDatesTopIcon: lastPeriodSvgIcon,
    selectDatesTopText: 'تاریخ آخرین پریود',
    selectDatesBottomIcon: lengthCycleSvgIcon,
    selectDatesBottomText: 'طول دوره',
    selectedGoalTitle: 'پریود ترکر',
    title:
      'فهمیدن زمان دقیق پریود، PMS و باروری؛ امکان انجام اقدامات لازم برای پیشگیری از بارداری یا داشتن برنامه منظم رو فراهم میکنه',
    inputsTitle: 'اطلاعات زیر رو وارد کن و از کارکرد اصلی اپ ما باخبر شو!',
    inputsTitleColor: 'text-impo_Cycle_Period_Title',
    backgroundColor: 'bg-impo_Pink_50',
    waveColor: '#f24f7a',
    selectDatesBtnText: 'مشاهده پیش بینی',
    createCycleImage: '/assets/images/fakeCycle/createSampleTracker.webp',
  };

  const intentionInfo: GoalInfoTypes = {
    selectedGoal: GoalNamesEnum.INTENTION,
    selectDatesTopIcon: lastPeriodSvgIcon,
    selectDatesTopText: 'تاریخ آخرین پریود',
    selectDatesBottomIcon: lengthCycleSvgIcon,
    selectDatesBottomText: 'طول دوره',
    selectedGoalTitle: 'اقدام به بارداری',
    title: 'فهمیدن زمان دقیق باروری  و تخمک گذاری، اقدامات لازم برای داشتن بیشترین شانس فرزندآوری به صورت موفق',
    inputsTitle: 'اطلاعات زیر رو وارد کن و از کارکرد اصلی اپ ما باخبر شو!',
    inputsTitleColor: 'text-impo_Cycle_Ovulation_Title',
    backgroundColor: 'bg-impo_Cyan_50',
    waveColor: '#1fa4ad',
    selectDatesBtnText: 'مشاهده پیش بینی',
    createCycleImage: '/assets/images/fakeCycle/createSampleIntention.webp',
  };

  const pregnancyInfo: GoalInfoTypes = {
    selectedGoal: GoalNamesEnum.PREGNANCY,
    selectDatesTopIcon: lastPeriodSvgIcon,
    selectDatesTopText: 'تاریخ آخرین پریود',
    selectDatesBottomIcon: pregnancySvgIcon,
    selectDatesBottomText: 'تاریخ زایمان(اعلام شده توسط سونوگرافی)',
    selectedGoalTitle: 'بارداری',
    title:
      'توی سفر پر چالش بارداری، هفته به هفته کنارتیم و با توصیه‌های متخصصین ایمپوکمک میکنیم زایمان راحتی تجربه کنی!',
    inputsTitle: 'با وارد کردن یکی از اطلاعات زیر، از کارکرد اصلی اپ ما باخبر شو!',
    inputsTitleColor: 'text-impo_Cycle_BabyTracker_Subtitle',
    backgroundColor: 'bg-impo_Orange_50',
    waveColor: '#fa643f',
    selectDatesBtnText: 'محاسبه هفته بارداری',
    createCycleImage: '/assets/images/fakeCycle/createSamplePregnancy.webp',
  };

  useEffect(() => {
    if (
      status === InstallationPurposeEnum.tracker.status &&
      periodStatus === InstallationPurposeEnum.tracker.periodStatus
    ) {
      return setGoalInfo(trackerInfo);
    }

    if (
      status === InstallationPurposeEnum.intention.status &&
      periodStatus === InstallationPurposeEnum.intention.periodStatus
    ) {
      return setGoalInfo(intentionInfo);
    }

    if (status === InstallationPurposeEnum.pregnancy.status) {
      return setGoalInfo(pregnancyInfo);
    }

    return setGoalInfo(trackerInfo);
  }, [periodStatus, status]);

  return { goalInfo };
};

export default useGoalFinder;

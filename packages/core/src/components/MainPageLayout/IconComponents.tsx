import ArrowIcon from '@assets/shared/icons/arrow.svg';
import BellIcon from '@assets/shared/icons/bell.svg';
import TicketsHistoryIcon from '@assets/shared/icons/chats.svg';
import CalendarIcon from '@assets/shared/icons/headerCalendar.svg';
import ProfileIcon from '@assets/shared/icons/headerProfile.svg';
import HistoryIcon from '@assets/shared/icons/history.svg';
import InfoIcon from '@assets/shared/icons/infoIcon.svg';

import Link from 'next/link';

import { usePageNavigationLoading } from '../../hooks/usePageNavigationLoading';
import { CustomSpinner } from '../ui/CustomSpinner';
import { CustomTypography } from '../ui/CustomTypography';
import { HEADER_ELEMENT_SIZE } from './constants';
import { IconComponentMakerProps } from './types';

export const BackButtonIconComponent = () => {
  return (
    <IconComponentMaker path="BACK" loadingId="back">
      <ArrowIcon className="w-6 h-full stroke-2 stroke-impo_Surface_Outline" />
    </IconComponentMaker>
  );
};

export const PregnancyCheckupBackButtonIconComponent = () => {
  return (
    <IconComponentMaker path="/" loadingId="back">
      <ArrowIcon className="w-6 h-auto stroke-2 stroke-impo_Surface_Outline" />
    </IconComponentMaker>
  );
};

export const BackToSubscriptionIconComponent = () => {
  return (
    <IconComponentMaker path="/protected/subscription" loadingId="backToSubscription">
      <ArrowIcon className="w-6 h-auto stroke-2 stroke-impo_Surface_Outline" />
    </IconComponentMaker>
  );
};

export const PrifileIconComponent = () => {
  return (
    <IconComponentMaker loadingId="profile" path="/protected/profile">
      <ProfileIcon className="w-6 h-auto stroke-impo_Surface_InverseSurface" />
    </IconComponentMaker>
  );
};

export const CalendarIconComponent = () => {
  return (
    <IconComponentMaker loadingId="calendar" path="/protected/calendar">
      <CalendarIcon className="w-6 h-auto stroke-impo_Surface_InverseSurface" />
    </IconComponentMaker>
  );
};

export const TicketsHistoryIconComponent = () => {
  return (
    <IconComponentMaker loadingId="history" path="/protected/clinic/ticketsHistory">
      <TicketsHistoryIcon className="w-6 h-auto fill-impo_Surface_Outline" />
    </IconComponentMaker>
  );
};

export const ProfileTicketsHistory = () => {
  return (
    <IconComponentMaker loadingId="profileTicketHistory" path="/protected/supportTicketHistory">
      <HistoryIcon className="w-7 h-auto stroke-impo_Surface_InverseSurface" />
    </IconComponentMaker>
  );
};

export const NotificationIconComponent = () => {
  return (
    <IconComponentMaker loadingId="notification" path="/protected/notificationHistory">
      <BellIcon className="w-6 h-auto stroke-impo_Surface_InverseSurface" />
    </IconComponentMaker>
  );
};

export const InfoIconComponent = () => {
  return (
    <Link
      className="flex justify-center items-center rounded-full bg-impo_Neutral_Surface"
      href="https://impo.app/"
      target="_blank"
      style={{
        minHeight: HEADER_ELEMENT_SIZE,
        minWidth: HEADER_ELEMENT_SIZE,
        height: HEADER_ELEMENT_SIZE,
        width: HEADER_ELEMENT_SIZE,
      }}
    >
      <InfoIcon className="w-6 h-full fill-impo_Surface_InverseSurface" />
    </Link>
  );
};

export const LinkToMainPageComponent = () => {
  return (
    <IconComponentMaker path="/" loadingId="LinkToMainPage">
      <div style={{ height: HEADER_ELEMENT_SIZE - 8 }} className="w-fit px-5 flex items-center justify-center">
        <CustomTypography fontSize="Lable_MediumProminet" className="!text-impo_Neutral_OnBackground">
          بازگشت به صفحه اصلی
        </CustomTypography>
      </div>
    </IconComponentMaker>
  );
};

const IconComponentMaker = ({ path, loadingId, className, children }: IconComponentMakerProps) => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const id = `IconComponentMaker_${loadingId}`;

  const clickHandler = () => {
    if (!pageNavigationLoading) {
      if (path === 'BACK') {
        pageNavigationHandler({ showProgressBar: false, id, linkTo: -1 });
      } else {
        pageNavigationHandler({ showProgressBar: false, id, linkTo: path });
      }
    }
  };

  return (
    <div
      className={`relative w-fit rounded-full bg-impo_Neutral_Surface cursor-pointer ${className}`}
      style={{ height: HEADER_ELEMENT_SIZE, minHeight: HEADER_ELEMENT_SIZE, minWidth: HEADER_ELEMENT_SIZE }}
      onClick={clickHandler}
    >
      {pageNavigationLoading === id && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <CustomSpinner size={28} className="border-impo_Surface_Outline" />
        </div>
      )}

      <div
        className={`h-full flex justify-center items-center ${pageNavigationLoading === id ? 'opacity-0' : 'opacity-100'}`}
      >
        {children}
      </div>
    </div>
  );
};

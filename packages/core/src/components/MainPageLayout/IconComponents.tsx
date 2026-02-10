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
import { ICONS_SIZE } from './constants';
import { IconComponentMakerProps } from './types';

export const BackButtonIconComponent = () => {
  return (
    <IconComponentMaker
      path="BACK"
      loadingId="back"
      iconElement={<ArrowIcon className="w-6 h-full stroke-2 stroke-impo_Surface_Outline" />}
    />
  );
};

export const PregnancyCheckupBackButtonIconComponent = () => {
  return (
    <IconComponentMaker
      path="/"
      loadingId="back"
      iconElement={<ArrowIcon className="w-6 h-full stroke-2 stroke-impo_Surface_Outline" />}
    />
  );
};

export const BackToSubscriptionIconComponent = () => {
  return (
    <IconComponentMaker
      path="/protected/subscription"
      loadingId="backToSubscription"
      iconElement={<ArrowIcon className="w-6 h-full stroke-2 stroke-impo_Surface_Outline" />}
    />
  );
};

export const PrifileIconComponent = () => {
  return (
    <IconComponentMaker
      loadingId="profile"
      path="/protected/profile"
      iconElement={<ProfileIcon className="w-6 h-full stroke-impo_Surface_InverseSurface" />}
    />
  );
};

export const CalendarIconComponent = () => {
  return (
    <IconComponentMaker
      loadingId="calendar"
      path="/protected/calendar"
      iconElement={<CalendarIcon className="w-6 h-full stroke-impo_Surface_InverseSurface" />}
    />
  );
};

export const TicketsHistoryIconComponent = () => {
  return (
    <IconComponentMaker
      loadingId="history"
      path="/protected/clinic/ticketsHistory"
      iconElement={<TicketsHistoryIcon className="w-8 h-full fill-impo_Surface_Outline" />}
    />
  );
};

export const ProfileTicketsHistory = () => {
  return (
    <div className="flex justify-center items-center w-12 h-12 border-[1px] border-impo_Neutral_Surface rounded-full">
      <IconComponentMaker
        loadingId="profileTicketHistory"
        path="/protected/supportTicketHistory"
        iconElement={<HistoryIcon className="w-6" />}
      />
    </div>
  );
};

export const NotificationIconComponent = () => {
  return (
    <IconComponentMaker
      loadingId="notification"
      path="/protected/notificationHistory"
      iconElement={<BellIcon className="w-6 h-full stroke-impo_Surface_InverseSurface" />}
    />
  );
};

export const InfoIconComponent = () => {
  return (
    <Link href="https://impo.app/" target="_blank">
      <InfoIcon className="w-7 h-full fill-impo_Surface_Outline" />
    </Link>
  );
};

const IconComponentMaker: IconComponentMakerProps = ({ iconElement, path, loadingId }) => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const id = `IconComponentMaker_${loadingId}`;

  const clickHandler = () => {
    if (!pageNavigationLoading) {
      if (path === 'BACK') {
        pageNavigationHandler({ showProgressBar: false, linkTo: -1, id });
      } else {
        pageNavigationHandler({ showProgressBar: false, linkTo: path, id });
      }
    }
  };

  return (
    <div
      className="cursor-pointer flex justify-center items-center"
      style={{ width: ICONS_SIZE, height: ICONS_SIZE }}
      onClick={clickHandler}
    >
      {pageNavigationLoading === id && <CustomSpinner size={28} className="border-impo_Surface_Outline" />}
      {pageNavigationLoading !== id && iconElement}
    </div>
  );
};

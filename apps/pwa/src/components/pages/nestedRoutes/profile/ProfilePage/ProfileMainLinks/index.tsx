import EditsCard from './EditsCard';
import IntroduceCard from './IntroduceCard';
import SupportCard from './SupportCard';
import { ProfileMainLinksTypes } from './types';

const ProfileMainLinks = ({ phase, isDelivery, pregnancyDate, hasTicketSupportActive }: ProfileMainLinksTypes) => {
  return (
    <div className="w-full h-[120px] px-4 flex gap-2 justify-center">
      <SupportCard hasTicketSupportActive={hasTicketSupportActive} />
      <EditsCard phase={phase} isDelivery={isDelivery} pregnancyDate={pregnancyDate} />
      <IntroduceCard />
    </div>
  );
};

export default ProfileMainLinks;

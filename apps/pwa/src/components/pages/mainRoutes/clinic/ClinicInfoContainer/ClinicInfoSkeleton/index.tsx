import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';

const ClinicInfoSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-4 animate-skeleton" style={{ paddingTop: HEADER_HEIGHT + 20 }}>
      <div className="w-full flex justify-between">
        <div className="w-[120px] h-[32px] rounded-full bg-impo_Neutral_Surface" />
        <div className="w-[120px] h-[16px] rounded-md bg-impo_Neutral_Surface" />
      </div>

      <div className="w-full h-[160px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-full h-[40px] rounded-md bg-impo_Neutral_Surface" />
      <div className="w-full h-[200px] rounded-md bg-impo_Neutral_Surface" />
    </div>
  );
};

export default ClinicInfoSkeleton;

import InfoIcon from '@assets/icons/info.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

const Warning = () => {
  return (
    <div
      className="rounded-lg flex flex-row p-3 items-center  m-4 border border-impo_Warning_Warning"
      style={{
        backgroundColor: 'rgba(255, 237, 213,0.5)',
      }}
    >
      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        تا زمانی که همدلت پیامت رو نخونه امکان ارسال پیام جدید نیست
      </Dark_Typography>

      <div className="w-11 rotate-90 h-0 border border-impo_Green_100"></div>
      <InfoIcon className="w-6 h-6 stroke-impo_Warning_Warning" />
    </div>
  );
};

export default Warning;

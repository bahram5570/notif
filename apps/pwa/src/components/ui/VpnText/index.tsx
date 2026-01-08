import Dark_Typography from '../Dark_Typography';

const VpnText = () => {
  return (
    <div className="flex flex-row-reverse items-center justify-start gap-1 ">
      <div className="flex justify-center items-center h-3 p-2 rounded bg-impo_Surface_InverseSurface">
        <Dark_Typography fontSize="Lable_Small" className="text-impo_Neutral_Background">
          VPN
        </Dark_Typography>
      </div>

      <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
        جهت ورود به درگاه بانک، لازم است فیلترشکن خاموش باشد.
      </Dark_Typography>
    </div>
  );
};

export default VpnText;

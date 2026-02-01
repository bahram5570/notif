import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const VpnText = () => {
  return (
    <div className="flex flex-row-reverse items-center justify-start gap-1 ">
      <div className="flex justify-center items-center h-3 p-2 rounded bg-impo_Surface_InverseSurface">
        <CustomTypography fontSize="Lable_Small" className="text-impo_Neutral_Background">
          VPN
        </CustomTypography>
      </div>

      <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
        جهت ورود به درگاه بانک، لازم است فیلترشکن خاموش باشد.
      </CustomTypography>
    </div>
  );
};

export default VpnText;

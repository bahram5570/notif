import ProfileThemeIcon from '@assets/icons/profile/theme.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { PROFILE_MODAL_QUERY_NAME } from '../ProfileLinkList/constants';
import { ProfileModalNameEnums } from '../ProfileModals/enum';

const DarkModeSettings = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectHandler = () => {
    newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      [PROFILE_MODAL_QUERY_NAME]: ProfileModalNameEnums.DarkModeSettings,
    });

    pageNavigationHandler({ showProgressBar: true, id: ProfileModalNameEnums.Logout });
  };

  return (
    <div onClick={selectHandler} className="flex flex-row items-center justify-end gap-3 w-full px-5">
      <div className="py-4 w-full flex justify-end items-center border-t-[1px] border-t-impo_Neutral_Surface">
        <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
          پوسته
        </CustomTypography>
      </div>

      <ProfileThemeIcon className="w-10 h-10" />
    </div>
  );
};

export default DarkModeSettings;

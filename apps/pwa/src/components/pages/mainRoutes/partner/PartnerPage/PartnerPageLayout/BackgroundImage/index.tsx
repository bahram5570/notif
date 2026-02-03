import EditIcon from '@assets/icons/Gallery Edit.svg';
import UploadIcon from '@assets/icons/upload.svg';

import CustomImage from '@components/ui/CustomImage';
import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { PartnerModalNameEnums } from '../../PartnerModals/enums';
import { BackgroundImagePropsType } from './type';

const BackgroundImage = ({ isValid, coverImage }: BackgroundImagePropsType) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const canDeleteImage = coverImage ? true : false;

  const onClick = () => {
    (newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      name: PartnerModalNameEnums.UploadBackgroundImage,
      canDeleteImage: String(canDeleteImage),
    }),
      pageNavigationHandler({ showProgressBar: true, id: 'UploadBackgroundImage' }));
  };

  return (
    <div className="absolute w-full">
      <div className="relative">
        <div className="overflow-hidden  flex justify-center items-center">
          <CustomImage
            src={`${coverImage ? coverImage : '/assets/images/backgroundHamdel.webp'}`}
            className={`!object-cover z-0 ${!canDeleteImage && 'dark:hidden'}`}
            alt="background"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>

        <div
          className="absolute inset-0 opacity-95 dark:!bg-gradient-to-b dark:!from-[#2a2a2a50] dark:!to-[#FFFFFF]"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 94.5%)',
          }}
        ></div>
        {isValid && (
          <div className={`absolute ${coverImage ? ' top-44' : 'top-32'} left-3 z-20 select-none`} onClick={onClick}>
            <div
              className="w-8 h-8 flex justify-center items-center rounded-full cursor-pointer bg-impo_Neutral_Background"
              style={{
                opacity: 50,
              }}
            >
              {coverImage ? (
                <EditIcon className="w-4 h-4 fill-impo_Neutral_OnBackground" />
              ) : (
                <UploadIcon className="w-4 h-4 fill-impo_Neutral_OnBackground" />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundImage;

import EditIcon from '@assets/icons/Gallery Edit.svg';
import UploadIcon from '@assets/icons/upload.svg';

import { MODAL_QUERY_NAME } from '../../../../constants/modal.constants';
import { usePageNavigationLoading } from '../../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../../hooks/useQueryParamsHandler';
import { CustomImage } from '../../../ui/CustomImage';
import { BackgroundImagePropsType } from './type';

export const BackgroundImage = ({ isValid, coverImage, defaultCoverImage }: BackgroundImagePropsType) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const canDeleteImage = Boolean(coverImage);
  const imageSrc = coverImage || defaultCoverImage;

  const handleClick = () => {
    newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      partnerModal: 'UploadBackgroundImage',
      canDeleteImage: String(canDeleteImage),
    });

    pageNavigationHandler({
      showProgressBar: true,
      id: 'UploadBackgroundImage',
    });
  };

  const icon = canDeleteImage ? (
    <EditIcon className="w-4 h-4 fill-impo_Neutral_OnBackground" />
  ) : (
    <UploadIcon className="w-4 h-4 fill-impo_Neutral_OnBackground" />
  );

  const iconTop = canDeleteImage ? 'top-44' : 'top-32';

  return (
    <div className="absolute w-full">
      <div className="relative">
        <div className="flex items-center justify-center overflow-hidden">
          <CustomImage
            src={imageSrc}
            alt="background"
            style={{ width: '100%', height: 'auto' }}
            className={`!object-cover z-0 ${!canDeleteImage && 'dark:hidden'}`}
          />
        </div>

        <div
          className="absolute inset-0 opacity-95 dark:!bg-gradient-to-b dark:!from-[#FFFFFF50] dark:!to-[#2a2a2a]"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 94.5%)',
          }}
        />

        {isValid && (
          <div className={`absolute ${iconTop} left-3 z-20 select-none`} onClick={handleClick}>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-impo_Neutral_Background opacity-50">
              {icon}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

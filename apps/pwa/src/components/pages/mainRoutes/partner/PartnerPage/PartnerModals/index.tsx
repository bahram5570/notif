import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import UploadBackgroundImageModal from './UploadBackgroundImageModal';
import UploadImageModal from './UploadImageModal';
import { PartnerModalNameEnums } from './enums';

const PartnerModals = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const modalName = getQueryParams('partnerModal') as PartnerModalNameEnums | null;
  const isOpen = modalName !== null;

  return (
    <CustomModal isSlidingMode className="!min-h-fit" isOpen={isOpen}>
      <div>
        {modalName === PartnerModalNameEnums.UploadImage && <UploadImageModal />}
        {modalName === PartnerModalNameEnums.UploadBackgroundImage && <UploadBackgroundImageModal />}
      </div>
    </CustomModal>
  );
};

export default PartnerModals;

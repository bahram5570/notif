import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import AcceptModal from './AcceptModal';
import RejectModal from './RejectModal';
import TypeRelationship from './TypeRelationship';
import { PartnerModalNameEnums } from './enums';

export const PartnerModals = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const modalName = getQueryParams('name') as PartnerModalNameEnums | null;
  const isOpen = modalName !== null;

  return (
    <CustomModal
      isSlidingMode={modalName === PartnerModalNameEnums.TypeDistance}
      className="!min-h-fit"
      isOpen={isOpen}
    >
      <div>
        {modalName === PartnerModalNameEnums.Accept && <AcceptModal />}
        {modalName === PartnerModalNameEnums.Reject && <RejectModal />}
        {modalName === PartnerModalNameEnums.TypeDistance && <TypeRelationship />}
      </div>
    </CustomModal>
  );
};

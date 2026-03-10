import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import AcceptModal from './AcceptModal';
import RejectModal from './RejectModal';
import TypeRelationship from './TypeRelationship';
import { PartnerModalNameEnums } from './enums';
import { PartnerModalsPropsType } from './type';

export const PartnerModals = ({ isMan }: PartnerModalsPropsType) => {
  const { getQueryParams } = useQueryParamsHandler();
  const route = useRouter();

  const modalName = getQueryParams('name') as PartnerModalNameEnums | null;

  const onCloseModal = () => {
    route.back();
  };

  return (
    <CustomModal isSlidingMode={modalName === PartnerModalNameEnums.TypeDistance} className="!min-h-fit">
      <div>
        {modalName === PartnerModalNameEnums.Accept && <AcceptModal isMan={isMan} />}
        {modalName === PartnerModalNameEnums.Reject && <RejectModal onCloseModal={onCloseModal} isMan={isMan} />}
        {modalName === PartnerModalNameEnums.TypeDistance && <TypeRelationship isMan={isMan} />}
      </div>
    </CustomModal>
  );
};

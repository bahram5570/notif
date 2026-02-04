import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { MODAL_QUERY_NAME } from '@repo/core/constants/modal.constants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import ChildBirthDate from './ChildBirthDate';
import { ModalPropsType } from './type';

const BreastfeedingSettingModal = ({ changeValueHandler, value }: ModalPropsType) => {
  const route = useRouter();
  const { getQueryParams } = useQueryParamsHandler();
  const hasModal = getQueryParams(MODAL_QUERY_NAME) !== null;

  const onCloseModal = () => {
    route.back();
  };

  const isOpen = hasModal;

  return (
    <CustomModal isSlidingMode={true} isOpen={isOpen}>
      <ChildBirthDate
        onCloseModal={onCloseModal}
        childBirthDate={value.childBirthDate}
        changeValueHandler={changeValueHandler}
      />
    </CustomModal>
  );
};

export default BreastfeedingSettingModal;

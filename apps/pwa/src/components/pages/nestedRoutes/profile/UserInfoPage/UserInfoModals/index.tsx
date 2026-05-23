import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { MODALS } from '@constants/modals.constants';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { UserInfoValuesTypes } from '../__hooks__/useValues/types';
import BirthDateModal from './BirthDateModal';
import { UserInfoModalsTypes } from './types';

const UserInfoModals = ({ values, valuesHandler }: UserInfoModalsTypes) => {
  const router = useCustomRouter();
  const { getQueryParams } = useQueryParamsHandler();

  const closeHandler = () => {
    router.back();
  };

  const currentQuery = getQueryParams(MODALS.USER_INFO) as null | keyof UserInfoValuesTypes;
  const isOpen = currentQuery !== null;

  return (
    <CustomModal isOpen={isOpen} isSlidingMode={true}>
      <div className="w-full flex flex-col items-center">
        {currentQuery === 'birthDate' && (
          <BirthDateModal
            onClose={closeHandler}
            value={values.birthDate}
            valueHandler={(v) => valuesHandler('birthDate', v)}
          />
        )}
      </div>
    </CustomModal>
  );
};

export default UserInfoModals;

import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { UserInfoValuesTypes } from '../__hooks__/useValues/types';
import BirthDateModal from './BirthDateModal';
import { UserInfoModalsTypes } from './types';

const UserInfoModals = ({ values, valuesHandler }: UserInfoModalsTypes) => {
  const router = useRouter();
  const { getQueryParams } = useQueryParamsHandler();

  const closeHandler = () => {
    router.back();
  };

  const currentQuery = getQueryParams(MODALS.USER_INFO) as null | keyof UserInfoValuesTypes;
  const isOpen = currentQuery !== null;

  return (
    <CustomModal isOpen={isOpen} isSlidingMode={true}>
      <div className="w-full flex flex-col items-center">
        {currentQuery === 'birthdate' && (
          <BirthDateModal
            onClose={closeHandler}
            value={values.birthdate}
            valueHandler={(v) => valuesHandler('birthdate', v)}
          />
        )}
      </div>
    </CustomModal>
  );
};

export default UserInfoModals;

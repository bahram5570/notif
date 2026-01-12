import ClockIcon from '@assets/icons/clock1.svg';
import PeopleIcon from '@assets/icons/people.svg';
import StarIcon from '@assets/icons/star.svg';

import Dark_Button from '@components/ui/Dark_Button';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { usePathname } from 'next/navigation';

import { CLINIC_DOCTOR_MODAL_QUERY_NAME } from '../../../ClinicDoctorModal/constants';
import SpecialistInfoGenerator from '../SpecialistInfoGenerator';
import SpecialistCardSectionMaker from './SpecialistCardSectionMaker';
import { SpecialistCardGeneratorProps } from './types';

const SpecialistCardGenerator = ({
  selectedDoctorHandler,
  hasCommentsButton,
  nezamNumber,
  selectedId,
  speciliaty,
  firstName,
  lastName,
  isOnline,
  minTime,
  rrCount,
  image,
  rate,
  id,
}: SpecialistCardGeneratorProps) => {
  const pathname = usePathname();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectHandler = () => {
    if (!hasCommentsButton) {
      selectedDoctorHandler(id);
    }
  };

  const selectDoctorHandler = () => {
    const pathnameList = pathname.split('/');
    const clinicInfo = pathnameList[pathnameList.length - 1];

    pageNavigationHandler({ id, showProgressBar: false });
    newQueryParamsHandler({ [CLINIC_DOCTOR_MODAL_QUERY_NAME]: JSON.stringify({ drId: id, clinicInfo }) });
  };

  const isSelected = selectedId === id;

  return (
    <div
      onClick={selectHandler}
      className={`w-full p-2 rounded-xl ${isSelected ? 'bg-impo_Blue_100 dark:!bg-impo_Blue_800' : 'bg-impo_Neutral_Surface'}`}
    >
      <SpecialistInfoGenerator
        nezamNumber={nezamNumber}
        isSelected={isSelected}
        speciliaty={speciliaty}
        firstName={firstName}
        lastName={lastName}
        isOnline={isOnline}
        image={image}
      />

      <div className="flex justify-between items-center px-2 mt-[2px]">
        <SpecialistCardSectionMaker
          value={rrCount.toString()}
          title="تعداد مشاوره ها"
          isSelected={isSelected}
          Icon={PeopleIcon}
        />

        <SpecialistCardSectionMaker title="میانگین امتیازات" isSelected={isSelected} Icon={StarIcon} value={rate} />

        <SpecialistCardSectionMaker title="میانگین پاسخگویی" isSelected={isSelected} Icon={ClockIcon} value={minTime} />
      </div>

      {hasCommentsButton && (
        <Dark_Button onClick={selectDoctorHandler} className="rounded-lg my-2" navigationLoadingId={id}>
          نظرات کاربران
        </Dark_Button>
      )}
    </div>
  );
};

export default SpecialistCardGenerator;

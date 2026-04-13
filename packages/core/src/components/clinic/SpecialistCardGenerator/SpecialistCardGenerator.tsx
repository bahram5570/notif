import ClockIcon from '@assets/shared/icons/clock1.svg';
import PeopleIcon from '@assets/shared/icons/people.svg';
import StarIcon from '@assets/shared/icons/star.svg';

import { usePathname } from 'next/navigation';

import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../hooks/useQueryParamsHandler';
import { useSystem } from '../../../hooks/useSystem';
import { CustomButton } from '../../ui/CustomButton';
import { SpecialistInfoGenerator } from '../SpecialistInfoGenerator';
import { CLINIC_DOCTOR_MODAL_QUERY_NAME } from '../constants';
import SpecialistCardSectionMaker from './SpecialistCardSectionMaker';
import { SpecialistCardGeneratorProps } from './types';

export const SpecialistCardGenerator = (props: SpecialistCardGeneratorProps) => {
  const { appName } = useSystem();
  const pathname = usePathname() || '';
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectHandler = () => {
    if (!props.hasCommentsButton) {
      props.selectedDoctorHandler(props.id);
    }
  };

  const selectDoctorHandler = () => {
    const pathnameList = pathname.split('/');
    const clinicInfo = pathnameList[pathnameList.length - 1];

    pageNavigationHandler({ id: props.id, showProgressBar: false });
    newQueryParamsHandler({ [CLINIC_DOCTOR_MODAL_QUERY_NAME]: JSON.stringify({ drId: props.id, clinicInfo }) });
  };

  const isSelected = props.selectedId === props.id;
  const isMan = appName === 'MEN_PWA';
  const backgroundColor = isMan
    ? 'bg-gradient-to-t from-[#233157] via-[#405387] to-[#415488]'
    : 'bg-impo_Blue_100 dark:!bg-impo_Blue_800';

  return (
    <div
      onClick={selectHandler}
      className={`w-full p-2 rounded-xl   ${isSelected ? backgroundColor : 'bg-impo_Neutral_Surface'}`}
      style={{ background: '' }}
    >
      <SpecialistInfoGenerator {...props} isSelected={isSelected} />

      <div className="flex justify-between items-center px-2 mt-[2px]">
        <SpecialistCardSectionMaker
          value={props.rrCount.toString()}
          title="تعداد مشاوره ها"
          isSelected={isSelected}
          Icon={PeopleIcon}
        />

        <SpecialistCardSectionMaker
          title="میانگین امتیازات"
          isSelected={isSelected}
          Icon={StarIcon}
          value={props.rate}
        />

        <SpecialistCardSectionMaker
          title="میانگین پاسخگویی"
          isSelected={isSelected}
          Icon={ClockIcon}
          value={props.minTime}
        />
      </div>

      {props.hasCommentsButton && (
        <CustomButton
          onClick={selectDoctorHandler}
          className={`rounded-lg my-2 ${isMan && '!bg-[#E2E2E233] !border-0 !text-impo_White'} `}
          navigationLoadingId={props.id}
        >
          نظرات کاربران
        </CustomButton>
      )}
    </div>
  );
};

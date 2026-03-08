import CalendarArrow from '@assets/shared/icons/calendarArrow.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { SupportLinkGeneratorType } from '../type';
import useGetSupportInfo from './__hooks__/useGetSupportInfo';

const SupportLinkGenerator = (props: SupportLinkGeneratorType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { supportPhone } = useGetSupportInfo();

  return (
    <>
      {props.typeLink === 'external' && (
        <a
          className="p-4 rounded-lg bg-impo_Neutral_Background"
          href={`tel:${supportPhone}`}
          onClick={() => pageNavigationHandler({ id: 'SupportLinkGenerator', showProgressBar: true })}
        >
          <div className="flex flex-col items-end gap-2">
            <CustomTypography fontSize="Lable_MediumProminet" className="text-impo_PrimaryMan_PrimaryMan">
              {props.title}
            </CustomTypography>

            <div className="flex flex-row-reverse items-center justify-between w-full pb-3">
              <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_Outline">
                {props.discription}
              </CustomTypography>

              <CalendarArrow className="w-6 h-6 stroke-impo_Surface_Outline" />
            </div>
          </div>
        </a>
      )}
    </>
  );
};

export default SupportLinkGenerator;

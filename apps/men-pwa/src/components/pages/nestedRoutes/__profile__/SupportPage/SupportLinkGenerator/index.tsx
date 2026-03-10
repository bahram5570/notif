import CalendarArrow from '@assets/shared/icons/calendarArrow.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import QuestionGenerator from '../QuestionGenerator';
import { SupportLinkGeneratorType } from '../type';

const SupportLinkGenerator = (props: SupportLinkGeneratorType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  return (
    <>
      {props.phone && (
        <a
          className="p-4 rounded-lg bg-impo_Neutral_Background"
          href={`tel:${props.phone}`}
          onClick={() => pageNavigationHandler({ id: 'SupportLinkGenerator', showProgressBar: true })}
        >
          <div className="flex flex-col items-end gap-1">
            <CustomTypography fontSize="Lable_MediumProminet" className="text-impo_PrimaryMan_PrimaryMan">
              {props.title}
            </CustomTypography>

            <div className="flex flex-row-reverse items-center justify-between w-full">
              <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_Outline">
                {props.description}
              </CustomTypography>

              <CalendarArrow className="w-6 h-6 stroke-impo_Surface_Outline" />
            </div>
          </div>
        </a>
      )}

      {!props.phone && (
        <div className="p-4 rounded-lg bg-impo_Neutral_Background">
          <div className="flex flex-col items-end gap-1">
            <CustomTypography fontSize="Lable_MediumProminet" className="text-impo_PrimaryMan_PrimaryMan">
              {props.title}
            </CustomTypography>

            <div className="flex flex-row-reverse items-center justify-between w-full">
              <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_Outline">
                {props.description}
              </CustomTypography>
            </div>
            {props.items && <QuestionGenerator items={props.items} />}
          </div>
        </div>
      )}
    </>
  );
};

export default SupportLinkGenerator;

import CalendarArrow from '@assets/icons/calendarArrow.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import LinkedContent from '@components/ui/LinkedContent';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { SupportLinkGeneratorType } from '../type';
import useGetDataSupport from './__hooks__/useGetDataSupport';

const SupportLinkGenerator = (props: SupportLinkGeneratorType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { supportPhone } = useGetDataSupport();

  return (
    <>
      {props.typeLink === 'external' && (
        <a
          className=" p-4  rounded-lg  bg-impo_Neutral_Background"
          href={`tel:${supportPhone}`}
          onClick={() => pageNavigationHandler({ id: 'SupportLinkGenerator', showProgressBar: true })}
        >
          <div className="flex flex-col items-end gap-2">
            <CustomTypography fontSize="Lable_MediumProminet" className="text-impo_Neutral_OnBackground">
              {props.title}
            </CustomTypography>

            <div className="flex flex-row-reverse items-center justify-between w-full pb-3">
              <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_Outline">
                {props.discription}
              </CustomTypography>

              <CalendarArrow className="w-4 h-4 stroke-impo_Surface_Outline" />
            </div>
          </div>
        </a>
      )}
      {props.typeLink === 'internal' && (
        <LinkedContent
          onClickHandler={() =>
            pageNavigationHandler({ id: 'SupportLinkGenerator', showProgressBar: true, linkTo: props.link })
          }
          title={props.title}
          discription={props.discription}
          className="rounded-lg"
        />
      )}
    </>
  );
};

export default SupportLinkGenerator;

import CalendarArrow from '@assets/icons/calendarArrow.svg';

import Dark_Typography from '@components/ui/Dark_Typography';
import LinkedContent from '@components/ui/LinkedContent';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { SupportLinkGeneratorType } from '../type';
import useGetDataSupport from './__hooks__/useGetDataSupport';

const SupportLinkGenerator = (props: SupportLinkGeneratorType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { supportPhone } = useGetDataSupport();

  return (
    <>
      {props.typeLink === 'external' && (
        <a
          className=" p-4  rounded-lg h-24 bg-impo_Neutral_Background"
          href={`tel:${supportPhone}`}
          onClick={() => pageNavigationHandler({ id: 'SupportLinkGenerator', showProgressBar: true })}
        >
          <div className="flex flex-col items-end gap-2">
            <Dark_Typography fontSize="Lable_MediumProminet" className="text-impo_Primary_Primary">
              {props.title}
            </Dark_Typography>

            <div className="flex flex-row-reverse items-center justify-between w-full">
              <Dark_Typography fontSize="Body_Medium" className="text-impo_Surface_Outline">
                {props.discription}
              </Dark_Typography>

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
          className="rounded-lg h-24"
        />
      )}
    </>
  );
};

export default SupportLinkGenerator;

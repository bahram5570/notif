import CalendarArrow from '@assets/icons/calendarArrow.svg';

import LinkedContent from '@components/ui/LinkedContent';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import { SupportLinkGeneratorType } from '../type';
import useGetDataSupport from './__hooks__/useGetDataSupport';

const SupportLinkGenerator = (props: SupportLinkGeneratorType) => {
  const { colors } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { supportPhone } = useGetDataSupport();

  return (
    <>
      {props.typeLink === 'external' && (
        <a
          className=" p-4  rounded-lg h-24"
          href={`tel:${supportPhone}`}
          onClick={() => pageNavigationHandler({ id: 'SupportLinkGenerator', showProgressBar: true })}
          style={{ backgroundColor: colors.White }}
        >
          <div className="flex flex-col items-end gap-2">
            <Typography scale="Lable" size="MediumProminet" color="PrimaryWoman_Primary">
              {props.title}
            </Typography>

            <div className="flex flex-row-reverse items-center justify-between w-full">
              <Typography scale="Body" size="Medium" color="Surface_Outline">
                {props.discription}
              </Typography>
              <CalendarArrow style={{ stroke: colors.Surface_Outline }} className="w-4 h-4" />
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

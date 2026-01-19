import LinkIcon from '@assets/icons/calendarSignLink.svg';

import Dark_Spinner from '@components/ui/Dark_Spinner';
import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import Link from 'next/link';

import { CustomContainerPropsType } from './type';

const CustomContainer = ({ allBtnLink, children, plusIconLink, title, showAllBtn }: CustomContainerPropsType) => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const isLoading = pageNavigationLoading === allBtnLink;

  const linkTo = () => {
    pageNavigationHandler({
      showProgressBar: true,
      id: `cutomContainer${plusIconLink}`,
      linkTo: `${plusIconLink}`,
    });
  };

  return (
    <div className=" rounded-2xl p-2 flex flex-col bg-impo_White">
      <div onClick={linkTo} className="divide-y-2">
        <div className="w-full flex flex-row-reverse items-center justify-between h-fit  p-3 ">
          <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            {title}
          </Dark_Typography>

          <div className="relative cursor-pointer">
            <LinkIcon className="w-10 h-auto" />
          </div>
        </div>
        <>{children}</>
      </div>
      {showAllBtn && (
        <Link
          href={`${allBtnLink}`}
          className="flex items-center justify-center gap-2 px-6 py-2 rounded-full border-[1px] select-none cursor-pointer z-20  my-2 bg-impo_Neutral_Surface"
          onClick={() => {
            pageNavigationHandler({ showProgressBar: false, id: allBtnLink });
          }}
        >
          <Dark_Typography fontSize="Lable_Large" className="text-impo_Black">
            مشاهده همه تست‌های انجام شده
          </Dark_Typography>
          {isLoading && <Dark_Spinner size={18} />}
        </Link>
      )}
    </div>
  );
};

export default CustomContainer;

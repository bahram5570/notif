import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import Link from 'next/link';

import { TicketFooterPropsType } from './type';

const TicketFooter = ({ id, title }: TicketFooterPropsType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  return (
    <footer className="mt-auto flex flex-col justify-center items-center w-full p-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <Dark_Typography fontSize="Title_Small" className="text-impo_Surface_OnSurfaceVariant">
          مشکلت رو تو سوالات بالا پیدا نکردی؟
        </Dark_Typography>
        <Link
          onClick={() => pageNavigationHandler({ id: 'supportChat', showProgressBar: true })}
          href={{ pathname: '/protected/contactSupport', query: { id, name: title } }}
          className="px-6 py-3 rounded-full bg-impo_Primary_Primary"
        >
          <Dark_Typography fontSize="Lable_Large" className="text-impo_PrimaryMan_OnPrimaryMan">
            ارتباط با پشتیبانی
          </Dark_Typography>
        </Link>
      </div>
    </footer>
  );
};

export default TicketFooter;

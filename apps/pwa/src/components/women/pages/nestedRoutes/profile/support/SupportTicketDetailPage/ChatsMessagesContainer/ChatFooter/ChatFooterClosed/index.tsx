import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const ChatFooterClosed = () => {
  const { ticketId } = useParams();
  const { pageNavigationHandler } = usePageNavigationLoading();

  return (
    <div className="w-full flex-col flex items-center justify-center gap-2 p-3">
      <div className="flex flex-col justify-center items-center gap-2">
        <Dark_Typography fontSize="Lable_LargeProminet" className="text-impo_Primary_Primary">
          تیکت بسته شده
        </Dark_Typography>
        <Dark_Typography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant text-center">
          با ثبت نظرت، کمک بزرگی به تیم ایمپو برای بهبود اپلیکیشن خواهی کرد
        </Dark_Typography>
      </div>

      <Link
        href={`/protected/supportTicket/${ticketId}/rate`}
        onClick={() => pageNavigationHandler({ id: 'ChatFooterClosed', showProgressBar: true })}
        className="w-full flex justify-center items-center rounded-full py-3 px-6 bg-impo_Primary_Primary"
      >
        <Dark_Typography fontSize="Title_Small" className="text-impo_PrimaryMan_OnPrimaryMan">
          ثبت نظر
        </Dark_Typography>
      </Link>
    </div>
  );
};

export default ChatFooterClosed;

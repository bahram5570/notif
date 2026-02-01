import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const ChatFooterClosed = () => {
  const ticketId = useParams()?.ticketId;
  const { pageNavigationHandler } = usePageNavigationLoading();

  return (
    <div className="w-full flex-col flex items-center justify-center gap-2 p-3">
      <div className="flex flex-col justify-center items-center gap-2">
        <CustomTypography fontSize="Lable_LargeProminet" className="text-impo_Primary_Primary">
          تیکت بسته شده
        </CustomTypography>
        <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant text-center">
          با ثبت نظرت، کمک بزرگی به تیم ایمپو برای بهبود اپلیکیشن خواهی کرد
        </CustomTypography>
      </div>

      <Link
        href={`/protected/supportTicket/${ticketId}/rate`}
        onClick={() => pageNavigationHandler({ id: 'ChatFooterClosed', showProgressBar: true })}
        className="w-full flex justify-center items-center rounded-full py-3 px-6 bg-impo_Primary_Primary"
      >
        <CustomTypography fontSize="Title_Small" className="text-impo_PrimaryMan_OnPrimaryMan">
          ثبت نظر
        </CustomTypography>
      </Link>
    </div>
  );
};

export default ChatFooterClosed;

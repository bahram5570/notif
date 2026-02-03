import AttachIcon from '@assets/icons/attach.svg';
import SendIcon from '@assets/icons/ticketSend.svg';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { toPersianNumbers } from '@repo/core/utils/numbers';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import { useOperatingSystem } from '@repo/core/hooks/useOperatingSystem';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ChatFooterMessageModal from './ChatFooterMessageModal';
import useTextValue from './__hooks__/useTextValue';

const ChatFooterMessageInput = () => {
  const { operatingSystem } = useOperatingSystem();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Large', operatingSystem });

  const { text, textHandler, submitTextHandler, textLoading } = useTextValue();

  const onClick = () => {
    (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true' }),
      pageNavigationHandler({ showProgressBar: false, id: 'supportUploadChat' }));
  };

  return (
    <>
      <div className="w-full flex items-center gap-2">
        <div className="w-full h-10 px-4 flex items-center justify-between gap-2 border-[1px] rounded-full border-impo_Neutral_Surface">
          <div
            className="relative w-6 h-6 min-w-6 min-h-6 flex items-center justify-center overflow-hidden"
            onClick={onClick}
          >
            <AttachIcon className="w-4 h-auto rotate-45 pointer-events-none fill-impo_Primary_Primary" />
          </div>

          <input
            placeholder="پیامت رو بنویس"
            value={toPersianNumbers(text)}
            style={{ ...typographyFontStyles }}
            className="border-none outline-none w-full   bg-impo_Neutral_Background text-impo_Neutral_OnBackground placeholder:text-impo_Surface_OutlineVariant"
            onChange={(e) => textHandler(e.target.value)}
          />
        </div>

        <div
          onClick={submitTextHandler}
          style={{ opacity: text.trim() === '' ? '0.5' : '1' }}
          className="w-12 h-12 min-w-12 min-h-12 rounded-full flex items-center justify-center cursor-pointer bg-impo_Primary_Primary"
        >
          {textLoading && <CustomSpinner className="border-impo_White" size={20} />}
          {!textLoading && <SendIcon className="w-5 h-auto ml-1 stroke-impo_White fill-impo_White" />}
        </div>
      </div>

      <ChatFooterMessageModal />
    </>
  );
};

export default ChatFooterMessageInput;

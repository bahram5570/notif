import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { NEW_COMMENT_FOOTER_SIZE } from './constants';
import { ShareExperienceNewCommentFooterModuleProps } from './types';

const ShareExperienceNewCommentFooterModule = ({
  placeholder,
  queries,
  avatar,
}: ShareExperienceNewCommentFooterModuleProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectHandler = () => {
    newQueryParamsHandler(queries);
    pageNavigationHandler({ id: 'ShareExperienceNewCommentFooterModule', showProgressBar: true });
  };

  return (
    <div
      onClick={selectHandler}
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: NEW_COMMENT_FOOTER_SIZE }}
      className="
                  sticky 
                  left-0 
                  right-0 
                  bottom-0 
                  w-full 
                  mx-auto 
                  px-5 
                  flex 
                  items-center 
                  justify-between 
                  bg-impo_Neutral_Background 
                  shadow-[0px_-2px_5px_#00000022] 
                  dark:shadow-[0px_-2px_5px_#ffffff22] 
                  z-30
                "
    >
      <div className="w-fit px-3 py-1 rounded-full bg-impo_Primary_Primary select-none pointer-events-none">
        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_Background">
          ارسال
        </Dark_Typography>
      </div>

      <div className="flex items-center gap-4 select-none pointer-events-none">
        <Dark_Typography fontSize="Body_Small" className="text-impo_Surface_OutlineVariant">
          {placeholder}
        </Dark_Typography>

        <CustomImage src={avatar} width={36} className="rounded-full" />
      </div>
    </div>
  );
};

export default ShareExperienceNewCommentFooterModule;

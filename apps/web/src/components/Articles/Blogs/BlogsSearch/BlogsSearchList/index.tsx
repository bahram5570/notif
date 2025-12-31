import styles from './styles.module.css';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import useBreakPoint from '@hooks/useBreakPoint';

import { BlogsSearchListTypes } from './types';

const BlogsSearchList = ({ articlesSearchList }: BlogsSearchListTypes) => {
  const { breakPoint } = useBreakPoint();

  return (
    <div
      className={`
                  w-full 
                  h-fit 
                  max-h-[256px] 
                  md:max-h-[448px] 
                  overflow-x-hidden 
                  overflow-y-auto 
                  absolute 
                  top-[50px] 
                  md:top-[62px] 
                  left-0 
                  right-0 
                  rounded-xl
                  shadow-md
                  bg-impo_Neutral_Background
                  border-[1px]
                  border-impo_Surface_OutlineVariant
                  z-20
                  ${styles.modal}
                `}
    >
      {articlesSearchList.length === 0 && (
        <CustomTypography
          fontSize={breakPoint.laptop ? 'Body_Medium' : 'Title_Small'}
          className="p-5 !text-impo_Surface_InverseSurface"
        >
          مقاله‌ای پیدا نشد!
        </CustomTypography>
      )}

      {articlesSearchList.length > 0 &&
        articlesSearchList.map((item, index) => (
          <CustomLink href={`/${item.url}`} key={index}>
            <div
              className={`
                          w-full 
                          h-[64px] 
                          flex 
                          items-center 
                          px-5 
                          border-t-[1px] 
                          ${index === 0 ? 'border-t-impo_Transparent' : 'border-t-impo_Surface_OutlineVariant'}
                        `}
            >
              <CustomTypography
                className="!text-impo_Surface_InverseSurface"
                fontSize={breakPoint.laptop ? 'Body_Medium' : 'Title_Small'}
              >
                {item.title.trim()}
              </CustomTypography>
            </div>
          </CustomLink>
        ))}
    </div>
  );
};

export default BlogsSearchList;

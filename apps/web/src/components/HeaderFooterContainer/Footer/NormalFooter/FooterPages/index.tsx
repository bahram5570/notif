import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import useBreakPoint from '@hooks/useBreakPoint';

import { FOOTER_PAGES_LIST } from './constants';

const FooterPages = () => {
  const { breakPoint } = useBreakPoint();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:col-span-8 md:row-span-2">
      {FOOTER_PAGES_LIST.map((item, groupIndex) => (
        <div className="flex flex-col items-center md:items-start gap-3" key={groupIndex}>
          <CustomTypography
            fontSize={breakPoint.tablet ? 'Title_Medium' : 'Title_Small'}
            className={`${breakPoint.tablet ? '!text-impo_Surface_OnSurfaceVariant' : '!text-impo_Neutral_OnBackground'}`}
          >
            {item.groupName}
          </CustomTypography>

          <div className="w-full grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-2">
            {item.pages.map((page, pageIndex) => {
              const isTwoColumns =
                breakPoint.tablet && item.pages.length % 2 && page.smallScreenOrder === item.pages.length;

              return (
                <CustomLink
                  href={page.linkTo}
                  aria-label={page.linkTo}
                  key={`page-${pageIndex}`}
                  style={{
                    order: page.smallScreenOrder,
                    gridColumn: isTwoColumns ? 'span 2' : 'span 1',
                  }}
                  className={`
                              w-full 
                              h-[40px] 
                              md:h-fit 
                              rounded-full 
                              flex 
                              items-center 
                              justify-center 
                              md:justify-start 
                              ${breakPoint.tablet ? 'bg-impo_Surface_SurfaceVariant' : 'bg-impo_Transparent'}
                            `}
                >
                  <CustomTypography
                    fontSize={breakPoint.tablet ? 'Lable_Large' : 'Body_Small'}
                    className={`${breakPoint.tablet ? '!text-impo_Neutral_OnSurface' : '!text-impo_Surface_OnSurfaceVariant'}`}
                  >
                    {page.title}
                  </CustomTypography>
                </CustomLink>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterPages;

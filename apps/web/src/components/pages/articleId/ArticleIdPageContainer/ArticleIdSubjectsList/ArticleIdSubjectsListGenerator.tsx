import { MouseEvent } from 'react';

import CustomTypography from '@components/ui/CustomTypography';

import { ArticleIdSubjectsListGeneratorTypes } from './types';

const ArticleIdSubjectsListGenerator = ({
  isFirstElement,
  tagType,
  title,
  id,
}: ArticleIdSubjectsListGeneratorTypes) => {
  const selectHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    const header = document.querySelector('header');
    const headerHeight = header?.getBoundingClientRect().height ?? 0;

    const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  return (
    <div onClick={selectHandler} style={{ paddingTop: isFirstElement ? '16px' : '0px' }}>
      <CustomTypography
        fontSize={tagType === 'h2' ? 'Lable_Medium' : 'Body_Medium'}
        className={`
                    hover:opacity-80 
                    duration-200 
                    cursor-pointer 
                    ${tagType === 'h2' ? '!text-impo_Pink_700 !py-2' : '!text-impo_Pink_500 !pr-3 !pb-1'}
                  `}
      >
        {title}
      </CustomTypography>
    </div>
  );
};

export default ArticleIdSubjectsListGenerator;

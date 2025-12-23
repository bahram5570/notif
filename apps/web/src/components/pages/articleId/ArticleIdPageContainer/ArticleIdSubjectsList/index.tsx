'use client';

import { useRef } from 'react';

// import ArrowIcon from '@assets/icons/arrow2.svg';

import CustomTypography from '@components/ui/CustomTypography';

import ArticleIdSubjectsListGenerator from './ArticleIdSubjectsListGenerator';
import { ArticleIdSubjectsListTypes } from './types';

const ArticleIdSubjectsList = ({ articleSubjectList }: ArticleIdSubjectsListTypes) => {
  const ref = useRef<HTMLDivElement>(null);
  // const [isOpen, setIsOpen] = useState(true);
  // const [maxHeight, setMaxHeight] = useState(0);

  // useEffect(() => {
  //   const el = ref.current;

  //   setTimeout(() => {
  //     if (el) {
  //       setMaxHeight(el.scrollHeight);
  //     }
  //   }, 1000);
  // }, []);

  return (
    <div className="w-full h-fit rounded-2xl">
      <div className="w-full flex items-center justify-between border-[1px] border-x-transparent border-t-transparent border-b-impo_Surface_OutlineVariant pb-3">
        <CustomTypography fontSize="Title_Small" className="!text-impo_Neutral_OnBackground" tagType="h2">
          فهرست محتوا
        </CustomTypography>
      </div>

      <div ref={ref} className="w-full h-fit flex flex-col duration-500 overflow-hidden">
        {articleSubjectList.map((item, index) => (
          <ArticleIdSubjectsListGenerator {...item} isFirstElement={index === 0} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ArticleIdSubjectsList;

'use client';

import CrossIcon from '@assets/icons/cross.svg';
import MagnifierIcon from '@assets/icons/magnifier.svg';

import CustomInput from '@components/ui/CustomInput';
import Spinner from '@components/ui/Spinner';

import BlogsSearchList from './BlogsSearchList';
import useArticlesSearch from './__hooks__/useArticlesSearch';
import useArticlesSearchClickOutside from './__hooks__/useArticlesSearchClickOutside';

const BlogsSearch = () => {
  const { value, valueHandler, closeHandler, isLoading, articlesSearchList, isListOpen } = useArticlesSearch();

  const { modalRef } = useArticlesSearchClickOutside(closeHandler);

  return (
    <div className="relative w-full" ref={modalRef}>
      <div className="h-[40px] md:h-[52px] w-full px-4 rounded-xl flex items-center justify-between bg-impo_Neutral_Background">
        <div className="w-6 h-full flex items-center justify-center">
          {isLoading ? (
            <Spinner className="!border-impo_Surface_OutlineVariant" size={18} />
          ) : (
            <MagnifierIcon className="w-5 fill-impo_Red_300" />
          )}
        </div>

        <CustomInput
          value={value}
          onValue={valueHandler}
          fontSize="Title_Small"
          placeholder="جستجو در مقالات"
          className="pr-4 h-[40px] md:h-[52px] !text-impo_Neutral_OnBackground bg-impo_Neutral_Background"
        />

        <div className="p-2" onClick={closeHandler}>
          {value.trim() !== '' && <CrossIcon className="w-4 fill-impo_Surface_OnSurfaceVariant" />}
        </div>
      </div>

      {isListOpen && <BlogsSearchList articlesSearchList={articlesSearchList} />}
    </div>
  );
};

export default BlogsSearch;

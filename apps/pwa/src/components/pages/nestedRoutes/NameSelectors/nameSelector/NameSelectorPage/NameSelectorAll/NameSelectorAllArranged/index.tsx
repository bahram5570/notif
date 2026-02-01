import ArrowIcon from '@assets/icons/arrow.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import NameSelectorCard from '../../../NameSelectorCard';
import useNameSelectorData from '../../../__hooks__/useNameSelectorData';
import NameSelectorEmpty from '../../NameSelectorEmpty';
import useNameSelectorFetchAll from './__hooks__/useNameSelectorFetchAll';
import useNameSelectorStartingLetter from './__hooks__/useNameSelectorStartingLetter';

const NameSelectorAllArranged = () => {
  const { startingLetterInfo } = useNameSelectorStartingLetter();
  const { paginationHandler, isLoading } = useNameSelectorFetchAll();
  const { data, applyFilters, resetFiltersHandler } = useNameSelectorData();

  const allData = data?.all;

  return (
    <div
      key={applyFilters ? 'k1' : 'k2'}
      className="
                  border-[1px] 
                  border-impo_Neutral_Surface 
                  rounded-2xl 
                  px-3 
                  pb-6 
                  flex 
                  flex-col 
                  gap-3 
                  max-h-[calc(100dvh_-220px_-46px_-72px)] 
                  overflow-auto 
                  hideScrollbar
                "
    >
      {allData && (
        <>
          {allData.length === 0 && (
            <NameSelectorEmpty
              image="/assets/images/selectNameEmpty1.webp"
              txt1="با فیلترهایی که انتخاب کردی، نتیجه‌ای پیدا نشد."
              txt2="اگر فیلترها رو پاک یا عوض کنی، اسم‌های بیشتری می‌تونی ببینی"
              children={
                <div
                  onClick={() => resetFiltersHandler()}
                  className="w-fit h-[40px] flex items-center gap-2 px-5 rounded-full mt-3 bg-impo_Neutral_OnBackground"
                >
                  <ArrowIcon className="w-5 h-auto rotate-180 pt-1 stroke-impo_Primary_OnPrimary" />

                  <CustomTypography fontSize="Lable_Large" className="text-impo_Primary_OnPrimary">
                    حذف فیلتر ها
                  </CustomTypography>
                </div>
              }
            />
          )}

          {allData.length > 0 &&
            allData.map((cardData, index) => {
              const isLastIndex = index === data.all.length - 1;
              const startingLetter = startingLetterInfo.list[index]?.letter;

              return (
                <NameSelectorCard
                  key={index}
                  {...cardData}
                  isLoading={isLoading}
                  isLastIndex={isLastIndex}
                  startingLetter={startingLetter}
                  onPagination={paginationHandler}
                />
              );
            })}
        </>
      )}
    </div>
  );
};

export default NameSelectorAllArranged;

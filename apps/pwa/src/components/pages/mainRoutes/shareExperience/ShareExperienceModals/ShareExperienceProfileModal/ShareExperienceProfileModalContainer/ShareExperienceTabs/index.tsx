import Dark_Typography from '@components/ui/Dark_Typography';

import { ShareExperenceTabsPropsType } from './type';

const ShareExperienceTabs = ({ options, tab, tabHandler }: ShareExperenceTabsPropsType) => {
  return (
    <div className="flex flex-row-reverse mx-4 mt-8">
      {options.map((option) => (
        <div
          key={option.id}
          onClick={() => tabHandler(option.id)}
          className={`
                        pb-2 
                        flex 
                        justify-center 
                        w-1/2 
                        select-none
                        cursor-pointer 
                        border-b-[1px] 
                        ${option.id === tab ? 'border-impo_Neutral_OnBackground' : 'border-impo_Neutral_Surface'}
                    `}
        >
          {option.id === tab ? (
            <Dark_Typography fontSize="Lable_Medium" className="text-center text-impo_Neutral_OnBackground">
              {option.text}
            </Dark_Typography>
          ) : (
            <Dark_Typography fontSize="Body_Medium" className="text-center text-impo_Surface_Outline">
              {option.text}
            </Dark_Typography>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShareExperienceTabs;

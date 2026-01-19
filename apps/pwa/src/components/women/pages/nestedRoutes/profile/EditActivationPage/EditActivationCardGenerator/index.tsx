import { binarySeparator } from '@utils/numbers';

import Dark_Typography from '@components/ui/Dark_Typography';

import { EditActivationInitStrategyEnum } from '../__hooks__/useGetData/enum';
import EditActivationOptionGenerator from './EditActivationOptionGenerator';
import { EditActivationCardGeneratorProps } from './types';

const EditActivationCardGenerator = (props: EditActivationCardGeneratorProps) => {
  let selectedValuesList: number[] = [];

  switch (props.initStrategy) {
    case EditActivationInitStrategyEnum.Binary:
      selectedValuesList = binarySeparator(props.value);
      break;

    case EditActivationInitStrategyEnum.NoneBinary:
      selectedValuesList = [props.value];
      break;
  }

  return (
    <div className="w-full flex flex-col items-end px-4 pt-3 rounded-xl bg-impo_White dark:bg-impo_Neutral_Surface">
      <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground pb-2">
        {props.title}
      </Dark_Typography>

      {props.options.map((item, index) => {
        const isSelected = selectedValuesList.includes(item.value);

        return (
          <EditActivationOptionGenerator
            onClick={() => props.selectOptionHandler({ item, isSelected })}
            isFirstIndex={index === 0}
            isSelected={isSelected}
            title={item.title}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default EditActivationCardGenerator;

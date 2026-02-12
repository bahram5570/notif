import { useState } from 'react';

import { usePwaApi } from '../../../../../../hooks/usePwaApi';
import { WidgetsEnum } from '../../../../../../providers/WidgetActionsProvider';
import { NewBabycheckResponseTypes, UseNewBabyCheckDataPropsData } from './types';

const useNewBabyCheckData = ({ data }: UseNewBabyCheckDataPropsData) => {
  const [queryCount, setQueryCount] = useState(0);
  const [updatedData, setUpdatedData] = useState(data);

  const successHandler = (v: NewBabycheckResponseTypes) => {
    setQueryCount((state) => state + 1);

    if (!v?.wigets) return;
    const newOvulationWidget = v.wigets.find((widget) => widget.type === WidgetsEnum.BabyCheckKitCard);

    if (!newOvulationWidget) return;

    setUpdatedData(newOvulationWidget.data);
  };

  const { callApi: getNewWidgetData } = usePwaApi<NewBabycheckResponseTypes>({
    api: 'wigets',
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: [`wigets_fetch_${queryCount}`],
  });

  const onAdd = () => {
    getNewWidgetData();
  };

  const onDelete = (index: number) => {
    const result = { ...updatedData };
    result.items = result.items.filter((_, i) => i !== index);
    setUpdatedData(result);
  };

  return { onAdd, onDelete, updatedData };
};

export default useNewBabyCheckData;

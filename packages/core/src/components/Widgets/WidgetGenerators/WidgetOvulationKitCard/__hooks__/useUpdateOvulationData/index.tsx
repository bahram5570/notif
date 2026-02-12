import { useState } from 'react';

import { usePwaApi } from '../../../../../../hooks/usePwaApi';
import { WidgetsEnum } from '../../../../../../providers/WidgetActionsProvider';
// import { CycleResponseTypes } from '@components/pages/mainRoutes/cycle/types';
// import { usePwaApi } from '@repo/core/hooks/usePwaApi';
// import { WidgetsEnum } from '@repo/core/providers/WidgetActionsProvider';

import { UpdateOvulationResponseTypes, UseUpdateOvulationDataData } from './types';

const useUpdateOvulationData = ({ data }: UseUpdateOvulationDataData) => {
  const [queryCount, setQueryCount] = useState(0);
  const [updatedData, setUpdatedData] = useState(data);

  const successHandler = (v: UpdateOvulationResponseTypes) => {
    setQueryCount((state) => state + 1);

    if (!v?.wigets) return;
    const newOvulationWidget = v.wigets.find((widget) => widget.type === WidgetsEnum.OvulationKitCard);

    if (!newOvulationWidget) return;

    setUpdatedData(newOvulationWidget.data);
  };

  const { callApi: getNewWidgetData } = usePwaApi<UpdateOvulationResponseTypes>({
    api: 'wigets',
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: [`wigets_fetch_${queryCount}`],
  });

  const onAdd = () => {
    getNewWidgetData();
  };

  const onDelete = () => {
    const result = { ...updatedData };
    result.count = 0;
    setUpdatedData(result);
  };

  return { onAdd, onDelete, updatedData };
};

export default useUpdateOvulationData;

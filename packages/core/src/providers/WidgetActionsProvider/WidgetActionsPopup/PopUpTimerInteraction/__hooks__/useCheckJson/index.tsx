import { useEffect, useState } from 'react';

import { UseCheckJsonPropsType } from './type';

const useCheckJson = ({ icon }: UseCheckJsonPropsType) => {
  const [jsonData, setJsonData] = useState<any>(null);
  const isJson = icon?.toLowerCase().endsWith('.json');

  // useEffect(() => {
  //   if (isJson) {
  //     fetch(icon)
  //       .then((res) => res.json())
  //       .then((data) => setJsonData(data))
  //       .catch(() => setJsonData(null));
  //   }
  // }, [icon, isJson]);

  return { jsonData, isJson };
};

export default useCheckJson;

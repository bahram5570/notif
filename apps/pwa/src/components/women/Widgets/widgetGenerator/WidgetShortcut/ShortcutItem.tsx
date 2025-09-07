import { useEffect, useState } from 'react';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useAnalytics from '@hooks/useAnalytics';
import useWidgetActions from '@hooks/useWidgetActions';
import { LottieJson } from '@lib/LottieJson';

import { ShortcutItemPropsType } from './type';

const ShortcutItem = (props: ShortcutItemPropsType) => {
  const { actionHandler } = useWidgetActions();
  const { callEvent } = useAnalytics();
  const [jsonData, setJsonData] = useState<any>(null);

  const onClick = () => {
    callEvent(`${props.semanticTitle}`);
    actionHandler(props.action);
  };

  const isJson = props.icon?.toLowerCase().endsWith('.json');

  useEffect(() => {
    if (isJson) {
      fetch(props.icon)
        .then((res) => res.json())
        .then((data) => setJsonData(data))
        .catch(() => setJsonData(null));
    }
  }, [props.icon, isJson]);

  return (
    <div className="flex flex-col justify-center  items-center gap-2 pointer-events-auto" onClick={onClick}>
      {isJson ? (
        jsonData && <LottieJson animationData={jsonData} loop={true} />
      ) : (
        <CustomImage src={props.icon} width={72} height={72} />
      )}
      <Typography scale="Lable" size="Medium" className="!w-[150px]" textAlign="center">
        {props.title}
      </Typography>
    </div>
  );
};

export default ShortcutItem;

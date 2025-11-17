import { useEffect, useMemo, useState } from 'react';

import { textShorter } from '@utils/scripts';

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

  const margin = useMemo(() => {
    switch (props.shorcutItemChild) {
      case 'first':
        return '0 0 0 auto';
      case 'last':
        return '0 auto 0 0';
      default:
        return '0 auto';
    }
  }, [props.shorcutItemChild]);

  return (
    <div
      className="flex flex-col justify-start items-center gap-2 pointer-events-auto"
      style={{ margin }}
      onClick={onClick}
    >
      <div className="w-12 h-12">
        {isJson ? jsonData && <LottieJson animationData={jsonData} /> : <CustomImage src={props.icon} />}
      </div>

      <Typography scale="Lable" size="SmallProminet" textAlign="center">
        {isJson ? textShorter(props.title, 11) : props.title}
      </Typography>
    </div>
  );
};

export default ShortcutItem;

import { useEffect, useMemo, useState } from 'react';

import { textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';
import Typography from '@components/ui/Typography';
import useAnalytics from '@hooks/useAnalytics';
import useWidgetActions from '@hooks/useWidgetActions';
import { LottieJson } from '@lib/LottieJson';

import { ShortcutItemGeneratorProps } from './types';

const ShortcutItemGenerator = (props: ShortcutItemGeneratorProps) => {
  const { callEvent } = useAnalytics();
  const { actionHandler } = useWidgetActions();
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
      onClick={onClick}
      style={{ margin }}
      className="flex flex-col justify-start items-center gap-2 pointer-events-auto"
    >
      <div className="w-12 h-12">
        {isJson ? jsonData && <LottieJson animationData={jsonData} /> : <CustomImage src={props.icon} />}
      </div>

      <Dark_Typography fontSize="Lable_SmallProminet" className="text-center text-impo_Neutral_OnBackground">
        {props.title}
      </Dark_Typography>
    </div>
  );
};

export default ShortcutItemGenerator;

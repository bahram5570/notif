import { useEffect, useMemo, useState } from 'react';

import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useWidgetActions from '@hooks/useWidgetActions';
import { LottieJson } from '@lib/LottieJson';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';

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

      <CustomTypography fontSize="Lable_SmallProminet" className="text-center text-impo_Neutral_OnBackground">
        {props.title}
      </CustomTypography>
    </div>
  );
};

export default ShortcutItemGenerator;

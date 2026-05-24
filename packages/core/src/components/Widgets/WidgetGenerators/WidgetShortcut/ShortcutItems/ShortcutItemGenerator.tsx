import { useEffect, useMemo, useState } from 'react';

import { useAnalytics } from '../../../../../hooks/useAnalytics';
import { useWidgetActions } from '../../../../../hooks/useWidgetActions';
import { LottieJson } from '../../../../../lib/LottieJson';
import { CustomImage_NEW } from '../../../../ui/CustomImage_NEW';
import { CustomTypography } from '../../../../ui/CustomTypography';
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
      <div className="relative w-12 aspect-square">
        {isJson ? (
          jsonData && <LottieJson animationData={jsonData} />
        ) : (
          <CustomImage_NEW src={props.icon} fill={true} className="object-cover" />
        )}
      </div>

      <CustomTypography fontSize="Lable_SmallProminet" className="text-center text-impo_Neutral_OnBackground">
        {props.title}
      </CustomTypography>
    </div>
  );
};

export default ShortcutItemGenerator;

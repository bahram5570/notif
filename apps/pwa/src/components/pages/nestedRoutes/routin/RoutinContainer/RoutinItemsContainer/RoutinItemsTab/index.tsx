import RoutinCta from '@components/__routin__/RoutinCta';

import RoutinDiets from '../RoutinDiets';
import { RoutinItemsTabPropsType } from './type';

const RoutinItemsTab = (props: RoutinItemsTabPropsType) => {
  return (
    <>
      <RoutinDiets {...props} />
      {props.cta.ctaBtnLabel && props.cta.ctaDescription && <RoutinCta cta={props.cta} />}
    </>
  );
};

export default RoutinItemsTab;

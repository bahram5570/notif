import RoutinCta from '@components/__routin__/RoutinCta';

import RoutinDiets from '../RoutinDiets';
import { RoutinItemsTabPropsType } from './type';

const RoutinItemsTab = ({ items, name, cta }: RoutinItemsTabPropsType) => {
  return (
    <>
      <RoutinDiets name={name} items={items} />
      {cta.ctaBtnLabel && cta.ctaDescription && <RoutinCta cta={cta} />}
    </>
  );
};

export default RoutinItemsTab;

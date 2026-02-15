export type WeightHeightModuleProps = {
  testId?: string;
  type: 'weight' | 'height';
  valueHandler: (v: number) => void;
};

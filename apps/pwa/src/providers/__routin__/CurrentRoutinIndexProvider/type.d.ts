export type RoutinState = {
  currentIndex?: number;
  typeMessage?: 'checkbox' | 'lockOnlock';
  showToast: boolean;
};

export type CurrentRoutinIndexContextPropsType = {
  routinState: RoutinState;
  updateRoutinState: (nameOrState: keyof RoutinState | Partial<RoutinState>, value?: number | boolean) => void;
};

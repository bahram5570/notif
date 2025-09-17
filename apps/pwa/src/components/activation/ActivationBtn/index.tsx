import { useEffect } from 'react';

import Button from '@components/ui/Button';

import { ActivationBtnProps } from './types';

const ActivationBtn = ({ children, isLoading, showBtn = true, navigationLoadingId, onClick }: ActivationBtnProps) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && showBtn) {
        e.preventDefault();

        onClick();
        (document.activeElement as HTMLElement)?.blur();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClick, showBtn]);

  return (
    <div className={`w-full flex justify-center duration-200 ${showBtn ? 'translate-y-0' : 'translate-y-[50vh]'}`}>
      <Button
        size="medium"
        variant="fill"
        color="primary"
        onClick={onClick}
        isLoading={isLoading}
        className="!w-fit !min-w-[204px]"
        navigationLoadingId={navigationLoadingId}
      >
        {children}
      </Button>
    </div>
  );
};

export default ActivationBtn;

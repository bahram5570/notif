import { useEffect, useRef } from 'react';

import Button from '@components/ui/Button';

import { ActivationBtnProps } from './types';

const ActivationBtn = (props: ActivationBtnProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // # Call onClick function when Enter/Go is pressed, then remove input focus

      if (e.key === 'Enter' && props.showBtn) {
        e.preventDefault();
        const btnElement = btnRef.current;

        if (btnElement) {
          btnElement.click();
        }

        (document.activeElement as HTMLElement)?.blur();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [props.onClick]);

  return (
    <div
      className={`w-full flex justify-center duration-200 ${props.showBtn ? 'translate-y-0' : 'translate-y-[50vh]'}`}
    >
      <Button
        ref={btnRef}
        size="medium"
        variant="fill"
        color="primary"
        onClick={props.onClick}
        isLoading={props.isLoading}
        navigationLoadingId={props.navigationLoadingId}
        style={{ minWidth: 'fit-content', width: props.width || '204px' }}
      >
        {props.children}
      </Button>
    </div>
  );
};

export default ActivationBtn;

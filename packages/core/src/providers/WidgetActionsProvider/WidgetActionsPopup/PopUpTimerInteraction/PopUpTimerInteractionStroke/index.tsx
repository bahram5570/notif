import { PopUpTimerInteractionStrokePropsType } from './type';

const PopUpTimerInteractionStroke = ({ progress, sizes }: PopUpTimerInteractionStrokePropsType) => {
  const rx = 32;
  const width = sizes.width;
  const height = sizes.height;

  const perimeter = 2 * (width + height);

  return (
    <svg
      fill="none"
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={1}
        y={1}
        rx={rx}
        strokeWidth={2}
        width={width - 2}
        height={height - 2}
        stroke={'#E640FF'}
        strokeDasharray={perimeter}
        strokeDashoffset={perimeter * (1 - progress / 100)}
        style={{ transition: 'stroke-dashoffset 0.05s linear' }}
      />
    </svg>
  );
};

export default PopUpTimerInteractionStroke;

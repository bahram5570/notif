import { HEIGHT, WIDTH } from '../constants';
import { PopUpTimerInteractionStrokePropsType } from './type';

const PopUpTimerInteractionStroke = ({ progress }: PopUpTimerInteractionStrokePropsType) => {
  const rx = 32;
  const width = WIDTH;
  const height = HEIGHT;

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
        width={width - 2}
        height={height - 8}
        rx={rx}
        stroke={'#A340FF'}
        strokeWidth={2}
        strokeDasharray={perimeter}
        strokeDashoffset={perimeter * (1 - progress / 100)}
        style={{ transition: 'stroke-dashoffset 0.05s linear' }}
      />
    </svg>
  );
};

export default PopUpTimerInteractionStroke;

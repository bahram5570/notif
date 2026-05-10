import { CustomImage } from '../../CustomImage';
import { OnboardingImageSliderPropsType } from './type';

const OnboardingImageSlider = ({ list, currentIndex }: OnboardingImageSliderPropsType) => {
  return (
    <div className="overflow-y-auto overflow-x-hidden flex justify-center">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          width: `${list.length * 80}%`,
          transform: `translateX(${currentIndex * 80}%)`,
        }}
      >
        {list.map((item, index) => {
          return (
            <div key={index} className=" mx-3 flex-shrink-0  bg-white rounded-3xl " style={{ width: '80%' }}>
              <CustomImage src={item.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OnboardingImageSlider;

import CustomImage from '@components/ui/CustomImage';

import { SlideItemSliderImagePropsType } from './type';

const SlideItemSliderImage = ({ currentIndex, slides }: SlideItemSliderImagePropsType) => {
  return (
    <div className="overflow-y-auto overflow-x-hidden flex justify-center w-full">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          width: `${slides.length * 80}%`,
          transform: `translateX(${currentIndex * 82}%)`,
        }}
      >
        {slides.map((item, index) => {
          return (
            <div
              key={index}
              className=" mx-3 flex-shrink-0  bg-white rounded-3xl "
              style={{
                width: '80%',
              }}
            >
              <CustomImage src={item.media} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlideItemSliderImage;

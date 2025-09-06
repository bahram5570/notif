import icon3 from '@assets/lottie/moodTracker/anguished_face.json';
import icon1 from '@assets/lottie/moodTracker/disappointed_face.json';
import icon2 from '@assets/lottie/moodTracker/grinning_face_big_eyes.json';
import icon7 from '@assets/lottie/moodTracker/hot_face.json';
import icon6 from '@assets/lottie/moodTracker/neutral_face.json';
import icon4 from '@assets/lottie/moodTracker/pouting_face.json';
import icon8 from '@assets/lottie/moodTracker/smiling_face_hearts.json';
import icon5 from '@assets/lottie/moodTracker/smiling_face_open_hands.json';
import icon9 from '@assets/lottie/moodTracker/winking_face_tongue.json';

import { MoodTrackerItemTypes } from '@providers/WidgetActionsProvider/widgetCards';

export const MOOD_TRACKER_LIST: MoodTrackerItemTypes[] = [
  { type: 1, label: 'غمگین‌ترینم', icon: icon1, isSelected: false },
  { type: 2, label: 'خیلی خوشحالم', icon: icon2, isSelected: false },
  { type: 3, label: 'حیرانم سیلانم', icon: icon3, isSelected: false },
  { type: 4, label: 'اعصاب ندارم', icon: icon4, isSelected: false },
  { type: 5, label: 'مهربون و خوش اخلاق', icon: icon5, isSelected: false },
  { type: 6, label: 'بی‌تفاوت‌ترینم', icon: icon6, isSelected: false },
  { type: 7, label: 'خسته‌ام خسته', icon: icon7, isSelected: false },
  { type: 8, label: 'رمانتیک و پروانه‌ای', icon: icon8, isSelected: false },
  { type: 9, label: 'شیطونم و پرانرژی', icon: icon9, isSelected: false },
];

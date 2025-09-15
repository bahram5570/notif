'use client';

import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import CommentItem from './CommentItem';
import { Comments } from './constants';

const CommentList = () => {
  return (
    <Swiper
      loop={true}
      autoplay={true}
      slidesPerView={1}
      className="!pb-10"
      centeredSlides={true}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
    >
      {Comments.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <CommentItem
              userName={item.userName}
              userAvatar={item.userAvatar}
              userText={item.userText}
              userRate={item.userRate}
              drAvatar={item.drAvatar}
              drBio={item.drBio}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CommentList;

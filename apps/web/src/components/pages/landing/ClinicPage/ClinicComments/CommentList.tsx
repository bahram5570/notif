'use client'

import 'swiper/css';
import 'swiper/css/pagination';
import CommentItem from './CommentItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Comments } from './constants';

const CommentList = () => {
    return (
        <Swiper
            pagination={{ clickable: true }}
            loop={true}
            autoplay={true}
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            centeredSlides={true}
        >
            {
                Comments.map((item, i) => {
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

                    )
                })
            }
        </Swiper>

    )
}

export default CommentList
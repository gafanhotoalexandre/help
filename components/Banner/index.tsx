import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';

import styles from './Banner.module.css';

export function Banner() {
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
}

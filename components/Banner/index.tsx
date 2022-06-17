import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Swiper styles
import 'swiper/css';

import styles from './Banner.module.css';

export function Banner() {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
        className={styles.swiper}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide
          className={styles.slide}
        >
          <img src={'/tmp/banner1.png'} alt="" />
        </SwiperSlide>

        <SwiperSlide
          className={styles.slide}
        >
          <img src={'/tmp/banner2.png'} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

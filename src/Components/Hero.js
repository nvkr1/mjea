import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "./../assets/img/cover.png";
import { EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Pagination } from "swiper";

const Hero = () => {
  return (
    <section className='agency-hero-wrapper hero-wrapper fix'>
      <Swiper
        className='agency-slider-active'
        pagination={true}
        modules={[Pagination, EffectFade]}
        effect={"fade"}
        loop>
        <SwiperSlide>
          <div
            className='single-agency-slide bg-cover'
            style={{ backgroundImage: `url(${slide1})` }}>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-9 col-md-10 col-12'>
                  <div className='hero-contents'>
                    <h1 className='text-white'>
                      Монголын Биржүүдийн Нэгдсэн Холбоо
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;

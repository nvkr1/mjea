import React from "react";
import CountUp from "react-countup";
import bannerImg from "./../assets/img/bg.png";

const FunFact = () => {
  return (
    <section
      className='fun-fact-banner bg-overlay text-white bg-cover'
      style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className='container'>
        <h4 className='mt-20 align-items-center justify-content-center d-flex'>
          2023 оны I улирал
        </h4>
        <div className='align-items-center justify-content-center d-flex row text-center text-md-start'>
          <div className='col-lg-2 col-md-3 mt-30 col-6'>
            <div className='align-items-center single-fun-fact'>
              <h2>
                <CountUp end={12} duration={4}></CountUp>
              </h2>
              <h3>Бүртгэлтэй ВХҮҮ</h3>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 mt-30 col-6'>
            <div className='single-fun-fact'>
              <h2>
                ₮<CountUp end={384.3} duration={5}></CountUp>тэрбум
              </h2>
              <h3> Зах зээлийн үнэлгээ</h3>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 mt-30 col-6'>
            <div className='single-fun-fact'>
              <h2>
                ₮<CountUp end={411.0} duration={6}></CountUp>сая
              </h2>
              <h3>Өдрийн дундаж арилжаа</h3>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 mt-30 col-6'>
            <div className='single-fun-fact'>
              <h2>
                <CountUp end={832764} duration={7}></CountUp>
              </h2>

              <h3>Нийт харилцагчийн тоо</h3>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 mt-30 col-6'>
            <div className='align-items-center single-fun-fact'>
              <h2>
                <CountUp end={211} duration={8}></CountUp>
              </h2>
              <h3>Листлэгдсэн Койн, Токен</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;

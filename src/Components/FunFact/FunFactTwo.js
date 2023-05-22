import React from "react";
import CountUp from "react-countup";
import bannerImg from "../../assets/img/bg.png";

const FunFactTwo = () => {
  return (
    <section
      className='fun-fact-banner bg-overlay text-white bg-cover'
      style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className='container'>
        <div className='row text-center text-md-start'>
          <div className='col-lg-3 col-md-3 mt-30 col-12'>
            <div className='single-fun-fact'>
              <h2>
                ₮<CountUp end={384.3} duration={3}></CountUp>тэрбум
              </h2>
              <h3> Зах зээлийн үнэлгээ</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-3 mt-30 col-6'>
            <div className='single-fun-fact'>
              <h2>
                ₮<CountUp end={411.0} duration={3}></CountUp>сая
              </h2>
              <h3>Өдрийн дундаж арилжаа</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-3 mt-30 col-6'>
            <div className='single-fun-fact'>
              <h2>
                <CountUp end={832764} duration={3}></CountUp>
              </h2>

              <h3>Нийт харилцагчийн тоо</h3>
            </div>
          </div>
          <div className='col-lg-3 col-md-3 mt-30 col-6'>
            <div className='single-fun-fact'>
              <h2>
                <CountUp end={211} duration={3}></CountUp>
              </h2>
              <h3> Листлэгдсэн Койн, Токен </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactTwo;

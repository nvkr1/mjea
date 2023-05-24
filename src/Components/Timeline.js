import React from "react";
import icon1 from "../assets/img/Icon1.jpg";
import icon2 from "../assets/img/Icon2.jpg";

const Timeline = () => {
  return (
    <section className='company-timeline-wrapper mt-80 mb-50'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='block-contents text-center'>
              <div className=''>
                <h3>ТҮҮХЭН ЗАМНАЛ</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-md-6 offset-lg-1 pe-lg-0'>
            <div className='timeline-content text-lg-end'>
              <div className='single-timeline-box'>
                <span>2021.12.17</span>

                <p>
                  Виртуал хөрөнгийн үйлчилгээ үзүүлэгчийн тухай хууль (ВХҮҮТХ)
                  батлагдав.
                </p>
              </div>
              <div className='single-timeline-box'>
                <span>2022.12.27</span>
                <p>
                  СЗХ болон МБНХ хамтран ажиллах Харилцан ойлголцлын санамж
                  бичиг байгуулав.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-2 d-none mt-40 d-lg-block'>
            <div className='time-line-icon'>
              <div className='single-icon'>
                <img src={icon1} alt='' />
              </div>
              <div className='single-icon'>
                <img src={icon2} alt='' />
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 ps-lg-0'>
            <div className='timeline-content'>
              <div className='single-timeline-box'>
                <span>2022.01.10 </span>
                <p>
                  Монголын биржүүдийн нэгдсэн холбоо (МБНХ) үүсгэн байгуулагдав.
                </p>
              </div>
              <div className='single-timeline-box'>
                <span>2022-2023</span>
                <p>
                  ВХҮҮТХ-ийг дагасан 9 журам, 1 асуулгыг Санхүүгийн Зохицуулах
                  Хороо (СЗХ)-той хамтран, МБНХ дотооддоо 6 хууль, эрх зүйн
                  баримт бичиг боловсруулан батлан, мөрдөж эхлэв.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

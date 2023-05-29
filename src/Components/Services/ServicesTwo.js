import React from "react";
import servicesTwoData from "./servicesTwoData";
import img1 from "../../assets/img/cyber2.png";
const ServicesTwo = () => {
  return (
    <section className='our-service-wrapper section-padding bg-gray'>
      <div id='structure' className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='block-contents text-center'>
              <div className='section-title'>
                <h2>БҮТЭЦ БҮРЭЛДЭХҮҮН</h2>
              </div>
              <h3 className='mt-5'>Мэргэжлийн хороод</h3>
              <p>
                Мэргэжлийн хороо нь Холбоо болон гишүүн байгууллагын <br />
                мэргэжилтнүүдээс бүрдсэн зөвлөл бөгөөд Холбооны үйл ажиллагаанд
                дэмжлэг
                <br /> үзүүлэх, зөвлөмж-дүгнэлт гаргах байдлаар хамтран
                ажилладаг юм.
              </p>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-xl-6 col-md-6 col-12'>
            <div className='single-service-card'>
              <div className='content'>
                <div className='icon-title'>
                  <div className='icon'>
                    <img src={img1} width={150} height={100} loading='lazy' />
                  </div>
                  <div className='service-title'>
                    <h4>
                      <p className='cursor-default'>
                        Мэдээллийн технологи & Мэдээллийн аюулгүй байдлын хороо
                      </p>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {servicesTwoData.map((data) => (
            <div className='col-xl-6 col-md-6 col-12' key={data.id}>
              <div className='single-service-card'>
                <div className='content'>
                  <div className='icon-title'>
                    <div className='icon'>
                      <img
                        src={data.img}
                        width={100}
                        height={100}
                        loading='lazy'
                      />
                    </div>
                    <div className='service-title'>
                      <h4>
                        <p className='cursor-default'>{data.title}</p>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTwo;

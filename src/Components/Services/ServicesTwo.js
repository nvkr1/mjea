import React from "react";
import servicesTwoData from "./servicesTwoData";
import img1 from "../../assets/img/cyber2.png";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
const ServicesTwo = () => {
  const currentLanguage = i18n.language;
  const { t } = useTranslation();

  return (
    <section className='our-service-wrapper section-padding bg-gray'>
      <div id='structure' className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='block-contents text-center'>
              <div className='section-title'>
                <h2>
                  {currentLanguage == "mn" ? (
                    <>БҮТЭЦ БҮРЭЛДЭХҮҮН</>
                  ) : (
                    <>STRUCTURE </>
                  )}
                </h2>
              </div>
              <h3 className='mt-5'>
                {currentLanguage == "mn" ? (
                  <>Мэргэжлийн хороод</>
                ) : (
                  <>PROFESSIONAL COMMITTEES</>
                )}
              </h3>
              <p>
                {currentLanguage == "mn" ? (
                  <>
                    Мэргэжлийн хороо нь Холбоо болон гишүүн байгууллагын <br />
                    мэргэжилтнүүдээс бүрдсэн зөвлөл бөгөөд Холбооны үйл
                    ажиллагаанд дэмжлэг
                    <br /> үзүүлэх, зөвлөмж-дүгнэлт гаргах байдлаар хамтран
                    ажилладаг юм.
                  </>
                ) : (
                  <>
                    The Professional Committee is a council consisting of
                    experts from the Association and its member organizations
                    and support for the activities of the association, works as
                    a partner to make recommendations and conclusions.
                  </>
                )}
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
                        {currentLanguage == "mn" ? (
                          <>
                            Мэдээллийн технологи & Мэдээллийн аюулгүй байдлын
                            хороо
                          </>
                        ) : (
                          <>INFORMATION TECHNOLOGY & INFORMATION SECURITY</>
                        )}
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
                        {currentLanguage == "mn" ? (
                          <p className='cursor-default'>{data.title}</p>
                        ) : (
                          <>
                            {" "}
                            <p className='cursor-default'>{data.title1}</p>
                          </>
                        )}
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

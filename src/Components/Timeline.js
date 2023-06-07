import React from "react";
import icon1 from "../assets/img/Icon1.jpg";
import icon2 from "../assets/img/Icon2.jpg";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";

const Timeline = () => {
  const currentLanguage = i18n.language;
  const { t } = useTranslation();
  return (
    <section className='company-timeline-wrapper mt-80 mb-50'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='block-contents text-center'>
              <div className=''>
                <h3>
                  {currentLanguage == "mn" ? <>ТҮҮХЭН ЗАМНАЛ</> : <>TIMELINE</>}
                </h3>
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
                  {currentLanguage == "mn" ? (
                    <>
                      Виртуал хөрөнгийн үйлчилгээ үзүүлэгчийн тухай хууль
                      (ВХҮҮТХ) батлагдав.
                    </>
                  ) : (
                    <>
                      The Law on Virtual Asset Service Providers (LVASP) was
                      passed.
                    </>
                  )}
                </p>
              </div>
              <div className='single-timeline-box'>
                <span>2022.12.27</span>
                <p>
                  {currentLanguage == "mn" ? (
                    <>
                      СЗХ болон МБНХ хамтран ажиллах Харилцан ойлголцлын санамж
                      бичиг байгуулав.
                    </>
                  ) : (
                    <>
                      The Memorandum of Understanding was established between
                      the Financial Regulatory Commission and the Mongolian
                      Joint Association of Exchanges.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-2 d-none mt-40 d-lg-block'>
            <div className='time-line-icon'>
              <div className='single-icon'>
                <img src={icon1} alt='' loading='lazy' />
              </div>
              <div className='single-icon'>
                <img src={icon2} alt='' loading='lazy' />
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 ps-lg-0'>
            <div className='timeline-content'>
              <div className='single-timeline-box'>
                <span>2022.01.10 </span>
                <p>
                  {currentLanguage == "mn" ? (
                    <>
                      Монголын биржүүдийн нэгдсэн холбоо (МБНХ) үүсгэн
                      байгуулагдав.
                    </>
                  ) : (
                    <>
                      Mongolian Joint Association of Exchanges (MJAE) was
                      founded. (Established)
                    </>
                  )}
                </p>
              </div>
              <div className='single-timeline-box'>
                <span>2022-2023</span>
                <p>
                  {currentLanguage == "mn" ? (
                    <>
                      ВХҮҮТХ-ийг дагасан 9 журам, 1 асуулгыг Санхүүгийн
                      Зохицуулах Хороо (СЗХ)-той хамтран, МБНХ дотооддоо 6
                      хууль, эрх зүйн баримт бичиг боловсруулан батлан, мөрдөж
                      эхлэв.
                    </>
                  ) : (
                    <>
                      In cooperation with the Financial Regulatory Commission
                      (FRC), 9 regulations and 1 reference under the Law on
                      Virtual Asset Service Providers, MJAE developed and
                      approved 6 legal documents internally.
                    </>
                  )}
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

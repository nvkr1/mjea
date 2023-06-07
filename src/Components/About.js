import imgBlock1 from "./../assets/img/about-us.png";
import { useState } from "react";
import "react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";

const About = ({ pt }) => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

  const currentLanguage = i18n.language;

  return (
    <>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='EZ9DrY43wtw'
        onClose={() => setOpen(false)}
      />
      <section
        className={pt ? "about-section mt-100" : "about-section mt-100 pt-10"}>
        <div id='about' className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-5 col-12'>
              <div className='img-block-pop-video'>
                <img src={imgBlock1} alt='' loading='lazy' />
              </div>
            </div>
            <div className='col-xl-6 col-lg-7 col-md-10 col-12'>
              <div className='block-contents'>
                <div className='section-title-4'>
                  <h2>
                    {currentLanguage == "mn" ? <>БИДНИЙ ТУХАЙ</> : <>ABOUT</>}
                  </h2>
                  <p>
                    {currentLanguage == "mn" ? (
                      <>
                        Санхүүгийн Зохицуулах Хороо (СЗХ)-ноос албан ёсоор
                        зөвшөөрөл авч Монгол Улсад үйл ажиллагаа явуулдаг
                        Виртуал Хөрөнгийн Үйлчилгээ Үзүүлэгч (ВХҮҮ)-ийн
                        гишүүнчлэлтэй мэргэжлийн холбоо бөгөөд гишүүддээ
                        үйлчилдэг, хараат бус - бие даасан, ашгийн бус төрийн
                        бус байгууллага юм.
                      </>
                    ) : (
                      <>
                        It is a professional association with membership of
                        Virtual Assets Service Providers (VASPs) operating in
                        Mongolia with official permission from the Financial
                        Regulatory Commission (FRC). It is an independent,
                        non-profit non-governmental organization that serves its
                        members.
                      </>
                    )}
                  </p>
                </div>
              </div>
              <div className='tab-content-block'>
                <ul
                  className='nav nav-pills mb-3'
                  id='pills-tab'
                  role='tablist'>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link active'
                      id='pills-technology-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#pills-technology'
                      type='button'
                      role='tab'
                      aria-controls='pills-technology'
                      aria-selected='true'>
                      {currentLanguage == "mn" ? <>Алсын хараа</> : <>Vision</>}
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='pills-materials-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#pills-materials'
                      type='button'
                      role='tab'
                      aria-controls='pills-materials'
                      aria-selected='false'>
                      {currentLanguage == "mn" ? (
                        <>Эрхэм зорилго</>
                      ) : (
                        <>Mission</>
                      )}
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      id='pills-approved-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#pills-approved'
                      type='button'
                      role='tab'
                      aria-controls='pills-approved'
                      aria-selected='false'>
                      {currentLanguage == "mn" ? <>Уриа үг</> : <>Slogan</>}
                    </button>
                  </li>
                </ul>
                <div className='tab-content' id='pills-tabContent'>
                  <div
                    className='tab-pane fade show active container'
                    id='pills-technology'
                    role='tabpanel'
                    aria-labelledby='pills-technology-tab'>
                    <div className='row d-flex justify-content-center'>
                      <div className='checked-features-list'>
                        <ul>
                          <li>
                            {currentLanguage == "mn" ? (
                              <>
                                Төвлөрсөн бус санхүүгийн шинэ эринг бүтээлцэнэ
                              </>
                            ) : (
                              <>Create a new era of decentralized finance</>
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade container'
                    id='pills-materials'
                    role='tabpanel'
                    aria-labelledby='pills-materials-tab'>
                    <div className='row d-flex justify-content-center'>
                      <div className='checked-features-list'>
                        <ul>
                          <li className=''>
                            {currentLanguage == "mn" ? (
                              <>
                                Найдвартай, хүртээмжтэй, нээлттэй дижитал
                                ирээдүйтэй хөл нийлүүлэн алхах боломжийг
                                бүрдүүлж, крипто зах зээлийн хөгжилд хувь нэмэр
                                оруулах
                              </>
                            ) : (
                              <>
                                Creating opportunities to keep pace with a
                                reliable accessible and open digital future,
                                Contribute to the development of the crypto
                                market
                              </>
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade container'
                    id='pills-approved'
                    role='tabpanel'
                    aria-labelledby='pills-approved-tab'>
                    <div className='row d-flex justify-content-center'>
                      <div className='checked-features-list'>
                        <ul>
                          {currentLanguage == "mn" ? (
                            <li className=''>
                              <p className=''>Дараагийн хувьсгал</p>
                              <p>Дараагийн ирээдүй</p>
                            </li>
                          ) : (
                            <li className=''>
                              <p className=''>The next revolution</p>
                              <p>The next future</p>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

import videoBg from "../../assets/img/video_bg_1.jpg";
import imgBlock1 from "../../assets/img/home1/img-block1.jpg";
import tabImg1 from "../../assets/img/futurist.png";
import tabImg2 from "../../assets/img/dart-board.png";
import tabImg3 from "../../assets/img/megaphone.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";

const AboutOne = ({ pt }) => {
  const [isOpen, setOpen] = useState(false);

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
        className={
          pt
            ? "about-section section-padding"
            : "about-section section-padding pt-10"
        }>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-5 col-12'>
              <div className='img-block-pop-video'>
                <img src={imgBlock1} alt='busico' />
                {/* <div
                  className='popup-video-block d-flex justify-content-center align-items-center bg-cover'
                  style={{ backgroundImage: `url(${videoBg})` }}>
                  <div className='video-play-btn'>
                    <span
                      className='popup-video'
                      onClick={() => setOpen(true)}
                      style={{ cursor: "pointer" }}>
                      <i className='fas fa-play'></i>
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
            <div className='col-xl-6 col-lg-7 col-md-10 col-12'>
              <div className='block-contents'>
                <div className='section-title-4'>
                  <h2>БИДНИЙ ТУХАЙ</h2>
                  <p>
                    Санхүүгийн Зохицуулах Хороо (СЗХ)-ноос албан ёсоор зөвшөөрөл
                    авч Монгол Улсад үйл ажиллагаа явуулдаг Виртуал Хөрөнгийн
                    Үйлчилгээ Үзүүлэгч (ВХҮҮ)-ийн гишүүнчлэлтэй мэргэжлийн
                    холбоо бөгөөд гишүүддээ үйлчилдэг, хараат бус - бие даасан,
                    ашгийн бус төрийн бус байгууллага юм.
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
                      Алсын хараа
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
                      Эрхэм зорилго
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
                      Уриа үг
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
                            Төвлөрсөн бус санхүүгийн шинэ эринг бүтээлцэнэ
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
                            Найдвартай, хүртээмжтэй, нээлттэй дижитал ирээдүйтэй
                            хөл нийлүүлэн алхах боломжийг бүрдүүлж, крипто зах
                            зээлийн хөгжилд хувь нэмэр оруулах
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
                          <li className=''>
                            <p className=''>Дараагийн хувьсгал</p>
                            <p>Дараагийн ирээдүй</p>
                          </li>
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

export default AboutOne;

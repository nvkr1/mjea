import { Link } from "react-router-dom";
import logoImg from "./../assets/img/logo2.png";
import { FaFacebookF, FaSearchLocation } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
const Footer = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <>
      <footer className='footer-4 footer-wrap'>
        <div id='contacts' className='footer-widgets-wrapper text-white'>
          <div className='container'>
            {/* start  */}
            {/* <div className='row d-flex justify-content-center align-items-center'>
              <div className='hidden sm:block col-3 m-auto'>
                <div className='footer-site-info me-lg-5 mt-40'>
                  <Link to='/'>
                    <img src={logoImg} alt='mjea' height={200} width={200} />
                  </Link>
                </div>
              </div>
              <div className='col-sm-9 col-12'>
                <div className='row justify-content-center'>
                  <div className='flex flex-col sm:flex-row'>
                    <div className='col-3'>
                      <h3>Хаяг</h3>
                    </div>
                    <ul className='col-sm-12 col-9'>
                      <li className='flex items-center'>
                        <FaSearchLocation className='ml-1 w-10 sm:w-auto' />
                        <a
                          target='_blank'
                          href='https://www.google.com/maps/place/Central+Tower,+Ulaanbaatar+14200/@47.9180885,106.9177498,17z/data=!3m1!4b1!4m6!3m5!1s0x5d969246ee9e7233:0x3df25e1e20c33ca5!8m2!3d47.9180885!4d106.9203247!16zL20vMGcxMWRo'>
                          Улаанбаатар хот, Сүхбаатар дүүрэг, 8-р хороо, Цэнтрал
                          Тауэр
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='row justify-content-center mt-3'>
                  <div className='flex flex-col sm:flex-row'>
                    <div className='col-3 text-nowrap'>
                      <h3>Цахим шуудан</h3>
                    </div>
                    <ul className='col-6 sm:mt-0 '>
                      <li className='flex items-center'>
                        <AiOutlineMail className='mx-1' />
                        <a target='_blank'>info@mjae.mn</a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
                <div className='row justify-content-center mt-3'>
                  <div className='flex flex-col sm:flex-row'>
                    <div className='col-3 text-nowrap'>
                      <h3>Сошиал хаяг</h3>
                    </div>
                    <ul className='col sm:mt-0'>
                      <li className='flex items-center'>
                        <FaFacebookF className='mx-1' />
                        <a
                          href='https://www.facebook.com/%D0%9C%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%8B%D0%BD-%D0%91%D0%B8%D1%80%D0%B6%D2%AF%D2%AF%D0%B4%D0%B8%D0%B9%D0%BD-%D0%9D%D1%8D%D0%B3%D0%B4%D1%81%D1%8D%D0%BD-%D0%A5%D0%BE%D0%BB%D0%B1%D0%BE%D0%BE-100147869249365'
                          target='_blank'
                          className='hover:opacity-60 transition'>
                          Монголын Биржүүдийн Нэгдсэн Холбоо
                        </a>
                      </li>
                      <li className='flex items-center'>
                        {" "}
                        <FaLinkedin className='mx-1' />
                        <a
                          href='https://www.linkedin.com/company/93820230/admin/'
                          target='_blank'
                          className='hover:opacity-60 transition'>
                          Mongolian Joint Association of Exchanges
                        </a>
                      </li>
                      <li className='flex items-center'>
                        {" "}
                        <FaTwitter className='mx-1' />
                        <a
                          href='https://twitter.com/MJAE_MN'
                          target='_blank'
                          className='hover:opacity-60 transition'>
                          @MJAE_MN
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='block sm:hidden m-auto'>
                <div className='footer-site-info mt-40'>
                  <Link to='/'>
                    <img
                      src={logoImg}
                      alt='mjea'
                      className='w-[150px] h-[150px]  sm:w-[200px] sm:h-[200px]'
                    />
                  </Link>
                </div>
              </div>
            </div> */}
            {/* end  */}
            <div className='flex mx-auto justify-center gap-10'>
              <a
                href='https://www.facebook.com/%D0%9C%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB%D1%8B%D0%BD-%D0%91%D0%B8%D1%80%D0%B6%D2%AF%D2%AF%D0%B4%D0%B8%D0%B9%D0%BD-%D0%9D%D1%8D%D0%B3%D0%B4%D1%81%D1%8D%D0%BD-%D0%A5%D0%BE%D0%BB%D0%B1%D0%BE%D0%BE-100147869249365'
                target='_blank'>
                <FaFacebookF className='text-2xl sm:text-4xl' />
              </a>
              <a href='https://twitter.com/MJAE_MN' target='_blank'>
                <FaTwitter className='text-2xl sm:text-4xl' />
              </a>
              <a
                href='https://www.linkedin.com/company/93820230/admin/'
                target='_blank'>
                <FaLinkedin className='text-2xl sm:text-4xl' />
              </a>
              <a
                target='_blank'
                href='https://www.google.com/maps/place/Central+Tower,+Ulaanbaatar+14200/@47.9180885,106.9177498,17z/data=!3m1!4b1!4m6!3m5!1s0x5d969246ee9e7233:0x3df25e1e20c33ca5!8m2!3d47.9180885!4d106.9203247!16zL20vMGcxMWRo'>
                <MdLocationPin className='text-2xl sm:text-4xl' />
              </a>
              <a target='_blank' href={`mailto:info@mjae.mn`}>
                <MdEmail className='text-2xl sm:text-4xl' />
              </a>

              {/* <a>
                <IoMdCall className='text-2xl sm:text-4xl' />
              </a> */}
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='container'>
            <div className='flex flex-col sm:flex-row justify-between'>
              <div className='mt-3 mt-lg-0 col text-center text-md-start'>
                <div className='copyright-info text-center'>
                  <p>Copyright @2023 Diverse Solutions LLC</p>
                </div>
              </div>
              <div className='mt-3 mt-lg-0 col text-center text-md-start'>
                <div className='copyright-info text-center'>
                  <p>
                    {" "}
                    {currentLanguage == "mn" ? (
                      <>Монголын Биржүүдийн Нэгдсэн Холбоо</>
                    ) : (
                      <>Mongolian Joint Association of Exchanges</>
                    )}
                  </p>
                </div>
              </div>
              <div className='mt-3 mt-lg-0 col text-center text-md-start'>
                <div className='flex justify-center gap-2 copyright-info text-center'>
                  <p>
                    {currentLanguage == "mn" ? <>Холбоо барих</> : <>Phone</>}
                  </p>
                  <span>+976 00000000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

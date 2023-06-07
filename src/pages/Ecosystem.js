import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";
import Hero2 from "../Components/Hero2";
import { useTranslation } from "react-i18next";
import i18n from "../Components/i18n";
import Hero2Mobile from "../Components/Hero2Mobile";

export default function Ecosystem() {
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <div>
      <Header />
      <div className='hidden sm:block'>
        <Hero2 />
      </div>
      <div className='block sm:hidden'>
        <Hero2Mobile />
      </div>
      <div className='section-padding bg-gray'>
        <div id='ecosystem' className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='block-contents text-center'>
                <div className='section-title'>
                  <h2>
                    {currentLanguage == "mn" ? (
                      <>МОНГОЛЫН КРИПТО ЭКОСИСТЕМИЙН ЗУРАГЛАЛ 2023</>
                    ) : (
                      <>MONGOLIAN CRYPTO ECOSYSTEM MAPPING 2023</>
                    )}
                  </h2>
                </div>
                <p className='mt-5 w-3/4 mx-auto'>
                  {currentLanguage == "mn" ? (
                    <>
                      {" "}
                      МБНХ анх удаа Монголын Крипто Экосистемийн Зураглал
                      2023-ыг боловсруулан гаргалаа. Зураглал боловсруулсан
                      үндсэн санаа нь крипто зах зээлийн оролцогч талуудыг
                      тодорхойлох, хүрээллийг
                      <br />
                      (community) бэхжүүлэх, байгууллага хоорондын хамтын
                      ажиллагаа, хөрөнгө оруулалтын боломжуудыг
                      <br /> бий болгох, олон нийтэд таниулах юм.
                    </>
                  ) : (
                    <>
                      MJAE has developed Mongolian Crypto Ecosystem Mapping 2023
                      for the first time. The main idea behind the mapping is to
                      identify the stakeholders of the crypto market, strengthen
                      the community, create opportunities for
                      inter-organizational cooperation and investment and to
                      inform the public.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className='w-full h-full mt-5'>
            <img src='ecosystem.jpg' className='w-full h-full' />
          </div>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='block-contents text-center'>
                <p className='mt-5 w-3/4 mx-auto'>
                  {currentLanguage == "mn" ? (
                    <>
                      {" "}
                      2023 оны зураглалд зохицуулагч байгууллага, крипто
                      хөрөнгийн бирж, криптовалют, блокчэйн технологи хөгжүүлэгч
                      тэргүүтэй давхардсан тоогоор 103 байгууллага 9 бүлэгт тус
                      бүрийн үйл ажиллагааны чиглэлээрээ хуваарилагдаж орсон
                      байна.
                    </>
                  ) : (
                    <>
                      In the mapping of 2023, 103 duplicate organizations headed
                      by regulator organizations, crypto stock exchanges,
                      cryptocurrency and blockchain technology developers are
                      divided into 9 groups according to their field of
                      activity.{" "}
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='block-contents text-center'>
                <p className='mt-5 w-3/4 mx-auto'>
                  {currentLanguage == "mn" ? (
                    <>
                      {" "}
                      Бид зураглалын боловсруулж гаргахдаа аль болох оролцогч
                      талуудыг бүрэн хамруулахын тулд нээлттэй бүртгэл үүсгэж
                      шалгаруулалт хийсэн бөгөөд дотоодын судалгаа шинжилгээ
                      болоод тухайн бүртгүүлсэн байгууллагын мэдээлэл дээр
                      үндэслэж зураглалд оруулах эсэх шийдвэрийг гаргасан болно.
                    </>
                  ) : (
                    <>
                      In order to include as many stakeholders as possible in
                      the development of the mapping, we conducted an open
                      registration process, conducted a selection process and
                      decided based on domestic research and the information of
                      the registered organization whether to include it in the
                      mapping.{" "}
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='block-contents text-center'>
                <p className='mt-5 w-3/4 mx-auto'>
                  {currentLanguage == "mn" ? (
                    <>
                      Крипто экосистемийн зураглалыг байгууллагууд хөрөнгө
                      оруулалтын питч, танилцуулга, улс орныг төлөөлсөн арга
                      хэмжээ, судалгааны материал гэх мэт өөрийн хэрэгцээ
                      шаардлагын дагуу ашиглаж болох бөгөөд тус зураглалыг бий
                      болгоход оролцсон, дэмжсэн байгууллагуудын ажлыг үнэлж
                      нэрийг дурдаж, лого мэдээллийг хасахгүй бүтэн зургаар нь
                      ашиглахыг зөвлөж байна.
                    </>
                  ) : (
                    <>
                      Crypto ecosystem mapping can be used by organizations for
                      their own needs, such as investment pitches,
                      presentations, country events, research materials, etc and
                      it is recommended to use the full image without removing
                      the logo information, mentioning the names of the
                      organizations and appreciate work that supported
                      participated in and supported the creation of the mapping.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

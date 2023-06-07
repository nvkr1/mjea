import img1 from "../../assets/img/person1.png";
import img2 from "../../assets/img/person2.png";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
const ServicesFour = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <section className='our-service-wrapper bg-black section-padding'>
      <div id='ceos' className='container'>
        <div className='row mtm-30'>
          <h2 className='text-white'>
            {" "}
            {currentLanguage == "mn" ? <>УДИРДЛАГА</> : <>MANAGEMENT</>}
          </h2>
          <div className='col-md-6 col-12 col-lg-6 mt-30'>
            <div className='service-item-card'>
              <div className='flex flex-col sm:gap-20 sm:flex-row'>
                <div className=''>
                  <div className='icon'>
                    <img
                      src={img1}
                      alt=''
                      className='w-full sm:w-[200px]'
                      loading='lazy'
                    />
                    <div className='contents'></div>
                  </div>
                </div>

                <div className='flex flex-col justify-center align-items-center'>
                  <div className='contents'>
                    <h4>
                      <p className='row text-nowrap ' to='/'>
                        {currentLanguage == "mn" ? (
                          <>ГАНЗОРИГ Чулуун</>
                        ) : (
                          <>GANZORIG Chuluun</>
                        )}
                      </p>
                    </h4>
                    <p className='row text-white font-bold'>
                      {currentLanguage == "mn" ? (
                        <>Удирдах зөвлөлийн дарга</>
                      ) : (
                        <>Chairman</>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className='contents'>
                <p>
                  <br />
                  {currentLanguage == "mn" ? (
                    <>
                      Ч.Ганзориг нь Унгар улсын Будапешт хотын Корвинусын их
                      сургуульд бизнес менежментийн бакалавр зэрэг эзэмшсэн
                      бөгөөд Ард Секюритиз ҮЦК, Ард Санхүүгийн Нэгдэл ХК, Унгар
                      улсын Wallis Asset Management, ХасБанк, ТэнГэр Санхүүгийн
                      Нэгдэл, ТэнГэр Даатгал зэрэг бизнесийн байгууллагад
                      ажиллаж байсан туршлагатай юм.
                    </>
                  ) : (
                    <>
                      Ganzorig Ch. graduated from Corvinus University in
                      Budapest, Hungary with a bachelor's degree in business
                      management. He has experience working in business
                      organizations such as Ard Securities, Ard Financial Union,
                      Hungary's Wallis Asset Management, KhasBank, TenGer
                      Financial Union, and TenGer Insurance.{" "}
                    </>
                  )}
                </p>
                <p>
                  <br />
                  {currentLanguage == "mn" ? (
                    <>
                      Ч.Ганзориг нь салбартаа тэргүүлгэх Digital Assets Exchange
                      (DAX) буюу одоогийн idax виртуал хөрөнгийн биржийг үүсгэн
                      байгуулагч, ТУЗ-ийн гишүүн агаад Гүйцэтгэх захирал, Ард
                      Кредит ББСБ ХК, Ард Даатгал ХК, Ард Секюритиз ХХК
                      компаниудын ТУЗ-ийн гишүүн, Номадик Офрөүд ХХК-ийн
                      Гүйцэтгэх захирал зэрэг албан тушаалуудыг хашдаг бөгөөд
                      Нийгмийн Ардчилал Монголын Залуучуудын Холбооны удирдах
                      зөвлөлийн гишүүнээр ажиллаж байна. Тэрээр 2013 онд Ард
                      Кредит ББСБ ХК-г үүсгэн байгуулж 2020 оныг дуустал тус
                      компанийн Гүйцэтгэх захирал, 2020 оноос ТУЗ-ийн даргаар
                      ажиллаж байна.
                    </>
                  ) : (
                    <>
                      Ganzorig Ch. is the founder of Digital Assets Exchange
                      (DAX) or the current idax virtual asset exchange which is
                      the leader in the field, Member of the Board of Directors
                      and CEO, Member of the board of directors of Ard Credit
                      BBSB JSC, Ard Daatgal JSC, Ard Securities LLC, CEO of
                      Nomadic Offroad LLC and Working as a member of the board
                      of The Mongolian Social Democratic Youth Union. In 2013,
                      he founded Ard Credit BBSB JSC, Until the end of 2020, the
                      company's CEO and has been working as the chairman of the
                      board of directors since 2020.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-12 col-lg-6 mt-30'>
            <div className='service-item-card'>
              <div className='flex flex-col sm:flex-row'>
                <div className='col'>
                  <div className='icon'>
                    <img
                      src={img2}
                      alt=''
                      className='w-full sm:w-[200px]'
                      loading='lazy'
                    />
                    <div className='contents'></div>
                  </div>
                </div>

                <div className='col flex flex-col justify-center align-items-center'>
                  <div className='contents'>
                    <h4>
                      <p className='row text-nowrap ' to='/'>
                        {currentLanguage == "mn" ? (
                          <>ТӨРТОГТОХ ЭРДЭНЭБААТАР</>
                        ) : (
                          <>TURTOGTOKH ERDENEBAATAR </>
                        )}
                      </p>
                    </h4>
                    <p className='row text-white font-bold'>
                      {currentLanguage == "mn" ? (
                        <>Гүйцэтгэх захирал</>
                      ) : (
                        <>Chief Executive Officer </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className='contents'>
                <p>
                  <br />
                  {currentLanguage == "mn" ? (
                    <>
                      {" "}
                      Э.Төртогтох нь МУИС-ийг Хэрэглээний математикийн
                      мэргэжлээр бакалавр, Япон улсын Иватэ ИС-ийг Хэрэглээний
                      математик, загварчлалын мэргэжлээр магистр зэрэгтэй тус
                      тус төгссөн.
                    </>
                  ) : (
                    <>
                      {" "}
                      Turtogtoh E., graduated with a bachelor's degree in
                      Applied mathematics from National University of Mongolia
                      and a master's degree in Applied mathematics and modeling
                      from Iwate University, Japan. He started his career in the
                      banking and financial sector and has 8+ years of
                      experience in the risk management, sustainable financing,
                      product development, data analysis and credit scoring.
                    </>
                  )}
                </p>
                <p>
                  <br />

                  {currentLanguage == "mn" ? (
                    <>
                      {" "}
                      Ажлын гараагаа банк, санхүүгийн салбараас эхлүүлсэн бөгөөд
                      эрсдэлийн удирдлага, тогтвортой санхүүжилт, бүтээгдэхүүн
                      хөгжүүлэлт, өгөгдлийн шинжилгээ-кредит скорингийн
                      чиглэлээр 8 гаруй жил ажилласан туршлагатай. 2012-2017 онд
                      Капитал, Богд банк, 2020-2021 онд Бүрэн Скор ЗМС,
                      2022-2023 онд Монголын Финтекийн Холбоо, 2023 оноос Ард
                      Санхүүгийн Нэгдлийн Эрсдэл Эрхэлсэн захирлаар, 2023 оны 03
                      сараас эхлэн Монголын Биржүүдийн Нэгдсэн Холбооны
                      Гүйцэтгэх захирал ажиллаж байна.
                    </>
                  ) : (
                    <>
                      From 2012-2017, Capital and Bogd bank, from 2020-2021
                      Buren Score CIB, from 2022-2023, Mongolian Fintech
                      Association, from 2023 as the CEO of the Mongolian Joint
                      Association of Exchanges, from 2023 as the Chief Risk
                      Officer of Ard Financial Group.
                    </>
                  )}

                  <br />
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFour;

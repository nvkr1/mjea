import img1 from "../../assets/img/person1(copy).png";
import img2 from "../../assets/img/person (copy).jpg";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
const ServicesFour = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <section className="our-service-wrapper bg-black section-padding">
      <div id="ceos" className="container">
        <div className="row mtm-30">
          <h2 className="text-white">
            {" "}
            {currentLanguage === "mn" ? <>УДИРДЛАГА</> : <>MANAGEMENT</>}
          </h2>
          <div className="col-md-6 col-12 col-lg-6 mt-30">
            <div className="service-item-card">
              <div className="flex flex-col xl:gap-20 xl:flex-row">
                <div className="">
                  <div className="icon">
                    <img
                      src={img1}
                      alt=""
                      className="w-[200px] h-[200px] sm:w-[200px] mx-auto"
                      loading="lazy"
                    />
                    <div className="contents"></div>
                  </div>
                </div>

                <div className="flex flex-col justify-center align-items-center">
                  <div className="contents">
                    <h4>
                      <p className="row text-nowrap " to="/">
                        {currentLanguage === "mn" ? (
                          <>ЦОГТБАЛЫН МАНДАХ</>
                        ) : (
                          <>MANDAH TSOGTBAL </>
                        )}
                      </p>
                    </h4>
                    <p className="row text-white font-bold">
                      {currentLanguage === "mn" ? (
                        <>Удирдах зөвлөлийн дарга</>
                      ) : (
                        <>Chairman</>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="contents">
                <p>
                  <br />
                  {currentLanguage === "mn" ? (
                    <>
                      Ц.Мандах нь 2013 онд Санхүү Эдийн Засгийн Их Сургуулийн
                      Санхүүгийн удирдлагын мэргэжлээр төгссөн бөгөөд Монголын
                      ипотекийн корпораци ОССК ХХК-аас ажлын гараагаа эхэлж
                      Төлөвлөлт шинжилгээ хариуцсан захирал, Судалгаа,
                      хөгжүүлэлт хариуцсан захирлаар ажиллаж байгаад 2021 оноос
                      Coinhub крипто биржийн дэд захирал, 2022 оноос гүйцэтгэх
                      захирлаар ажиллаж буй виртуал хөрөнгийн зах зээлийн
                      томоохон төлөөлөл, тоглогчийн нэг юм.
                    </>
                  ) : (
                    <>
                      Mandah Ts., graduated from the University of Finance and
                      Economics with a degree in Financial Management in 2013.
                      He started his career at the Mongolian Mortgage
                      Corporation HFC LLC, where he worked as the Head of
                      Planning and Analysis and Head of Research and
                      Development, respectively. He is one of the major
                      representatives and players of the crypto market and has
                      been working as the deputy CEO from 2021 and as the CEO of
                      the Coinhub VASP from 2022.
                    </>
                  )}
                </p>
                <p>
                  <br />
                  {currentLanguage === "mn" ? (
                    <>
                      Тэрээр 2022 оноос Холбооны удирдах зөвлөлийн гишүүнээр
                      ажиллаж буй бөгөөд “Монголын виртуал хөрөнгийн зах зээлийг
                      хөгжүүлэх болон энэхүү салбарт үйл ажиллагаа явуулдаг аж
                      ахуйн нэгж, байгууллагуудын эрх ашгийг хамгаалах”
                      зорилготой Монголын Биржүүдийн Нэгдсэн Холбоо (МБНХ)-ны
                      2024 оны Удирдах зөвлөлийн даргаар томилогдлоо.
                    </>
                  ) : (
                    <>
                      He has been a member of the Board of Directors of the
                      Association since 2022, and has been appointed as the
                      Chairman of the Board of Directors of the MJAE in 2024,
                      which aims to "To develop the Mongolian Crypto Market and
                      protect the interests of enterprises and organizations
                      operating in this field".
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 col-lg-6 mt-30">
            <div className="service-item-card">
              <div className="flex flex-col xl:flex-row">
                <div className="col">
                  <div className="icon">
                    <img
                      src={img2}
                      alt=""
                      className="w-[200px] h-[200px] sm:w-[200px] mx-auto"
                      loading="lazy"
                    />
                    <div className="contents"></div>
                  </div>
                </div>

                <div className="col flex flex-col justify-center align-items-center">
                  <div className="contents">
                    <h4>
                      <p className="row text-nowrap " to="/">
                        {currentLanguage === "mn" ? (
                          <>ЭРДЭНЭБААТАРЫН ТӨРТОГТОХ</>
                        ) : (
                          <>TURTOGTOH ERDENEBAATAR</>
                        )}
                      </p>
                    </h4>
                    <p className="row text-white font-bold">
                      {currentLanguage === "mn" ? (
                        <>Гүйцэтгэх захирал</>
                      ) : (
                        <>CEO</>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="contents">
                <p>
                  <br />
                  {currentLanguage === "mn" ? (
                    <>
                      {" "}
                      Э.Төртогтох нь Монгол Улсын Их Сургуулийг Хэрэглээний
                      математикийн мэргэжлээр бакалавр, Япон улсын Иватэ Их
                      Сургуулийг Хэрэглээний математик, загварчлалын мэргэжлээр
                      магистрын зэрэгтэй тус тус төгссөн. Ажлын гараагаа банк,
                      санхүүгийн салбараас эхлүүлсэн бөгөөд эрсдэлийн удирдлага,
                      тогтвортой санхүүжилт, бүтээгдэхүүн хөгжүүлэлт, өгөгдлийн
                      шинжилгээ-кредит скорингийн чиглэлээр 8 гаруй жил
                      ажилласан туршлагатай.
                    </>
                  ) : (
                    <>
                      {" "}
                      Turtogtoh E., graduated with a bachelor's degree in
                      Applied mathematics from National University of Mongolia
                      and a master's degree in Applied mathematics and modeling
                      from Iwate University, Japan. He started his career in the
                      banking and financial sector and has 8+ years of
                      experience in risk management, sustainable financing,
                      product development, data analysis and credit scoring.
                    </>
                  )}
                </p>
                <p>
                  <br />

                  {currentLanguage === "mn" ? (
                    <>
                      {" "}
                      2012-2017 онд Капитал банк, Богд банк, 2020-2021 онд Бүрэн
                      Скор ЗМС, 2022-2023 онд Монголын Финтекийн Холбоо, 2022
                      оноос Ард Санхүүгийн Нэгдэл ХК-ийн Эрсдэл эрхэлсэн
                      захирлаар, 2023 оны 3 сараас эхлэн Монголын Биржүүдийн
                      Нэгдсэн Холбооны Гүйцэтгэх захирлаар тус тус ажиллаж
                      байна.
                    </>
                  ) : (
                    <>
                      From 2012-2017, Capital bank and Bogd bank, from 2020-2021
                      Buren Score CIB, from 2022-2023, Mongolian Fintech
                      Association, from 2023 as the CEO of the Mongolian Joint
                      Association of Exchanges, from 2022 as the Chief Risk
                      Officer of Ard Financial Group JSC.
                    </>
                  )}

                  <br />
                  <br />

                  {currentLanguage === "en" ? <br /> : null}
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

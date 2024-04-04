import React from "react";
import CountUp from "react-countup";
import bannerImg from "./../assets/img/bg.png";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

const FunFact = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <section
      className="fun-fact-banner bg-overlay text-white bg-cover"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="container">
        <h4 className="mt-20 align-items-center justify-content-center d-flex">
          {currentLanguage == "mn" ? (
            <>2023 оны төгсгөлд</>
          ) : (
            <>At the end of 2023</>
          )}
        </h4>
        <div className="align-items-center justify-content-center d-flex row text-center text-md-start">
          <div className="col-lg-2 col-md-3 mt-30 col-6">
            <div className="align-items-center single-fun-fact">
              <h2>
                <CountUp end={12} duration={4}></CountUp>
              </h2>
              <h3>
                {currentLanguage === "mn" ? (
                  <>Бүртгэлтэй ВХҮҮ</>
                ) : (
                  <>Registered Virtual Asset Service Providers (VASPs)</>
                )}
              </h3>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 mt-30 col-6">
            <div className="single-fun-fact">
              <h2>
                ₮<CountUp end={241.9} duration={5}></CountUp>
                {currentLanguage === "mn" ? <>тэрбум</> : <>billion</>}
              </h2>
              <h3>
                {currentLanguage === "mn" ? (
                  <>Зах зээлийн үнэлгээ</>
                ) : (
                  <>Market capitalization</>
                )}
              </h3>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 mt-30 col-6">
            <div className="single-fun-fact">
              <h2>
                ₮<CountUp end={150.1} duration={6}></CountUp>
                {currentLanguage === "mn" ? <>сая</> : <>million</>}
              </h2>
              <h3>
                {currentLanguage === "mn" ? (
                  <>Өдрийн дундаж арилжаа</>
                ) : (
                  <>Average daily trading</>
                )}
              </h3>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 mt-30 col-6">
            <div className="single-fun-fact">
              <h2>
                <CountUp end={921022} duration={7}></CountUp>
              </h2>

              <h3>
                {currentLanguage === "mn" ? (
                  <>Нийт харилцагчийн тоо</>
                ) : (
                  <>Total number of customers</>
                )}
              </h3>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 mt-30 col-6">
            <div className="align-items-center single-fun-fact">
              <h2>
                <CountUp end={41} duration={7}></CountUp>
              </h2>
              <h3>
                {currentLanguage === "mn" ? (
                  <>Листлэгдсэн Койн, Токен</>
                ) : (
                  <>Listed coins and tokens</>
                )}
              </h3>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 mt-30 col-6">
            <div className="align-items-center single-fun-fact">
              <h2>
                {currentLanguage === "mn" ? (
                  <>
                    <CountUp end={12} duration={7}></CountUp> ВХҮҮ нэвтрүүлсэн
                  </>
                ) : (
                  <div className="flex flex-col xl:flex-row items-center md:items-start">
                    <div className="flex flex-row gap-2">
                      Achieved <CountUp end={12} duration={7}></CountUp>
                    </div>
                    <div className="hidden xl:block">&nbsp;</div>
                    <div className="flex flex-row justify-center md:justify-start">
                      VASP
                      <div style={{ textTransform: "lowercase" }}>s</div>
                    </div>
                  </div>
                )}
              </h2>
              <h3>MNS ISO/IEC 27001</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;

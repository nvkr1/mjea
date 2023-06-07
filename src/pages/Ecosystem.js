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
          <table className='table-auto w-full text-xs mt-70'>
            <thead>
              <tr className='text-[#2957a4] bg-[#f8f8f8]'>
                <th className='w-auto text-center p-2 lg:p-4 border border-[#f0f0f0]'>
                  №
                </th>
                <th className='w-auto whitespace-nowrap text-center p-2 lg:p-4 border border-[#f0f0f0]'>
                  {currentLanguage == "mn" ? (
                    <>Биржийн нэр</>
                  ) : (
                    <>Биржийн нэр</>
                  )}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-full text-start px-4 py-2"
                      : "w-full text-start px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? (
                    <>Компанийн нэр</>
                  ) : (
                    <>Компанийн нэр</>
                  )}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-full whitespace-nowrap text-center px-4 py-2"
                      : "w-full whitespace-nowrap text-center px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? (
                    <>Үйл ажиллагааны чиглэл</>
                  ) : (
                    <>Үйл ажиллагааны чиглэл</>
                  )}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-full text-center px-4 py-2"
                      : "w-full text-center px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? <>Website</> : <>Website</>}
                </th>
              </tr>
            </thead>
            <tbody>
              {table1.map((table) => (
                <tr table={table} key={table.id}>
                  <th className='px-4 py-2 border border-[#f0f0f0] text-[#2957a4]'>
                    {table.id}
                  </th>
                  <th className='font-normal whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-start'>
                    {currentLanguage == "mn" ? (
                      <>{table.exchangeName}</>
                    ) : (
                      <>{table.exchangeName}</>
                    )}
                  </th>
                  <th className='font-normal w-auto whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-start'>
                    {currentLanguage == "mn" ? (
                      <>{table.companyName}</>
                    ) : (
                      <>{table.companyName}</>
                    )}
                  </th>
                  <th className='font-normal whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-start'>
                    {currentLanguage == "mn" ? (
                      <>{table.operation}</>
                    ) : (
                      <>{table.operation}</>
                    )}
                  </th>
                  <th className='border border-[#f0f0f0]'>
                    <a
                      className='flex text-xs justify-center w-full px-4 py-2 text-[#02a3ea]'
                      href={table.webLink}
                      target='_blank'>
                      {table.webLink}
                    </a>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <table className='table-auto w-full text-xs mt-70'>
            <thead>
              <tr className='text-[#2957a4] bg-[#f8f8f8]'>
                <th className='w-auto text-center p-2 lg:p-4 border border-[#f0f0f0]'>
                  №
                </th>
                <th className='w-1/4 whitespace-nowrap text-start px-4 py-2 border border-[#f0f0f0]'>
                  {currentLanguage == "mn" ? <>Койны нэр</> : <>Койны нэр</>}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-1/4 text-start px-4 py-2"
                      : "w-1/4 text-start px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? (
                    <>Койны тикер</>
                  ) : (
                    <>Койны тикер</>
                  )}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-1/2 whitespace-nowrap text-start px-4 py-2"
                      : "w-1/2 whitespace-nowrap text-start px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? (
                    <>Компанийн нэр</>
                  ) : (
                    <>Компанийн нэр</>
                  )}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-full whitespace-nowrap text-center px-4 py-2"
                      : "w-full whitespace-nowrap text-center px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? (
                    <>Үйл ажиллагааны чиглэл</>
                  ) : (
                    <>Үйл ажиллагааны чиглэл</>
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {table2.map((table, index) => (
                <tr table={table} key={table.id}>
                  <th className='px-4 py-2 border border-[#f0f0f0] text-[#2957a4]'>
                    {index + 1}
                  </th>
                  <th className='font-normal whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-start'>
                    {currentLanguage == "mn" ? (
                      <>{table.coinName}</>
                    ) : (
                      <>{table.coinName}</>
                    )}
                  </th>
                  <th className='font-normal whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-start'>
                    {currentLanguage == "mn" ? (
                      <>{table.coinTicker}</>
                    ) : (
                      <>{table.coinTicker}</>
                    )}
                  </th>
                  <th className='font-normal whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-start'>
                    {currentLanguage == "mn" ? (
                      <>{table.companyName}</>
                    ) : (
                      <>{table.companyName}</>
                    )}
                  </th>
                  <th className='font-normal px-4 py-2 text-center border border-[#f0f0f0]'>
                    {table.operation}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <table className='table-auto w-full text-xs mt-70'>
            <thead>
              <tr className='text-[#2957a4] bg-[#f8f8f8]'>
                <th className='w-auto text-center p-2 lg:p-4 border border-[#f0f0f0]'>
                  №
                </th>
                <th className='w-full whitespace-nowrap text-start px-4 py-2 border border-[#f0f0f0]'>
                  {currentLanguage == "mn" ? (
                    <>Байгууллагын нэр</>
                  ) : (
                    <>Байгууллагын нэр</>
                  )}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-auto whitespace-nowrap text-center px-4 py-2"
                      : "w-auto whitespace-nowrap text-center px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? (
                    <>Үйл ажиллагааны чиглэл</>
                  ) : (
                    <>Үйл ажиллагааны чиглэл</>
                  )}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-full text-center px-4 py-2"
                      : "w-full text-center px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? <>Website</> : <>Website</>}
                </th>
              </tr>
            </thead>
            <tbody>
              {table3.map((table, index) => (
                <tr table={table} key={table.id}>
                  <th className='px-4 py-2 border border-[#f0f0f0] text-[#2957a4]'>
                    {index + 1}
                  </th>

                  <th className='font-normal w-auto whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-start'>
                    {currentLanguage == "mn" ? (
                      <>{table.companyName}</>
                    ) : (
                      <>{table.companyName}</>
                    )}
                  </th>
                  <th className='font-normal whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-start'>
                    {currentLanguage == "mn" ? (
                      <>{table.operation}</>
                    ) : (
                      <>{table.operation}</>
                    )}
                  </th>
                  <th className='border border-[#f0f0f0]'>
                    <a
                      className='flex text-xs justify-center w-full px-4 py-2 text-[#02a3ea]'
                      href={table.webLink}
                      target='_blank'>
                      {table.webLink}
                    </a>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <table className='table-auto w-full text-xs mt-70'>
            <thead>
              <tr className='text-[#2957a4] bg-[#f8f8f8]'>
                <th className='w-auto text-center p-2 lg:p-4 border border-[#f0f0f0]'>
                  №
                </th>
                <th className='w-full whitespace-nowrap text-start px-4 py-2 border border-[#f0f0f0]'>
                  {currentLanguage == "mn" ? (
                    <>Компанийн нэр</>
                  ) : (
                    <>Компанийн нэр</>
                  )}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-auto whitespace-nowrap text-center px-4 py-2"
                      : "w-auto whitespace-nowrap text-center px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? (
                    <>Үйл ажиллагааны чиглэл</>
                  ) : (
                    <>Үйл ажиллагааны чиглэл</>
                  )}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-full text-center px-4 py-2"
                      : "w-full text-center px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? <>Website</> : <>Website</>}
                </th>
              </tr>
            </thead>
            <tbody>
              {table4.map((table, index) => (
                <tr table={table} key={table.id}>
                  <th className='px-4 py-2 border border-[#f0f0f0] text-[#2957a4]'>
                    {index + 1}
                  </th>

                  <th className='font-normal w-auto whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-start'>
                    {currentLanguage == "mn" ? (
                      <>{table.companyName}</>
                    ) : (
                      <>{table.companyName}</>
                    )}
                  </th>
                  <th className='font-normal whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-start'>
                    {currentLanguage == "mn" ? (
                      <>{table.operation}</>
                    ) : (
                      <>{table.operation}</>
                    )}
                  </th>
                  <th className='border border-[#f0f0f0]'>
                    <a
                      className='flex text-xs justify-center w-full px-4 py-2 text-[#02a3ea]'
                      href={table.webLink}
                      target='_blank'>
                      {table.webLink}
                    </a>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <table className='table-auto w-full text-xs mt-70'>
            <thead>
              <tr className='text-[#2957a4] bg-[#f8f8f8]'>
                <th className='w-auto text-center p-2 lg:p-4 border border-[#f0f0f0]'>
                  №
                </th>
                <th className='w-full whitespace-nowrap text-start px-4 py-2 border border-[#f0f0f0]'>
                  {currentLanguage == "mn" ? (
                    <>Оноосон нэр</>
                  ) : (
                    <>Оноосон нэр</>
                  )}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-auto whitespace-nowrap text-center px-4 py-2"
                      : "w-auto whitespace-nowrap text-center px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? (
                    <>Үйл ажиллагааны чиглэл</>
                  ) : (
                    <>Үйл ажиллагааны чиглэл</>
                  )}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-auto whitespace-nowrap text-center px-4 py-2"
                      : "w-auto whitespace-nowrap text-center px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? <>Project</> : <>Project</>}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-full text-center px-4 py-2"
                      : "w-full text-center px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? <>Website</> : <>Website</>}
                </th>
              </tr>
            </thead>
            <tbody>
              {table5.map((table, index) => (
                <tr table={table} key={table.id}>
                  <th className='px-4 py-2 border border-[#f0f0f0] text-[#2957a4]'>
                    {index + 1}
                  </th>

                  <th className='font-normal w-auto whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-start'>
                    {currentLanguage == "mn" ? (
                      <>{table.nickname}</>
                    ) : (
                      <>{table.nickname}</>
                    )}
                  </th>
                  <th className='font-normal whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-center'>
                    {currentLanguage == "mn" ? (
                      <>{table.operation}</>
                    ) : (
                      <>{table.operation}</>
                    )}
                  </th>
                  <th className='font-normal whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-center'>
                    {currentLanguage == "mn" ? (
                      <>{table.project}</>
                    ) : (
                      <>{table.project}</>
                    )}
                  </th>
                  <th className='border border-[#f0f0f0]'>
                    <a
                      className='flex text-xs justify-center w-full px-4 py-2 text-[#02a3ea]'
                      href={table.webLink}
                      target='_blank'>
                      {table.webLink}
                    </a>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <table className='table-auto w-full text-xs mt-70'>
            <thead>
              <tr className='text-[#2957a4] bg-[#f8f8f8]'>
                <th className='w-auto text-center p-2 lg:p-4 border border-[#f0f0f0]'>
                  №
                </th>
                <th className='w-auto whitespace-nowrap text-start px-4 py-2 border border-[#f0f0f0]'>
                  {currentLanguage == "mn" ? <>Project</> : <>Project</>}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-auto whitespace-nowrap text-center px-4 py-2"
                      : "w-auto whitespace-nowrap text-center px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? <>Exchange</> : <>Exchange</>}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-auto whitespace-nowrap text-center px-4 py-2"
                      : "w-auto whitespace-nowrap text-center px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? (
                    <>Marketplace</>
                  ) : (
                    <>Marketplace</>
                  )}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-auto text-center px-4 py-2"
                      : "w-auto text-center px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? (
                    <>Үйл ажиллагааны чиглэл</>
                  ) : (
                    <>Үйл ажиллагааны чиглэл</>
                  )}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-auto text-center px-4 py-2"
                      : "w-auto text-center px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? <>Website</> : <>Website</>}
                </th>
              </tr>
            </thead>
            <tbody>
              {table6.map((table, index) => (
                <tr table={table} key={table.id}>
                  <th className='w-auto text-center px-4 py-2 border border-[#f0f0f0] text-[#2957a4]'>
                    {index + 1}
                  </th>

                  <th className='font-normal whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-start'>
                    {currentLanguage == "mn" ? (
                      <>{table.project}</>
                    ) : (
                      <>{table.project}</>
                    )}
                  </th>
                  <th className='font-normal whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-center'>
                    {currentLanguage == "mn" ? (
                      <>{table.exchange}</>
                    ) : (
                      <>{table.exchange}</>
                    )}
                  </th>
                  <th className='border border-[#f0f0f0]'>
                    <a
                      className='flex text-xs justify-center w-full px-4 py-2 text-[#02a3ea]'
                      href={table.marketplace}
                      target='_blank'>
                      {table.marketplace}
                    </a>
                  </th>
                  <th className='font-normal whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-center'>
                    {currentLanguage == "mn" ? (
                      <>{table.operation}</>
                    ) : (
                      <>{table.operation}</>
                    )}
                  </th>

                  <th className='border border-[#f0f0f0]'>
                    <a
                      className='flex text-xs justify-center w-full px-4 py-2 text-[#02a3ea]'
                      href={table.webLink}
                      target='_blank'>
                      {table.webLink}
                    </a>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <table className='table-auto w-full text-xs mt-70'>
            <thead>
              <tr className='text-[#2957a4] bg-[#f8f8f8]'>
                <th className='w-auto text-center p-2 lg:p-4 border border-[#f0f0f0]'>
                  №
                </th>
                <th className='w-full whitespace-nowrap text-start px-4 py-2 border border-[#f0f0f0]'>
                  {currentLanguage == "mn" ? (
                    <>Компанийн нэр</>
                  ) : (
                    <>Компанийн нэр</>
                  )}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-auto whitespace-nowrap text-center px-4 py-2"
                      : "w-auto whitespace-nowrap text-center px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? (
                    <>Үйл ажиллагааны чиглэл</>
                  ) : (
                    <>Үйл ажиллагааны чиглэл</>
                  )}
                </th>
                <th
                  className={` ${
                    currentLanguage == "mn"
                      ? "w-full text-center px-4 py-2"
                      : "w-full text-center px-4 py-2"
                  } border border-[#f0f0f0]`}>
                  {currentLanguage == "mn" ? <>Website</> : <>Website</>}
                </th>
              </tr>
            </thead>
            <tbody>
              {table7.map((table, index) => (
                <tr table={table} key={table.id}>
                  <th className='px-4 py-2 border border-[#f0f0f0] text-[#2957a4]'>
                    {index + 1}
                  </th>

                  <th className='font-normal w-auto whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-start'>
                    {currentLanguage == "mn" ? (
                      <>{table.companyName}</>
                    ) : (
                      <>{table.companyName}</>
                    )}
                  </th>
                  <th className='font-normal whitespace-nowrap px-4 py-2 border border-[#f0f0f0] text-start'>
                    {currentLanguage == "mn" ? (
                      <>{table.operation}</>
                    ) : (
                      <>{table.operation}</>
                    )}
                  </th>
                  <th className='border border-[#f0f0f0]'>
                    <a
                      className='flex text-xs justify-center w-full px-4 py-2 text-[#02a3ea]'
                      href={table.webLink}
                      target='_blank'>
                      {table.webLink}
                    </a>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
const table1 = [
  {
    id: 1,
    exchangeName: "Altex",
    companyName: "Чойжин алтекс ХХК",
    operation: "Крипто хөрөнгийн бирж",
    webLink: "https://altex.mn",
  },
  {
    id: 2,
    exchangeName: "Capex",
    companyName: "Капекс капитал ХХК",
    operation: "Крипто хөрөнгийн бирж",
    webLink: "https://capex.mn",
  },
  {
    id: 3,
    exchangeName: "Coinhub",
    companyName: "Койн хаб ХХК (Coinhub)",
    operation: "Крипто хөрөнгийн бирж",
    webLink: "https://www.coinhub.mn",
  },
  {
    id: 4,
    exchangeName: "Complex",
    companyName: "Комплекс дижитал экосистем ХХК",
    operation: "Крипто хөрөнгийн бирж",
    webLink: "https://complex.mn",
  },
  {
    id: 5,
    exchangeName: "Corex",
    companyName: "Корэкс ХХК",
    operation: "Крипто хөрөнгийн бирж",
    webLink: "https://www.corex.mn",
  },
  {
    id: 6,
    exchangeName: "Denode",
    companyName: "Анд Дэнөүд ХХК",
    operation: "Крипто хөрөнгийн бирж",
    webLink: "https://denode.io",
  },
  {
    id: 7,
    exchangeName: "idax",
    companyName: "Айдакс ХХК",
    operation: "Крипто хөрөнгийн бирж",
    webLink: "https://www.idax.exchange",
  },
  {
    id: 8,
    exchangeName: "NCX",
    companyName: "Нэйшнал трэйшир бит секьюрити ХХК",
    operation: "Крипто хөрөнгийн бирж",
    webLink: "https://ncx.mn",
  },
  {
    id: 9,
    exchangeName: "Altex",
    companyName: "Чойжин алтекс ХХК",
    operation: "Крипто хөрөнгийн бирж",
    webLink: "https://altex.mn",
  },
  {
    id: 10,
    exchangeName: "Octagon",
    companyName: "Поверэд Эй Дй Эм ХХК",
    operation: "Крипто хөрөнгийн бирж",
    webLink: "https://octagon.mn",
  },
  {
    id: 11,
    exchangeName: "X-Meta",
    companyName: "Икс Мета ХХК",
    operation: "Крипто хөрөнгийн бирж",
    webLink: "https://www.x-meta.com",
  },
  {
    id: 12,
    exchangeName: "Zoos Digital",
    companyName: "Зоос дижитал эксчэйнж ХХК",
    operation: "Крипто хөрөнгийн бирж",
    webLink: "https://zoos.digital",
  },
];
const table2 = [
  {
    coinName: "9911Coin",
    coinTicker: "9911",
    companyName: '"Алтан Бумба Санхүүгийн Нэгдэл" ХХК',
    operation: "Криптовалют",
  },
  {
    coinName: "ADM Coin",
    coinTicker: "ADMC",
    companyName: '"Алтан дорнод монгол" ХХК',
    operation: "Криптовалют",
  },
  {
    coinName: "ArdMoney",
    coinTicker: "ARDM",
    companyName: '"Ард Санхүүгийн Нэгдэл" ХК',
    operation: "Криптовалют",
  },
  {
    coinName: "ARDT",
    coinTicker: "ARDT",
    companyName: '"Ард Санхүүгийн Нэгдэл" ХК',
    operation: "Криптовалют",
  },
  {
    coinName: "ArdCoin",
    coinTicker: "ARDX",
    companyName: '"Ард Санхүүгийн Нэгдэл" ХК',
    operation: "Криптовалют",
  },
  {
    coinName: "The Bari Coin",
    coinTicker: "Bari Coin",
    companyName: '"Барилга Бизнет" ХХК',
    operation: "Криптовалют",
  },
  {
    coinName: "Blockchain Data Center Token",
    coinTicker: "BDC",
    companyName: "Эм Ди Кэй Ай ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "Battle Esports Coin",
    coinTicker: "BES token",
    companyName: "Либэрал Майнд ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "Bidcoin",
    coinTicker: "BIDCoin",
    companyName: "Бизнес инвест девелопмент технологи ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "MGLcalceum",
    coinTicker: "CAEL",
    companyName: '"Эм Жи Эл Кейлум" ХХК',
    operation: "Криптовалют",
  },
  {
    coinName: "Camel token",
    coinTicker: "CAMEL",
    companyName: "Солид Партнерс Групп ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "Care coin",
    coinTicker: "CARE",
    companyName: '"Индранил фармаси клиник" ХХК',
    operation: "Криптовалют",
  },
  {
    coinName: "CoinHub",
    coinTicker: "CHB",
    companyName: "“Койнхаб” ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "Capex Coin",
    coinTicker: "CPX",
    companyName: '"ДатаЛанд" ХХК',
    operation: "Криптовалют",
  },
  {
    coinName: "COREX",
    coinTicker: "CRX",
    companyName: '"Корекс" ХХК',
    operation: "Криптовалют",
  },
  {
    coinName: "Digital Assets Coin",
    coinTicker: "DAC",
    companyName: "Дижитал Ассет Койн ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "DAXT",
    coinTicker: "DAXT",
    companyName: '"Ард Санхүүгийн Нэгдэл" ХК',
    operation: "Криптовалют",
  },
  {
    coinName: "Dogechew Coin",
    coinTicker: "DC",
    companyName: "Ашид-Од ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "Digital exim token",
    coinTicker: "DET",
    companyName: '"Дижитал эксим" ХХК ',
    operation: "Криптовалют",
  },
  {
    coinName: "Ehlel Amjilt Coin",
    coinTicker: "EAC",
    companyName: '"Эхлэл электроникс" ХХК',
    operation: "Криптовалют",
  },
  {
    coinName: "ELF Coin",
    coinTicker: "ELF",
    companyName: "“Элф эдүкэйшн” ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "Ger Coin",
    coinTicker: "GER",
    companyName: "“Гэр койн” ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "Huduu token",
    coinTicker: "HUDUU",
    companyName: '"Данздо" ХХК',
    operation: "Криптовалют",
  },
  {
    coinName: "ICT Group Token",
    coinTicker: "ICTG",
    companyName: "“Ай Си Ти Групп” ХК",
    operation: "Криптовалют",
  },
  {
    coinName: "Inflation Hedging Coin",
    coinTicker: "IHC",
    companyName: "“Их Бит” ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "INDUSTRIAL INNOVATION TOKEN",
    coinTicker: "IIT",
    companyName: '"Корекс" ХХК',
    operation: "Криптовалют",
  },
  {
    coinName: "MGL Cent",
    coinTicker: "MGLC",
    companyName: '"Он Жим" ХХК',
    operation: "Криптовалют",
  },
  {
    coinName: "MNDT",
    coinTicker: "MNDT",
    companyName: "“Койнхаб” ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "Mongol NFT",
    coinTicker: "MNFT",
    companyName: '"Комплекс дижитал экосистем" ХХК',
    operation: "Криптовалют",
  },
  {
    coinName: "Mongol Tether",
    coinTicker: "MONT",
    companyName: "“Монгол дифай” ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "MOZO coin",
    coinTicker: "MOZO",
    companyName: '"Барс Моторс" ХХК, “Мозо Финанс” ХХК',
    operation: "Криптовалют",
  },
  {
    coinName: "Marketshop coin",
    coinTicker: "MSC",
    companyName: "“Аривайз” ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "National Treasure Coin",
    coinTicker: "NTC",
    companyName: "Нэйшнал Трэйшир бит Секьюрити ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "OBORTECH",
    coinTicker: "OBOT",
    companyName: '"ОБОРТЕЧ Монголиа ХХК"',
    operation: "Криптовалют",
  },
  {
    coinName: "StorePay",
    coinTicker: "SPC",
    companyName: "“Стор пэй” ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "Trade",
    coinTicker: "TRD",
    companyName: "“Дижитал эксчейнж монголиа” ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "URGO Coin",
    coinTicker: "URG",
    companyName: "Өргөө койн ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "World Plus Coin",
    coinTicker: "WPL",
    companyName: '"Ворлд Плас Дижитал" ХХК',
    operation: "Криптовалют",
  },
  {
    coinName: "ZesCoin",
    coinTicker: "ZESC",
    companyName: "“Cеклаб” ХХК",
    operation: "Криптовалют",
  },
  {
    coinName: "Zoos Coin",
    coinTicker: "ZOOS",
    companyName: "Зоос Дижитал Эксчэйнж ХХК",
    operation: "Криптовалют",
  },
];
const table3 = [
  {
    companyName: "Инновац, цахим бодлогын байнгын хороо",
    operation: "Зохицуулагч байгууллага",
    webLink: "https://www.parliament.mn",
  },
  {
    companyName: "Хууль зүй, дотоод хэргийн яам",
    operation: "Зохицуулагч байгууллага",
    webLink: "https://mojha.gov.mn/home",
  },
  {
    companyName: "Цахим, хөгжил харилцаа холбооны яам",
    operation: "Зохицуулагч байгууллага",
    webLink: "https://mddc.gov.mn/mn/",
  },
  {
    companyName: "Санхүүгийн зохицуулах хороо",
    operation: "Зохицуулагч байгууллага",
    webLink: "http://www.frc.mn",
  },
  {
    companyName: "Монголбанк",
    operation: "Зохицуулагч байгууллага",
    webLink: "https://www.mongolbank.mn/mn/",
  },
  {
    companyName: "Татварын Ерөнхий Газар",
    operation: "Зохицуулагч байгууллага",
    webLink: "https://mta.gov.mn/home",
  },
  {
    companyName: "Харилцаа холбооны зохицуулах хороо",
    operation: "Зохицуулагч байгууллага",
    webLink: "https://crc.gov.mn/home/mn",
  },
  {
    companyName: "Стандарт, хэмжил зүйн газар",
    operation: "Зохицуулагч байгууллага",
    webLink: "https://masm.gov.mn",
  },
  {
    companyName: "Улсын бүртгэлийн ерөнхий газар",
    operation: "Зохицуулагч байгууллага",
    webLink: "https://burtgel.gov.mn/home",
  },
  {
    companyName: "Гаалийн Ерөнхий Газар",
    operation: "Зохицуулагч байгууллага",
    webLink: "https://www.customs.gov.mn",
  },
  {
    companyName:
      "Цагдаагийн Ерөнхий Газар, Эрүүгийн цагдаагийн алба, Эдийн засгийн гэмт хэрэгтэй тэмцэх газар",
    operation: "Зохицуулагч байгууллага",
    webLink: "https://police.gov.mn/home",
  },
  {
    companyName: "Тагнуулын Ерөнхий Газар, Терроризмтэй тэмцэх зөвлөл",
    operation: "Зохицуулагч байгууллага",
    webLink: "https://gia.gov.mn",
  },
];
const table4 = [
  {
    companyName: "Эй Ай дайверс солюшн ХХК",
    operation: "Блокчэйн технологи хөгжүүлэгч",
    webLink: "dsolutions.mn",
  },
  {
    companyName: "Блокчэйн сольюшн ХХК",
    operation: "Блокчэйн технологи хөгжүүлэгч",
    webLink: "https://teo.mn",
  },
  {
    companyName: "Поверэд Эй Ди Эм ХХК",
    operation: "Блокчэйн технологи хөгжүүлэгч",
    webLink: "octagon.mn",
  },
  {
    companyName: "Дижитал Эксчейнж Монголиа ХХК",
    operation: "Блокчэйн технологи хөгжүүлэгч",
    webLink: "trade.mn",
  },
  {
    companyName: "Infinite Solutions LLC",
    operation: "Блокчэйн технологи хөгжүүлэгч",
    webLink: "https://infinite.mn",
  },
  {
    companyName: "Крипто үндэстэн Нээлттэй ХК",
    operation: "Блокчэйн технологи хөгжүүлэгч",
    webLink: "https://www.cryptonation.mn",
  },
  {
    companyName: "АйСиТи групп Хаалттай ХК",
    operation: "Блокчэйн технологи хөгжүүлэгч",
    webLink: "https://www.ictgroup.mn",
  },
  {
    companyName: "Нэйшнал Дижитал Трэйшир ХХК",
    operation: "Блокчэйн технологи хөгжүүлэгч",
    webLink: "ntcrypto.net",
  },
];
const table5 = [
  {
    nickname: "Гарааны дижитал солюшнс ХХК",
    operation: "Metaverse",
    project: "Guyuk",
    webLink: "https://guyuk.mn",
  },
  {
    nickname: "Метафорс ХХК",
    operation: "Metaverse",
    project: "Metaland",
    webLink: "https://metaland.mn/en",
  },
];
const table6 = [
  {
    project: "Buhaa",
    exchange: "Octagon",
    marketplace: "octagon.mn",
    operation: "NFT Marketplace",
    webLink: "https://buha.mn",
  },
  {
    project: "MongolNFT",
    exchange: "Complex",
    marketplace: "https://mongolnft.com",
    operation: "NFT Marketplace",
    webLink: "https://mongolnft.com",
  },
];
const table7 = [
  {
    companyName: "ТэнГэр ТВ ХХК, Крипто цаг",
    operation: "Мэдээллийн суваг",
    webLink: "https://www.tngr.tv",
  },
  {
    companyName: "Классик крипто ХХК",
    operation: "Мэдээллийн суваг",
    webLink: "www.krypto.mn",
  },
  {
    companyName: "Ард Академи ТББ",
    operation: "Мэдээллийн суваг",
    webLink: "https://academy.ard.mn",
  },
  {
    companyName: "Lemon Press LLC",
    operation: "Мэдээллийн суваг",
    webLink: "https://lemonpress.mn",
  },
  {
    companyName: "Cryptoverse",
    operation: "Мэдээллийн суваг",
    webLink: "https://www.facebook.com/Cryptoversemongolia",
  },
  {
    companyName: "Крипто пуужин НҮТББ",
    operation: "Мэдээллийн суваг",
    webLink: "https://cryptopuujin.mn/",
  },
  {
    companyName: "Coin Price",
    operation: "Мэдээллийн суваг",
    webLink: "https://coinprice.mn/mn",
  },
];
const table8 = [];
const table9 = [];
const table10 = [];

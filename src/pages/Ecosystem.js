import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";
import Hero2 from "../Components/Hero2";

export default function Ecosystem() {
  return (
    <div>
      <Header />
      <Hero2 />
      <div className='section-padding bg-gray'>
        <div id='ecosystem' className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='block-contents text-center'>
                <div className='section-title'>
                  <h2>МОНГОЛЫН КРИПТО ЭКОСИСТЕМИЙН ЗУРАГЛАЛ 2023</h2>
                </div>
                <p className='mt-5 w-3/4 mx-auto'>
                  МБНХ анх удаа Монголын Крипто Экосистемийн Зураглал 2023-ыг
                  боловсруулан гаргалаа. Зураглал боловсруулсан үндсэн санаа нь
                  крипто зах зээлийн оролцогч талуудыг тодорхойлох, хүрээллийг
                  <br />
                  (community) бэхжүүлэх, байгууллага хоорондын хамтын ажиллагаа,
                  хөрөнгө оруулалтын боломжуудыг
                  <br /> бий болгох, олон нийтэд таниулах юм.
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
                  2023 оны зураглалд зохицуулагч байгууллага, крипто хөрөнгийн
                  бирж, криптовалют, блокчэйн технологи хөгжүүлэгч тэргүүтэй
                  давхардсан тоогоор 103 байгууллага 9 бүлэгт тус бүрийн үйл
                  ажиллагааны чиглэлээрээ хуваарилагдаж орсон байна.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='block-contents text-center'>
                <p className='mt-5 w-3/4 mx-auto'>
                  Бид зураглалын боловсруулж гаргахдаа аль болох оролцогч
                  талуудыг бүрэн хамруулахын тулд нээлттэй бүртгэл үүсгэж
                  шалгаруулалт хийсэн бөгөөд дотоодын судалгаа шинжилгээ болоод
                  тухайн бүртгүүлсэн байгууллагын мэдээлэл дээр үндэслэж
                  зураглалд оруулах эсэх шийдвэрийг гаргасан болно.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='block-contents text-center'>
                <p className='mt-5 w-3/4 mx-auto'>
                  Крипто экосистемийн зураглалыг байгууллагууд хөрөнгө
                  оруулалтын питч, танилцуулга, улс орныг төлөөлсөн арга хэмжээ,
                  судалгааны материал гэх мэт өөрийн хэрэгцээ шаардлагын дагуу
                  ашиглаж болох бөгөөд тус зураглалыг бий болгоход оролцсон,
                  дэмжсэн байгууллагуудын ажлыг үнэлж нэрийг дурдаж, лого
                  мэдээллийг хасахгүй бүтэн зургаар нь ашиглахыг зөвлөж байна.
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

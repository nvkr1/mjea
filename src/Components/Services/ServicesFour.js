import img1 from "../../assets/img/person1.png";
import img2 from "../../assets/img/person2.png";
const ServicesFour = () => {
  return (
    <section className='our-service-wrapper bg-black section-padding'>
      <div className='container'>
        <div className='row mtm-30'>
          <h2 className='text-white'>УДИРДЛАГА</h2>
          <div className='col-md-6 col-12 col-lg-6 mt-30'>
            <div className='service-item-card'>
              <div className='row'>
                <div className='col'>
                  <div className='icon'>
                    <img src={img1} alt='' width={200} />
                    <div className='contents'></div>
                  </div>
                </div>

                <div className='col d-flex align-items-center'>
                  <div className='contents'>
                    <h4>
                      <p className='text-nowrap ' to='/'>
                        ГАНЗОРИГ Чулуун
                      </p>
                    </h4>
                    <p className='text-white font-bold'>
                      Удирдах зөвлөлийн дарга
                    </p>
                  </div>
                </div>
              </div>
              <div className='contents'>
                <p>
                  <br />
                  Ч.Ганзориг нь Унгар улсын Будапешт хотын Корвинусын их
                  сургуульд бизнес менежментийн бакалавр зэрэг эзэмшсэн бөгөөд
                  Ард Секюритиз ҮЦК, Ард Санхүүгийн Нэгдэл ХК, Унгар улсын
                  Wallis Asset Management, ХасБанк, ТэнГэр Санхүүгийн Нэгдэл,
                  ТэнГэр Даатгал зэрэг бизнесийн байгууллагад ажиллаж байсан
                  туршлагатай юм.
                </p>
                <p>
                  <br />
                  Ч.Ганзориг нь салбартаа тэргүүлгэх Digital Assets Exchange
                  (DAX) буюу одоогийн idax виртуал хөрөнгийн биржийг үүсгэн
                  байгуулагч, ТУЗ-ийн гишүүн агаад Гүйцэтгэх захирал, Ард Кредит
                  ББСБ ХК, Ард Даатгал ХК, Ард Секюритиз ХХК компаниудын ТУЗ-ийн
                  гишүүн, Номадик Офрөүд ХХК-ийн Гүйцэтгэх захирал зэрэг албан
                  тушаалуудыг хашдаг бөгөөд Нийгмийн Ардчилал Монголын
                  Залуучуудын Холбооны удирдах зөвлөлийн гишүүнээр ажиллаж
                  байна. Тэрээр 2013 онд Ард Кредит ББСБ ХК-г үүсгэн байгуулж
                  2020 оныг дуустал тус компанийн Гүйцэтгэх захирал, 2020 оноос
                  ТУЗ-ийн даргаар ажиллаж байна.
                </p>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-12 col-lg-6 mt-30'>
            <div className='service-item-card'>
              <div className='row'>
                <div className='col'>
                  <div className='icon'>
                    <img src={img2} alt='' width={200} />
                    <div className='contents'></div>
                  </div>
                </div>

                <div className='col d-flex align-items-center'>
                  <div className='contents'>
                    <h4>
                      <p className='text-nowrap ' to='/'>
                        ТӨРТОГТОХ Эрдэнбаатар
                      </p>
                    </h4>
                    <p className='text-white font-bold'>Гүйцэтгэх захирал</p>
                  </div>
                </div>
              </div>
              <div className='contents'>
                <p>
                  <br />
                  Э.Төртогтох нь МУИС-ийг Хэрэглээний математикийн мэргэжлээр
                  бакалавр, Япон улсын Иватэ ИС-ийг Хэрэглээний математик,
                  загварчлалын мэргэжлээр магистр зэрэгтэй тус тус төгссөн.
                </p>
                <p>
                  <br />
                  Ажлын гараагаа банк, санхүүгийн салбараас эхлүүлсэн бөгөөд
                  эрсдэлийн удирдлага, тогтвортой санхүүжилт, бүтээгдэхүүн
                  хөгжүүлэлт, өгөгдлийн шинжилгээ-кредит скорингийн чиглэлээр 8
                  гаруй жил ажилласан туршлагатай. 2012-2017 онд Капитал, Богд
                  банк, 2020-2021 онд Бүрэн Скор ЗМС, 2022-2023 онд Монголын
                  Финтекийн Холбоо, 2023 оноос Ард Санхүүгийн Нэгдлийн Эрсдэл
                  Эрхэлсэн захирлаар, 2023 оны 03 сараас эхлэн Монголын
                  Биржүүдийн Нэгдсэн Холбооны Гүйцэтгэх захирал ажиллаж байна.
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

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '../utils/slider.css';

import { Pagination,  Autoplay, Navigation } from 'swiper';


export default function Slider() {

  return (
    <section className="container__reviews">
      <h3 className="title">То, ради чего мы работаем...</h3>
      <h4 className="title">— это вы !</h4>
      <div className="swiper-wrapper">
        <Swiper className='swiper-container'
          slidesPerView={1}
          centeredSlides
          spaceBetween={60}
          loop
          pagination={{
            clickable: true,
            el: '.pagination',
            type: 'bullets',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={
            {
              320: {
                slidesPerView: 1,
              },
              960: {
                slidesPerView: 2,
              },
              1920: {
                slidesPerView: 3,
              },
            }
          }
          navigation={{
            nextEl: '.button-next',
            prevEl: '.button-prev',
          }}
          modules={[Pagination, Autoplay, Navigation]}
        >
          <SwiperSlide className="swiper-slide"><img className="avatar" src="/images/otz/1.jpg" alt="" />
            <div className="slide__desription">
              <div className="slide__title">
                <div className="slide_name">Андрей Ключевский</div>
                <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
                <div className="slide__town">Севастополь</div>
              </div>
              <div className="slide__review">Дали 5000 рублей на неделю без каких либо заморочек. Заявку заполнить легко
                и
                без
                особых подтверждений, просто паспорт из документов. Погашение происходит сразу же и займ закрывают
                по
                факту. Меня устроило более чем.
              </div><img src="/images/otz/ok.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide"><img className="avatar" src="/images/otz/2.jpg" alt="" />
            <div className="slide__desription">
              <div className="slide__title">
                <div className="slide_name">Валерия Жукова</div>
                <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
                <div className="slide__town">Екатеринбург</div>
              </div>
              <div className="slide__review">Часто беру займы здесь, особенно когда до зарплаты денег не хватает. Очень
                удобно, все делается в онлайне. Не нужно никаких справок с работы, деньги можно взять без
                официального
                трудоустройства. Для меня при выборе играло это важную роль. И теперь хочется просто им выразит
                благодарность за оказанное доверие и что всегда одобряют на протяжении сколького времени.
              </div><img src="/images/otz/vk.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img className="avatar" src="/images/otz/3.jpg" alt="" />
            <div className="slide__desription">
              <div className="slide__title">
                <div className="slide_name">Светлана Бурова</div>
                <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
                <div className="slide__town">Коломна</div>
              </div>
              <div className="slide__review">Отличный сервис. Уже неоднократно обращалась и всегда выручают, несмотря на
                мою
                так сказать сложную кредитную историю. Когда с тобой хорошо, то и ты хорошо себя ощущаешь !
              </div>
              <img src="/images/otz/ok.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img className="avatar" src="/images/otz/4.jpg" alt="" />
            <div className="slide__desription">
              <div className="slide__title">
                <div className="slide_name">Валерий Козлов</div>
                <div className="stars">⭐️⭐️⭐️⭐️</div>
                <div className="slide__town">Мценск</div>
              </div>
              <div className="slide__review">Долго маячила их реклама, думал оно того не стоит. Как оказалось нормальный
                сайт,
                все по честному. Не хватало чутка денег так выручили. В общем пользуйтесь
              </div><img src="/images/otz/ok.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img className="avatar" src="/images/otz/5.jpg" alt="" />
            <div className="slide__desription">
              <div className="slide__title">
                <div className="slide_name">Екатерина Кретова</div>
                <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
                <div className="slide__town">Сургут</div>
              </div>
              <div className="slide__review">Отличный сервис ! Разобраться с оформлением займа довольно просто, на все
                про
                все
                уходит всего пару минут и деньги уже на карте. Неоднократно обращалась за помощью, всегда выручали,
                а
                потому с уверенностью могу сказать - надежно, выгодно и быстро !
              </div><img src="/images/otz/ok.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img className="avatar" src="/images/otz/6.jpg" alt="" />
            <div className="slide__desription">
              <div className="slide__title">
                <div className="slide_name">Артём Пратов</div>
                <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
                <div className="slide__town">Курск</div>
              </div>
              <div className="slide__review">Советую потому что при регистрации не нужно указывать номеров друзей или
                родных,
                кроме своего личного. Это конечно не значит, что я собираюсь взять и не платить, но всякое может
                случится
                и ставить в известность других людей я хочу в последнюю очередь.
              </div><img src="/images/otz/vk.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img className="avatar" src="/images/otz/7.jpg" alt="" />
            <div className="slide__desription">
              <div className="slide__title">
                <div className="slide_name">Лидия Зотова</div>
                <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
                <div className="slide__town">Владивосток</div>
              </div>
              <div className="slide__review">Я хотела сделать подарок мужу на годовщину свадьбы-подарить весла для его
                лодки,
                он заядлый рыбак, но аванс пришел меньше, а спросить денег у родителей я постеснялась. Я уже брала
                год
                назад и когда обращалась, думала откажут или придется снова регистрацию проходить-а нет ! Просто
                зашла
                и
                попросила 7 тысяч, как деньги пришли, даже не ожидала. Сервис очень лояльный по условиям и клиентам
                !
              </div><img src="/images/otz/ok.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img className="avatar" src="/images/otz/9.jpg" alt="" />
            <div className="slide__desription">
              <div className="slide__title">
                <div className="slide_name">Марина Соловьёва</div>
                <div className="stars">⭐️⭐️⭐️⭐️</div>
                <div className="slide__town">Зеленоград</div>
              </div>
              <div className="slide__review">Вариант по классике дотянуть до зарплаты взять деньги в займ. Поначалу не
                особо
                доверяла таким товарищам, но сейчас уже нормально отношусь. По сути платишь за анонимность, не
                просишь
                в
                долг у друзей или у родных. Тем более в такое то время. Хоть им не нужно справок и поручителей.
                Провозилась немного, но деньги получила. В остальном все просто.
              </div><img src="/images/otz/ok.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img className="avatar" src="/images/otz/10.jpg" alt="" />
            <div className="slide__desription">
              <div className="slide__title">
                <div className="slide_name">Анита Сергеева</div>
                <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
                <div className="slide__town">Волгоград</div>
              </div>
              <div className="slide__review">Третий раз оформляю здесь заем. Процент в принципе не большой выходит.
                Хорошо,
                что все онлайн не надо никуда идти. В любое время дня и ночи одним словом. На карту деньги поступают
                быстро, в противном случае бы не обращалась. Но есть есть вопрос по лимиту суммы.
              </div><img src="/images/otz/vk.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="swiper__buttons">
        <div className="button-prev">
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
            <title>Arrow Undo</title>
            <path d="M240 424v-96c116.4 0 159.39 33.76 208 96 0-119.23-39.57-240-208-240V88L64 256z" fill="#273036" stroke="currentColor" strokeLinejoin="round" strokeWidth={2} />
          </svg>
        </div>
        <div className="pagination pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal" />
        <div className="button-next">
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
            <title>Arrow Redo</title>
            <path d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z" fill="#273036" stroke="currentColor" strokeLinejoin="round" strokeWidth={2} />
          </svg>
        </div>
      </div>
    </section >

  );
}

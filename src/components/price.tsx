import './price.css';

export default function Price() {
  return (
    <section className="plans__screen">
      <div className="plans__container container">
        <h2 className="title">ТАРИФЫ</h2>
        <p className="plans__subtitle subtitle">ЧТОБЫ НАЧАТЬ СЖИГАТЬ ВЕС - ВЫБЕРИТЕ ПЛАН, КОТОРЫЙ НАИБОЛЕЕ ВАМ ПОДХОДИТ</p>
        <div className="plans">
          <div className="plan">
            <div className='plan__head'>
              <h3 className="plan__header subtitle">Удар по сантиметрам</h3>
              <h4 className="plan__price">1200<span className="plan__price__period">руб/месяц</span><span className="price__before">1600руб/мес</span></h4>
            </div>
            <ul className="plan__list">
              <li className="plan__list__item"><svg className="li__ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M416 128L192 384l-96-96" /></svg>
                10 тренировок
              </li>
              <li className="plan__list__item"><svg className="li__ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M416 128L192 384l-96-96" /></svg>86 лучших упражнений</li>
              <li className="plan__list__item"><svg className="li__ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M416 128L192 384l-96-96" /></svg>Доступ к тренировкам 24/7</li>
              <li className="plan__list__item"><svg xmlns="http://www.w3.org/2000/svg" className="li__not" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144M368 144L144 368" /></svg>
                Все обновления курсов в будущем
              </li>
              <li className="plan__list__item"><svg xmlns="http://www.w3.org/2000/svg" className="li__not" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144M368 144L144 368" /></svg>
                Регулярное обновление рационов питания и диет
              </li>
            </ul>

            <a href="/" className="plan__link">ПРОКАЧАТЬСЯ</a>
            <div className="plan__description">ВЫБИРАЯ ПЛАН “УДАР ПО САНТИМЕТРАМ” НА МЕСЯЦ ВЫ ПОЛУЧАЕТЕ НЕ ТОЛЬКО ТРЕНИРОВКИ, НО ТАКЖЕ ВСЕ ВОЗМОЖНЫЕ ОБННОВЛЕНИЯ ПЛАНОВ ПИТАНИЯ!</div>
          </div>
          <div className="plan">
            <div className='plan__head'>
              <h3 className="plan__header subtitle">Идеальное тело</h3>
              <h4 className="plan__price">2900<span className="plan__price__period">руб/год</span></h4>
            </div>
            <ul className="plan__list">
              <li className="plan__list__item"><svg className="li__ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M416 128L192 384l-96-96" /></svg>10 тренировок</li>
              <li className="plan__list__item"><svg className="li__ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M416 128L192 384l-96-96" /></svg>86 лучших упражнений</li>
              <li className="plan__list__item"><svg className="li__ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M416 128L192 384l-96-96" /></svg>Доступ к тренировкам 24/7</li>
              <li className="plan__list__item"><svg className="li__ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M416 128L192 384l-96-96" /></svg>Все обновления курсов в будущем</li>
              <li className="plan__list__item"><svg className="li__ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M416 128L192 384l-96-96" /></svg>Регулярное обновление рационов питания и диет</li>
              <li className="plan__list__item"><svg className="li__ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M416 128L192 384l-96-96" /></svg>Онлайн-чат с тренером</li>
            </ul>
            <a href="/" className="plan__link">ПРОКАЧАТЬСЯ</a>
            <div className="plan__description">ВЫБИРАЯ ПЛАН “ИДЕАЛЬНОЕ ТЕЛО” НА ГОД ВЫ ПОЛУЧАЕТЕ ПОСТОЯННЫЙ ДОСТУП К ТРЕНИРОВКАМ И ДЕТАЛЬНОМУ МЕНЮ НА КАЖДЫЙ ДЕНЬ. + БОНУС ДОСТУП КО ВСЕМ ОБНОВЛЕНИЯМ И ОНЛАЙН КОНСУЛЬТАЦИИ ТРЕНЕРА.</div>
          </div>
          <div className="plan">
            <div className='plan__head'>
              <h3 className="plan__header subtitle">Тело мечты</h3>
              <h4 className="plan__price">1<span className="plan__price__period">руб/скидка 99%</span></h4>
            </div>
            <ul className="plan__list">
              <li className="plan__list__item"><svg className="li__ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M416 128L192 384l-96-96" /></svg>10 тренировок</li>
              <li className="plan__list__item"><svg className="li__ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M416 128L192 384l-96-96" /></svg>86 лучших упражнений</li>
              <li className="plan__list__item"><svg className="li__ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M416 128L192 384l-96-96" /></svg>Доступ к тренировкам 24/7</li>
              <li className="plan__list__item"><svg className="li__ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M416 128L192 384l-96-96" /></svg>Все обновления курсов в будущем</li>
              <li className="plan__list__item"><svg className="li__ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Checkmark</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M416 128L192 384l-96-96" /></svg>Регулярное обновление рационов питания и диет</li>
            </ul>
            <a href="/" className="plan__link">ПРОКАЧАТЬСЯ</a>
            <div className="plan__description">ВЫБИРАЯ ПЛАН “ТЕЛО МЕЧТЫ” НА ГОД ВЫ ПОЛУЧАЕТЕ ПОСТОЯННЫЙ ДОСТУП К ТРЕНИРОВКАМ И ДЕТАЛЬНОМУ МЕНЮ НА КАЖДЫЙ ДЕНЬ. + БОНУС ДОСТУП КО ВСЕМ ОБНОВЛЕНИЯМ И ОНЛАЙН КОНСУЛЬТАЦИИ ТРЕНЕРА.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
